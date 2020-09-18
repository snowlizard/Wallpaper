const App = document.getElementById('app')

const image_list = ['../images/20171029_154455.jpg',
    '../images/20171029_155224.jpg',
    '../images/20171029_155346.jpg',
    '../images/20171029_160212.jpg',
    '../images/20190603_193934.jpg',
    '../images/20190604_120306.jpg',
    '../images/crew_onRoad.jpg',
    '../images/IMG_0968.jpg'];

// crate an image tag
const createTile = (source, id) => {
    let tag = document.createElement('img')
    tag.setAttribute('src', name)
    tag.className += 'tiles'
    tag.id = id
    App.appendChild(tag)
}

const screen_size = screen.width;

if( screen_size <= 1920 ){

}else{

}