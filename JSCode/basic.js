
var btnMenu = document.getElementsByClassName("button")[0];
var navMenu = document.getElementById("navMenu");
var menuContent = document.getElementById("nav-content");
var bgDiv = document.getElementsByClassName("bg")[0];
var i=0;
btnMenu.addEventListener("mouseover", func, false);
btnMenu.addEventListener("mouseleave", hide, false);

if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) 
{
  // This checks if the current device is in fact mobile
	menuContent.setAttribute("style", "display: none;");
	navMenu.setAttribute("style", "min-height: 0vh; height:0%;");
	bgDiv.setAttribute("style", "visibility: hidden;");
}

function func()
{  
	if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) 
	{
	  // This checks if the current device is in fact mobile
	
	if(i%2==0)
	{
		menuContent.setAttribute("style", "display: normal;");
		navMenu.setAttribute("style", "min-height: 100vh; height:100%;");
		bgDiv.setAttribute("style", "visibility: visible;");
	}
	else
	{
		menuContent.setAttribute("style", "display: none;");
		navMenu.setAttribute("style", "min-height: 0vh; height:0%;");
		bgDiv.setAttribute("style", "visibility: hidden;");
	}
		
	i++;
	}
}

function hide()
{  
	if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i) ) 
	{
	  // This checks if the current device is in fact mobile
	i++;
	}
}



		
		