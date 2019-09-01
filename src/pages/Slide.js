import React from 'react';

function Slide(props) {
    console.log(props.image);
    return (
        <div className="slide" style={{ backgroundImage: `url(${props.image})` }}>
            <h3> { props.heading} </h3>
            <p> { props.description} </p>
        </div>
    );
}

export default Slide;
