image_1 = "";
Status = "";
var objects =[];
function preload()
{
    image_1 = loadImage("dog_cat.jpg");
}

function setup()
{
    canvas = createCanvas(500,400);
    canvas.center();
    classifier = ml5.objectDetector('cocossd', modelloaded);
    video = createCapture(VIDEO);
    video.hide();
    video.size(500, 400)
    
    document.getElementById("status").innerHTML = "Status : Dectecting Object";

}

function modelloaded()
{
console.log("modelloaded");
Status = true; 
classifier.detect(video, gotResult );
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
console.log(results);
objects = results ;
    }
}

function draw()
{

    image(video, 0, 0, 500, 400);
    if(Status != "")
    {
        for(a=0; a<objects.length; a++)
        {
            document.getElementById("status").innerHTML = "Status : Dectected";
    document.getElementById("objects").innerHTML = "Number Of objects - "+objects.length;
    r = random(255);
    g = random(255);
    b = random(255);

    console.log(r+g+b);
    
            percent = Math.floor(objects[a].confidence*100);
            fill(r, g, b);
            text(objects[a].label+" "+percent+"%", objects[a].x+15, objects[a].y+15);
            stroke(r, g, b);
            noFill();
            rect(objects[a].x, objects[a].y, objects[a].width, objects[a].height);
        

        }
    }
}

