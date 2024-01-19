import React from "react";
import '../../style/main.css';

/* Composant qui retourne les Features */
function FeatureItem ({ image, descriptionImage, title, description }) {
    return (
            <div className="feature-item">
                <img 
                    src={image} 
                    alt={descriptionImage} 
                    className="feature-icon"/>
                <h3 className="feature-item-title">{title}</h3>
                <p>{description}</p>
            </div>
    )
}

export default FeatureItem