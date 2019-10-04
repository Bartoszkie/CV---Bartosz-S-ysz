import React from 'react';

import Circle from '../circle/circle.component';

const SkillCart = (props) => {
    return(
        <div className='skill-cart'>
            <Circle text={props.skill}/>
            <div className='skill-cart__text'>
                <h4 className='heading-h4'>{props.heading}</h4>
                <p className='paragraph'>{props.text}</p>
            </div>
        </div>
    );
}

export default SkillCart;