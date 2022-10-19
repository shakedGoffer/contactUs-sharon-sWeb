
var btnMenu = document.getElementById("button");
var navMenu = document.getElementById("navMenu");
var i=0;
btnMenu.addEventListener("mouseover", func, false);
if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) 
{
  // This checks if the current device is in fact mobile
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
		navMenu.setAttribute("style", "min-height: 100vh; height:100%;");
	else
		navMenu.setAttribute("style", "min-height: 0vh; height:0%;");
	i++;
	}
}



		
		