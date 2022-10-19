
var btnMenu = document.getElementsByClassName("button")[0];
var navMenu = document.getElementById("navMenu");
var menuContent = document.getElementById("nav-content");
var i=0;
btnMenu.addEventListener("mouseover", func, false);
if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) 
{
  // This checks if the current device is in fact mobile
	menuContent.setAttribute("style", "display: none;");
	navMenu.setAttribute("style", "min-height: 0vh; height:0%;");
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
	}
	else
	{
		menuContent.setAttribute("style", "display: none;");
		navMenu.setAttribute("style", "min-height: 0vh; height:0%;");
	}
		
	i++;
	}
}



		
		