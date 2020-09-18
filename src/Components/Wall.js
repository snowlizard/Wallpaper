import React from 'react';
import ReactDOM from 'react-dom';

class Wallpaper extends React.Component{
    constructor(props){
      super(props);
      this.width = window.innerWidth;
    }
    
    
    render(){
      return (
        <div id="main">
          {
            window.innerWidth >= 3440 ? 
              <p>w</p> :
              images.map( (img) => <Card sauce={img} />)
          }
        </div>
      )
    }
  }

  export default Wallpaper;