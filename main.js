mustache_x=0;
mustache_y=0;

function preload(){
    mustache_image=loadImage("m.png");
}

function setup(){
canvas=createCanvas(300 , 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300 ,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log("Posenet model in inatilized");
}

function draw(){
image(video, 0,0,300,300)

image(mustache_image, mustache_x , mustache_y, 50, 30)
}

function take_snapshot(){
    save('ManyasFilterImage');
}

function gotPoses(results){
   if(results.length > 0){
    console.log(results);
    mustache_x = results[0].pose.nose.x-26;
    mustache_y = results[0].pose.nose.y+2;
    console.log("mustache_y "+mustache_y + "mustache_x " +mustache_x);
    
   }


}
