Pred_1="";

Webcam.set ({
    width:300,
    height:350,
    image_format:'png',
    png_quality: 90
});
pic = document.getElementById("webcam");

Webcam.attach("#webcam");

function snap() {
Webcam.snap(function (img_url){
document.getElementById("picture").innerHTML = "<img id='img_1' src='"+ img_url+"'/>";
})
}
model1 = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/R5DNX9p8y/model.json", loaded);

function loaded() {
    console.log("The Model Has Been loaded");
}

function check() {
img = document.getElementById("img_1");
model1.classify(img, got_results);
}

function got_results(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        Pred_1 = results[0].label;
        document.getElementById("emotion1").innerHTML= Pred_1;
        speak();

if (Pred_1 == "Best") {
    document.getElementById('emoji1').innerHTML = "&#128578;";
}
if (Pred_1 == "Great") {
    document.getElementById('emoji1').innerHTML = "&#128546;";
}
if (Pred_1 == "Victory") {
    document.getElementById('emoji1').innerHTML = "&#128564;";
}
if (Pred_1 == "High-Five") {
    document.getElementById('emoji1').innerHTML = "&#128545;";
}
if (Pred_1 == "Normal") {
    document.getElementById('emoji1').innerHTML = "&#128528;";
}


}
}

function speak(){
    synth = window.speechSynthesis;
     data = "The First Prediction Is" + Pred_1 + " And The Second Prediction Is " + Pred_2 ; 
     speak_r = new SpeechSynthesisUtterance(data);
     synth.speak(speak_r);
}

