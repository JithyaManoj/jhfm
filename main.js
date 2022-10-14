 function setup() {
    cookie=createCanvas(550,500);
    cookie.position(800,100);
    cupcake=createCapture(VIDEO);
    cupcake.size(550,500);
   fries=ml5.poseNet(cupcake,modelloaded);
   fries.on("pose",get_food);
 }
 rwrist_x="";
 lwrist_x="";
 difference="";

function modelloaded() {
   console.log("model is fully loaded cupcake");
}
function get_food(f){
   if(f.length>0){
      //console.log(f);
      rwrist_x=f[0].pose.rightWrist.x;
      lwrist_x=f[0].pose.leftWrist.x;
      console.log("rightwrist :",rwrist_x,"leftwrist :",lwrist_x);
      difference=floor(lwrist_x-rwrist_x);
   }
}
function draw() {
   background('#969A97');
   document.getElementById("pasta").innerHTML="font size is :"+difference+"px";
   fill("coral");
   stroke("black");
   textSize(difference);
   text("BONJOUR",50,200);

  }




