let data = {
photo: "images/photo1.jpg",
title: 'Kincső Andris',
description: '2019 Római utazás, Colosseum'
};


$('#photo1').attr('scr', data.photo);
$('#photo-title').attr('scr', data.title);
$('#description').attr('scr', data.description);

let currentPhoto= 0;
let imagesData = ['images/photo1.jpg','images/photo2.jpg','images/photo3.jpg','images/photo4.jpg','images/photo5.jpg']
$('#photo1').attr('src', imagesData[currentPhoto].photo);