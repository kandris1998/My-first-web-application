//Day 2 part 1

/*
let data = {
photo: "images/photo1.jpg",
title: "Kincső Andris",
description: "2019 Római utazás, Colosseum"
};


$('#photo1').attr("src", data.photo);
$("#photo-title").attr("h1", data.title);
$("#description").attr("text", data.description);
*/

//Day 2 part 2

let currentPhoto = 0 ;
let imagesData = {
    photo: ["images/photo1.jpg","images/photo2.jpg", "images/photo3.jpg","images/photo4.jpg","images/photo5.jpg"],
    title: ["Róma", "Valagszaggató", "Tesákkal", "Corsica", "Kis Frenki"],
    description: ["description1", "description2", "description 3", "description 4", "description 5"]
};


//$('#photo1').attr("src", imagesData.photo[currentPhoto]);
//$('h1#photo-title').text(imagesData.title[currentPhoto]);
//$('p#description').text(imagesData.description[currentPhoto]);

//Day 3 Part 1

let boxID = 0; //változás1

let loadPhoto = (photoNumber) => {
    $('#photo1').attr("src", imagesData.photo[photoNumber]);
    $('h1#photo-title').text(imagesData.title[photoNumber]);
    $('p#description').text(imagesData.description[photoNumber]);
    $(`.box#${boxID}`).css("border", "solid thin red");

};

//cél: kattintásra mindig az adott kis fotó körvonala változzon
//jelenleg: kattintásra egyesével kiszínezi
//hogy kéne jól behivatkozni, hogy minden kattintásra csak az adott változzon? 



loadPhoto(currentPhoto); 

$('#right').click(() => {
    if(currentPhoto < 5 ) {
        currentPhoto++;
        boxID++; //változás 2
    };
    $('#clicked').text(imagesData.title[currentPhoto])
    loadPhoto(currentPhoto);
}); 
 
$('#left').click(() => {
       if (currentPhoto >= 0){
        currentPhoto--;
        boxID--; //változás 3
    };
    $('#clicked').text(imagesData.title[currentPhoto])
    loadPhoto(currentPhoto);
}); 

//Day 4 Part 1

imagesData.photo.forEach((item, index) => {
  $('.thumbnail-container').append(`<img src="${item}" class="box" id="${index}" data-index="${index}">`); //változás 4
  $('.thumbnail-container').append(`<div class="title">${imagesData.title[index]}</div>`) //hoverhez
  $('.box').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    let numberIndex = parseInt(indexClicked);
    // now numberIndex is a number
    $('#clicked').text(imagesData.title[indexClicked])
    $('#photo1').attr("src", imagesData.photo[indexClicked]);
    $('h1#photo-title').text(imagesData.title[indexClicked]);
    $('p#description').text(imagesData.description[indexClicked]);
});
});

/*$(".box").select(function() {
$(".box").css("border", "solid thin red");
});*/




/*
This method will initialize each slider instance.
Parameter are: -
------------------
1) container -> div.slider ul
2) pagicontainer -> div.pagi-container ul
3) nav -> #slider-nav

function slider(container, pagicontainer, nav){
	this.container=container;
	this.pagicontainer=pagicontainer;
	this.nav=nav.hide(); // This will assign 'nav' from parameters to 'nav' of current slider instance. It uses method chaining.
	this.imgs=this.container.find('.slides'); // Returns jQuery object containing all matched elements.
    this.width=this.imgs[0].width; // Each image is Identical in Dimension.
	console.log('Value of width is : '+this.width);
	this.imgLen=this.imgs.length; // Returns the total number of sliding elements.
	console.log("Total no. of Items in the list are : "+this.imgLen);
	// Here we will add the "data-pgno" attribute to the Thumbnail Pagination.
	cnt=0;
	this.liArr = $(pagicontainer).find('li');// Returns jQuery object containing all matched LI elements of Pagination Thumbnails.
	this.liArr.each(function()
	{
        $anchor=$(this).find('a');
		$anchor.data('pgno',cnt);
		cnt++;
    });
	this.current=0; // Initialize the "current" counter.
	// Apply initial Styling to all Pagination Thumbnail Image Elements.
	this.pagicontainer.find('li a img').toggleClass('img-normal');
	// Apply CSS to "First" pagination element in the list.
	this.pagicontainer.find('li:nth-child(1) a').toggleClass("pagi-selected");	
	this.pagicontainer.find('li:nth-child(1) a img').toggleClass("img-selected");
}

// This method will apply the needed animation and displacement.

slider.prototype.transition=function(coords){
	this.container.animate({
		'margin-left': coords || -(this.current*this.width) // First element is multiplied by Zero.
	},500);
	// Remove CSS from Rest other pagination element in the list.
	this.pagicontainer.find('li a').removeClass("pagi-selected");
	this.pagicontainer.find('li a img').removeClass("img-selected");
	
	// Apply CSS to current pagination element in the list.
	this.pagicontainer.find("li:nth-child("+(this.current+1)+") a").toggleClass("pagi-selected");
	this.pagicontainer.find("li:nth-child("+(this.current+1)+") a img").toggleClass("img-selected");
	
	
};

// This method will set the "current" counter to next position.
/*
Parameters are:-
---------------
1) dir -> It can be either 'prev' or 'next' or else a number denoting slides.

slider.prototype.setCurrentPos=function(dir){
	var pos=this.current;
	console.log('Value of this.value is : '+dir);
	if(isNaN(dir))
	{
		pos+= ~~(dir=='next') || -1; // You can use alternate "Math.floor()" method instead of double tilde (~~) operator.
		this.current=(pos<0)?this.imgLen-1: pos%(this.imgLen);
	}
	else
		this.current=Number(dir);
	console.log(this.current);
*/