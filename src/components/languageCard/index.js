import React from 'react';
import './style.css';

function languageCard(props) {
    return (
        <div className="img-small">
            <img alt={props.name} src={props.image} onClick={() => props.shuffle(props.id)} />
        </div>
    );
}

export default languageCard;
