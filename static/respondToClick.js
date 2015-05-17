$("#image").click(
    function(e){
        var x = e.offsetX;
        var y = e.offsetY;
        addPoint(x,y);
    }
)
function addPoint(x,y)
{
	show_image(x,y);
	show_box(x,y);
}
function show_image(x, y) {
    var img = document.createElement("img");
	var height = 60;
	var width = 30;
    img.src = "/static/waypointOrange.png";
    img.width = width;
    img.height = height;
    img.style.position="absolute";
    img.style.top= y-height;
    img.style.left= x-width/2;
    console.log(x,y);
    img.id="waypoint";
    img.class="waypoint"
    document.getElementById("imageContainer").appendChild(img);
}
$("#waypoint").click(
    function(e){
        console.log("Clicked on waypoint");
    }
)
function show_box(x, y){
	var div = document.createElement("div");	
	div.innerHTML = '<form><input type="text" id="' + x + ','+y+'TB"></input><button type="button" id="' + x + ','+y+'Btn" onclick=createPoint('+x+','+y+')>Add A Point</button>';
	div.style.left = x;
	div.style.top = y;
	div.style.position="absolute";
	div.id = x+","+y+"Div";
	document.getElementById("imageContainer").appendChild(div);
	}
function createPoint(x,y)
{	
	$.post("addPoint", {xCoordinate:x, yCoordinate:y}, removeDiv(x,y), json);

}
function removeDiv(x,y)
{
	var div = document.getElementById(x+","+y+"Div");
	div.parentNode.removeChild(div);
}
