$("#image").click(
    function(e){
        var x = e.pageX;
        var y = e.pageY;
        console.log(e);
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
    img.onclick=function(e){
        x = e.pageX;
        y = e.pageY
        show_box_2(x,y)
    }
    document.getElementById("imageContainer").appendChild(img);
}
$("#waypoint").click(
    function(e){
        console.log("Clicked on waypoint");
    }
)
function show_box(x, y){
	var div = document.createElement("div");	
	div.innerHTML = '<form><input type="text" id="' + x + ','+y+'TB" value="name"></input><button type="button" id="' + x + ','+y+'Btn" onclick=createPoint('+x+','+y+')>Add A Point</button>';
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

$("#WashingtonDC").click(
    function(e) {
        if (document.getElementById("exampleInputName2").value === "Washington DC") {
            window.location = "map.html";
        }
        else {
            alert("That map doesn't exist!");
        }
});
function show_box_2(x,y){
    //this is not done at all
    var div = document.createElement("div");    
    div.innerHTML = '<form><input type="text" id="' + x + ','+y+'TagNameTB" value="Tag Name"></input><br><input type="text" id="' + x + ','+y+'TagTextTB" value="Tag Text"></input><br><button type="button" id="' + x + ','+y+'TagBtn" onclick=createTag('+x+','+y+')>Add A Tag</button>';
    div.style.left = x;
    div.style.top = y;
    div.style.position="absolute";
    div.id = x+","+y+"Div2";
    document.getElementById("imageContainer").appendChild(div);
}

function createTag(x,y){
    var tagName = document.getElementById(x+","+y+"TagNameTB");
    var tagValue = document.getElementById(x+","+y+"TagTextTB");
    console.log(tagName.value, tagValue.value);

    var div = document.getElementById(x+","+y+"Div2");
    div.parentNode.removeChild(div);
}