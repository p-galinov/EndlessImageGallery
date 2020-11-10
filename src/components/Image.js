import React from "react";
import "../styles/Image.css";
import ModalImage from "react-modal-image";


function Image({url}) {
 
    return(
        <div>
            <div className="images">
                <ModalImage 
                className="image" 
                small={url} 
                large={url} 
                alt="" 
                hideDownload
                hideZoom
                />
            </div>
        </div>
    )
}

export default Image;