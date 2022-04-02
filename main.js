function preload(){

}

function setup(){
    canvas = createCanvas(640, 600);
    canvas.position(410, 240);
    video = createCapture(VIDEO);
    video.hide();
    tintcolour = "";
}

function draw(){
    image(video, 0, 0, 640, 600);
    tint(tintcolour);
}

function take_snapshot(){
    save('pic_ture.png');
}

function take_pic(){
    tintcolour = document.getElementById("in1").value;
}