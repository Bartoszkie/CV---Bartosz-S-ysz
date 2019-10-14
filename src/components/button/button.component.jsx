import React from "react";

const Button = props => {
  return (
    <a href={props.link} className="button">
      <h2 className='button-text'>{props.text}</h2>
    </a>
    );
};

export default Button;
