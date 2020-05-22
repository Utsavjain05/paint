var pen;
var array;
array=[];
var position;
var database;
function setup(){
    database=firebase.database;
var canvas=createCanvas(400,400);
pen=createSprite(200,200,10,10);
var penref=database.ref(pen/position);
penref.on("value",readposition,showerror)
}

function draw(){
    if (keydown(UP_ARROW)){
writeposition(0,1);

    }
    if(keyDown(DOWN_ARROW)){
        writeposition(1,0);
    }


    position=[pen.position.x,pen.position.y]
     array.push(position);
     for(var i=0;i<array.length;i=i+1){
line (array[0][0],array[0][1])
     }
     drawsprites();
 }   

function writeposition(x,y){

    database.ref('pen/position').set({                      //where we have given value to variable position.
        'x':position.x+x,
        'y':position.y+y,
        

}
function readposition(data){
    position=data.val();
    pen.x=position.x;
    pen.y=position.y;
}
function showerror(){
    console.log("mistake");
}




