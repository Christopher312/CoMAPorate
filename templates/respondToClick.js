$("#image").click(
    function(e){
        var x = e.offsetX;
        var y = e.offsetY;
        show_image("waypointOrange.png", 30, 60, "waypoint", x, y);
		show_box(x,y)
    }
)
function show_image(src, width, height, alt, x, y) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    img.style.position="absolute";
    img.style.top= y-60;
    img.style.left= x-15;
    console.log(x,y)
    img.id="waypoint";
    document.getElementById("imageContainer").appendChild(img);
}
$("#waypoint").click(
    function(e){
        console.log("Clicked on waypoint")
    }
)
function show_box(x, y){
	var div = document.createElement("div");
	//div.innerHTML = '<input type="text" id="searchTB"></input><button type="button" id="searchButton" onClick=removeBox(div)>Add A Point</button>'
    div.innerHTML = '<input type="text" id="searchTB"></input><button type="button" id="searchButton" onClick=console.log("mybutton was clickede")>Add A Point</button>'
	div.style.left = x;
	div.style.top = y;
	div.style.position="absolute";
	document.getElementById("imageContainer").appendChild(div);
}
function removeBox(div){
	console.log("this was called")
	div.parentNode.removeChild(div)
}
