const App = document.getElementById('app')

// crate an image tag
const createTile = (name, id) => {
    let tag = document.createElement('img')
    tag.setAttribute('src','../images/'+ name)
    tag.id = id
    App.appendChild(tag)
}

const screen_size = screen.width;

if( screen_size <= 1920 ){
    
}else{

}