var myObj, x,y,i,z;
var proxy = 'https://cors-anywhere.herokuapp.com/';
$(document).ready(function(){
    $.getJSON(proxy +"https://forum.amarantos.org/directory_items.json?order=likes_received&period=monthly", function(data, status){
      myObj=data;
      //alert( myObj + "Status:" + status );
	  for(i = 0; i < myObj.directory_items.length; i++) {
x = myObj.directory_items[i].likes_received;
y = myObj.directory_items[i].user.name;
z = myObj.directory_items[i].user.avatar_template;
if(i==0)
{
document.getElementById("first1").innerHTML=y;
z=z.replace("{size}", "96");
z= "https://forum.amarantos.org"+ z;
GFG_Fun();
function GFG_Fun() {
            var img = new Image();
            img.src = z;
            document.getElementById('rounded').appendChild(img).style = "border-radius: 50%;";
            			
        }  
}
if(i==1)
{
document.getElementById("second2").innerHTML=y;
z=z.replace("{size}", "96");
z= "https://forum.amarantos.org"+ z;
GFG_Fun();
function GFG_Fun() {
            var img = new Image();
            img.src = z;
            document.getElementById('rounded1').appendChild(img).style = "border-radius: 50%;"; 
        }  
}
if(i==2)
{
document.getElementById("third3").innerHTML=y;
z=z.replace("{size}", "96");
z= "https://forum.amarantos.org"+ z;
GFG_Fun();
function GFG_Fun() {
            var img = new Image();
            img.src = z;
            document.getElementById('rounded2').appendChild(img).style = "border-radius: 50%;"; 
        }  }
if(i==3)
{
document.getElementById("fourth4").innerHTML=y;
z=z.replace("{size}", "96");
z= "https://forum.amarantos.org"+ z;
GFG_Fun();
function GFG_Fun() {
            var img = new Image();
            img.src = z;
            document.getElementById('rounded3').appendChild(img).style = "border-radius: 50%;"; 
        }  
}
if(i==4)
{
document.getElementById("fifth5").innerHTML=y;
z=z.replace("{size}", "96");
z= "https://forum.amarantos.org"+ z;
GFG_Fun();
function GFG_Fun() {
            var img = new Image();
            img.src = z;
            document.getElementById('rounded4').appendChild(img).style = "border-radius: 50%;"; 
        }  
}
if(i==5)
{
document.getElementById("sixth6").innerHTML=y;
z=z.replace("{size}", "96");
z= "https://forum.amarantos.org"+ z;
GFG_Fun();
function GFG_Fun() {
            var img = new Image();
            img.src = z;
            document.getElementById('rounded5').appendChild(img).style = "border-radius: 50%;"; 
        }  
}
if(i<6)
{
continue;
}
}
    });
  });
