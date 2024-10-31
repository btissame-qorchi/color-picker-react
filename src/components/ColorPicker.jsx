import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const ColorPicker = () => {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(color);
      alert("Copied text!");
    } catch (err) {
      console.error("Error while copying: ", err);
    }
  };

  return (
    <div className="color-picker">
      <h2>Color Picker</h2>
      <div className="color-preview">
        <p>
          Selected color : <span style={{ backgroundColor: color }}></span>{" "}
          <FontAwesomeIcon icon={faCopy} onClick={handleCopy} />
          {color}
        </p>
      </div>
      <label>Select Your Color : Reflect Your Feelings!</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
};

export default ColorPicker;
