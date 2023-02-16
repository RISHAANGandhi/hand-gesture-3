https://teachablemachine.withgoogle.com/models/aDuBmmMOT/
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
var camera=document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='image' src="+data_uri+">";
    });
}

console.log("ml5 version: ",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/aDuBmmMOT/model.json",modelloaded);

function modelloaded(){
    console.log("modelloaded");
}
 function predict(){
    img=document.getElementById("image");
    classifier.classify(img,gotResult);
 }

 function speak(){
    var synth=window.speechSynthesis;
    var speak_data=hand_gesture;
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
 }

 function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("gesture_name").innerHTML=results[0].label;
        hand_gesture=results[0].label;
        speak();
        if(hand_gesture=="thumbs up/ok"){
            document.getElementById("emoji1").innerHTML="&#128077;";
        }
        if(hand_gesture=="nice"){
            document.getElementById("emoji1").innerHTML="&#128076;";
        }
        if(hand_gesture=="peace"){
            document.getElementById("emoji1").innerHTML="&#9996;";
        }
    }
 }