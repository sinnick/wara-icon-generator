import { useState } from 'react';
import './ColorPicker.css';

function ColorPicker({ color, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Lista de colores predefinidos
  const presetColors = [
    '#d80073', '#FF0000', '#FF5500', '#FFAA00', '#FFFF00',
    '#00FF00', '#00FFFF', '#0000FF', '#AA00FF', '#FF00FF',
    '#FFFFFF', '#AAAAAA', '#555555', '#000000',
  ];
  
  return (
    <div className="color-picker">
      <div 
        className="color-display" 
        style={{ backgroundColor: color }}
        onClick={() => setIsOpen(!isOpen)}
      />
      
      {isOpen && (
        <div className="color-popup">
          <div className="color-input-row">
            <input 
              type="color"
              value={color}
              onChange={(e) => onChange(e.target.value)}
            />
            <input
              type="text"
              value={color}
              onChange={(e) => onChange(e.target.value)}
              maxLength={7}
            />
          </div>
          
          <div className="preset-colors">
            {presetColors.map((presetColor) => (
              <div
                key={presetColor}
                className="preset-color"
                style={{ backgroundColor: presetColor }}
                onClick={() => {
                  onChange(presetColor);
                  setIsOpen(false);
                }}
              />
            ))}
          </div>
          
          <button 
            className="close-button" 
            onClick={() => setIsOpen(false)}
          >
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
}

export default ColorPicker;