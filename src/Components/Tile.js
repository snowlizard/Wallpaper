import React from 'react';
import ReactDOM from 'react-dom';

const Tile = (props) => {
    let width = props.width;
    let height = props.height;
    
    return(
      <div className="img-card">
        <img src={props.sauce} width={width} height={height}></img>
      </div>
    );
  }

  export default Tile;