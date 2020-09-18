const App = document.getElementById('app')

// crate an image tag
const createTile = (source) => {
    let tag = document.createElement('img')
    tag.setAttribute('src','../images/'+ source)
    tag.id = source
    App.appendChild(tag)
}

