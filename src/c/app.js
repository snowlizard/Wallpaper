import image_list from  './image_list.js';

const App = document.getElementById('app')

// crate an image tag
function createTile(source, id, appendTo) {
    let divTag = document.createElement('div')
    divTag.style.backgroundImage = 'url(' + source + ')'
    divTag.className += 'tiles';
    divTag.id = id;

    $(appendTo).append(divTag);
}

const screen_size = screen.width;

for(let i = 0; i < 5; i ++){
    createTile(image_list[i], i, '#top' )
}

createTile(image_list[6], 6, '#left')
createTile(image_list[7], 7, '#right')

for(let i = 8; i < 13; i ++){
    createTile(image_list[i], i, '#bottom' )
}

const randomlyChangeImage = () => {
    setInterval( () => {
        let onScreen = Math.round( Math.random() * 13 );
        console.log(onScreen)
        let random =  Math.round( Math.random() * image_list.length );
        $(`#${onScreen}`).removeClass('fadeIn');
        $(`#${onScreen}`).addClass('fadeOut');
        setTimeout( () => {
            $(`#${onScreen}`).addClass('fadeIn');
            $( `#${ onScreen }`).css('background-image', 'url(' + image_list[random] + ')');
            $(`#${onScreen}`).removeClass('fadeOut');
        }, 7200);
    }, 7000 );
}

randomlyChangeImage();
