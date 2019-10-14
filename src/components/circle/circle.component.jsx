import React from "react";

const Circle = (props) => {
    const bgImage = {
      backgroundImage: `url(${props.image})`, 
      backgroundPosition: 'left',
      backgroundSize: '70%', 
      backgroundRepeat: 'no-repeat', 
    }

    return (
      <div className="circle" style={bgImage}>
      </div>
    );
}

export default Circle;
