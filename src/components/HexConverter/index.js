import { useState } from 'react'

export default function HexConverter() {
  const [rgbValue, setRgbValue] = useState('');
  const handleChange = ({ target }) => {
    if (target.value.length < 7) {
      return;
    }
    const regex = new RegExp(/^#?([a-fA-F\d]{2})([a-fA-F\d]{2})([a-fA-F\d]{2})$/);
    const rgb = regex.exec(target.value);
    const result = rgb && rgb.length === 4
      ? {
          r: parseInt(rgb[1], 16),
          g: parseInt(rgb[2], 16),
          b: parseInt(rgb[3], 16),
        }
      : null;

      const body = document.querySelector('body');
      if (result) {
        const resultRgb = `rgb(${result.r}, ${result.g}, ${result.b})`;
        setRgbValue(resultRgb);
        body.style.backgroundColor = resultRgb;
      } else {
        setRgbValue('Ошибка!');
        body.style.backgroundColor = 'coral';
      }
  };

  return (
    <div className="converter">
      <input className="hex-container" onChange={handleChange} maxLength="7"></input>
      <div className="rgb-container">{rgbValue}</div>
    </div>
  );
}
