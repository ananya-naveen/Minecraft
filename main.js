var canvas=new fabric.Canvas("myCanvas");
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_object="";
var block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:player_y,
    left:player_x
});
canvas.add(player_object);
    });
}

function new_img(get_image){
    fabric.Image.fromURL(get_image,function(Img){
block_image_object=Img;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
    top:player_y,
    left:player_x
});
canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=='80'){
        console.log("P and Shift Pressed Together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true && keypressed=='77'){
        console.log("M and Shift Pressed Together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keypressed=='38'){
        up();
        console.log("Up");
    }
    if(keypressed=='40'){
        down();
        console.log("Down")
    }
    if(keypressed=='37'){
        left();
        console.log("Left")
    }
    if(keypressed=='39'){
        right();
        console.log("Right")
    }
    if(keypressed=='67'){
        new_img("cloud.jpg");
        console.log("Cloud");
    }
    if(keypressed=='68'){
        new_img("dark_green.png");
        console.log("Dark Green");
    }
    if(keypressed=='71'){
        new_img("ground.png");
        console.log("Ground");
    }
    if(keypressed=='76'){
        new_img("light_green.png");
        console.log("Light Green");
    }
    if(keypressed=='82'){
        new_img("roof.jpg");
        console.log("Roof");
    }
    if(keypressed=='84'){
        new_img("trunk.jpg");
        console.log("Trunk");
    }
    if(keypressed=='85'){
        new_img("unique.png");
        console.log("Unique");
    }
    if(keypressed=='87'){
        new_img("wall.jpg");
        console.log("Wall");
    }
    if(keypressed=='89'){
        new_img("yellow_wall.png");
        console.log("Yellow Wall");
    }
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        console.log("Block Image Height= "+block_image_height);
        console.log("When up arrow is pressed x= "+player_x+", y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_image_height;
        console.log("Block Image Height= "+block_image_height);
        console.log("When down arrow is pressed x= "+player_x+", y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-block_image_width;
        console.log("Block Image Width= "+block_image_width);
        console.log("When left arrow is pressed x= "+player_x+", y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=850){
        player_x=player_x+block_image_width;
        console.log("Block Image Width= "+block_image_width);
        console.log("When right arrow is pressed x= "+player_x+", y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}