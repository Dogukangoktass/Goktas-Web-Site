var i=0;
var images=['Resimler/slider1.png','Resimler/slider2.png','Resimler/slider3.jpg'];

var duration =2000;

function slideImg() 
{
	document.slider.src=images[i];

	if (i<images.length-1)
	 {
		i++;
     }
     else
     {
     	i=0;
     }

   setTimeout("slideImg()",duration);

}

window.onload=slideImg;
