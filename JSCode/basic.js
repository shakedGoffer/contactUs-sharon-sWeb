
const div = document.querySelector('.button');
const i=0;





document.querySelectorAll(".button")[0]
        .addEventListener('click', function (event) {
	console.log('Hi!');

	let Mybuttons = document.querySelectorAll(".Mybutton");
	console.log(Mybuttons);
	for(var i=0;i<Mybuttons.length;i++)
	{
		Mybuttons.style = "z-index:10;"
	}
        });
		
		