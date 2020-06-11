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
//jelenleg: kattintásra az összes box piros lesz
//hogy kéne jól behivatkozni, hogy minden kattintásra változzon?



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
  $('.thumbnail-container').append(`<img src="${item}" class="box" id="${boxID}" data-index="${index}">`); //változás 4
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




