import image_list from  './image_list.js';

const App = document.getElementById('app')

// crate an image tag
function createTile(source, id) {
    let divTag = document.createElement('div')
    divTag.style.backgroundImage = 'url(' + source + ')'
    divTag.className += 'tiles';
    divTag.id = id;


    App.appendChild(divTag);
}

const screen_size = screen.width;

if( screen_size <= 1920 ){

}else{
    for(let i = 20; i < image_list.length; i++){
        createTile(image_list[i], i)
    }   
}