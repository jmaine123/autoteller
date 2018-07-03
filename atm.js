
var tvShows = ['bb_theory.jpeg', 'fresh_prince.jpeg', 'martin.jpeg', 'scrubs.jpg', 'simpsons.jpeg']

var gallery = document.getElementById('gallery');
var count = 0;

/* for(thisItem in thisSet){
 do this
}
*/

for (thisItem in tvShows) {
    //print img tag
    //set img src ="images/" + saiyans[count]
    var newImage = document.createElement('img');
    newImage.src = 'images/' + tvShows[count];
    newImage.addClass = 'responsive';
    newImage.addClass = 'image-container';
    gallery.appendChild(newImage);
    count = count + 1;
}
