
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
        x2 = e.pageX;
        y2 = e.pageY
        show_box_2(x,y)//;img.style.left, img.style.top)
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
	div.innerHTML = '<form><input type="text" id="' + x + ','+y+'TB" placeholder="name"></input><button type="button" id="' + x + ','+y+'Btn" onclick=createPoint('+x+','+y+')>Add A Point</button>';
	div.style.left = x;
	div.style.top = y;
	div.style.position="absolute";
	div.id = x+","+y+"Div";
	document.getElementById("imageContainer").appendChild(div);
	}
function createPoint(x,y)
{	
    var info = document.getElementById(x +','+y+'TB').value
	$.post("place", {xCoordinate: x, yCoordinate: y, name: info}, removeDiv(x,y), 'json');

}
function modifyPoint(x,y,tagN,tagV)
{
    $.post("modify", {xCoordinate: x, yCoordinate: y, tagName: tagN, tagValue: tagV}, 'json');
}
function removeDiv(x,y)
{
	var div = document.getElementById(x+","+y+"Div");
	div.parentNode.removeChild(div);
}

$("#WashingtonDC").click(
    function(e) {
        if (document.getElementById("exampleInputName2").value.toLowerCase() === "washington dc") {
//            document.getElementById("imageContainer").appendChild('<img src="/static/white-house-grounds-map.jpg" alt="DC" class=".img-responsive">');

            window.location = "http://localhost:5000/washingtondc";
            console.log(window.location);
        }
        else if (document.getElementById("exampleInputName2").value.toLowerCase() === "west middle school") {
           //document.getElementById("imageContainer").appendChild('<img src="/static/WestMiddleMap.jpg" alt="School Map" class=".img-responsive">');
            window.location = "http://localhost:5000/westmiddle";
            console.log(window.location);
        }
        else {
            alert("That map doesn't exist!");
        }
});
function show_box_2(x,y){
    
    //var ans = window.prompt("Enter 1 to view info, 2 to add a tag");
    //if(ans==2) {
        var div = document.createElement("div");    
        div.innerHTML = '<form><input type="text" id="' + x + ','+y+'TagNameTB" placeholder="Tag Name"></input><br><input type="text" id="' + x + ','+y+'TagTextTB" placeholder="Tag Text"></input><br><button type="button" id="' + x + ','+y+'TagBtn" onclick=createTag('+x+','+y+')>Add A Tag</button>';
        div.style.left = x;
        div.style.top = y;
        div.style.position="absolute";
        div.id = x+","+y+"Div2";
        document.getElementById("imageContainer").appendChild(div);
    //}
    //else {
        
       // $.get("/getInfo", function(data){window.alert(data[x+","+y])});
        //window.alert(obj.toString())
    //}
    
   /* var div = document.createElement("div");    
        div.innerHTML = '<form><input type="text" id="' + x + ','+y+'TagNameTB" placeholder="Tag Name"></input><br><input type="text" id="' + x + ','+y+'TagTextTB" placeholder="Tag Text"></input><br><button type="button" id="' + x + ','+y+'TagBtn" onclick=createTag('+x+','+y+')>Add A Tag</button>';
        div.style.left = x;
        div.style.top = y;
        div.style.position="absolute";
        div.id = x+","+y+"Div2";*/
}

function createTag(x,y){
    var tagName = document.getElementById(x+","+y+"TagNameTB");
    var tagValue = document.getElementById(x+","+y+"TagTextTB");
    console.log(tagName.value, tagValue.value);

    var div = document.getElementById(x+","+y+"Div2");
    div.parentNode.removeChild(div);
    //modifyPoint(x,y,tagName,tagValue);
}