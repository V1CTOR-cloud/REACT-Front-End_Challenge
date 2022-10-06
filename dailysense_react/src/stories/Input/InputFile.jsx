import React, { useRef } from 'react'
import './Input.css';
const InputLogo = require('../../Assets/OTHER/camera.png');
export const InputFile = props => {

  const fileInput = useRef(null)

  const hiddenFileInput = React.useRef(null);

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  }

  const handleChange = (e) => {
    const fileUploaded = e.target.files[0];
    props.handleFile(fileUploaded);
  };

  return (
    <div className="image-upload" onClick={handleClick}>
      <img src={InputLogo} />
      <input type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        accept=".png, .jpg, .jpeg">
      </input>
    </div>
  )
}
