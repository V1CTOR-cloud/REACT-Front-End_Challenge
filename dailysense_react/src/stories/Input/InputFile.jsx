import React, { useRef } from 'react'
import './Input.css';
const InputLogo = require('../../Assets/OTHER/camera.png');
 const InputFile = (props) => {
  const hiddenFileInput = React.useRef(null);

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  }

  return (
    <div className="image-upload" onClick={handleClick}>
      <img src={InputLogo} />
      <input type="file"
        ref={hiddenFileInput}
        onChange={(e) => props.onChange(e.target.files[0])}
        accept=".png, .jpg, .jpeg">
      </input>
    </div>
  )
}

export default InputFile;
