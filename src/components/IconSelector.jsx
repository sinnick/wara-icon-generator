import { useState } from 'react';
import * as Bi from "react-icons/bi";
import * as Fa from "react-icons/fa";
import * as Fi from "react-icons/fi";
import * as Md from "react-icons/md";
import './IconSelector.css';

// Conjunto de iconos populares para elegir
const popularIcons = {
  // Iconos de verificación y marcas
  check: Md.MdCheck,
  checkCircle: Md.MdCheckCircle,
  verified: Md.MdVerified,
  
  // Iconos de alerta y notificación
  info: Md.MdInfo,
  warning: Md.MdWarning,
  error: Md.MdError,
  
  // Iconos de navegación
  home: Md.MdHome,
  menu: Md.MdMenu,
  arrowBack: Md.MdArrowBack,
  
  // Iconos de acción
  add: Md.MdAdd,
  delete: Md.MdDelete,
  edit: Md.MdEdit,
  
  // Iconos de comunicación
  mail: Md.MdMail,
  phone: Md.MdPhone,
  
  // Iconos sociales
  facebook: Fa.FaFacebook,
  twitter: Fa.FaTwitter,
  instagram: Fa.FaInstagram,
  
  // Iconos de estado
  star: Md.MdStar,
  favorite: Md.MdFavorite,
  
  // Iconos de archivos
  file: Bi.BiFile,
  folder: Bi.BiFolder,
  
  // Iconos de dispositivos
  laptop: Md.MdLaptop,
  smartphone: Md.MdSmartphone,
};

function IconSelector({ selectedIcon, onSelectIcon, iconColor }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  // Filtrar iconos según el término de búsqueda
  const filteredIcons = searchTerm 
    ? Object.entries(popularIcons).filter(([name]) => 
        name.toLowerCase().includes(searchTerm.toLowerCase()))
    : Object.entries(popularIcons);
    
  const IconComponent = popularIcons[selectedIcon];
  
  return (
    <div className="icon-selector">
      <div 
        className="selected-icon" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {IconComponent && <IconComponent size={24} color={iconColor} />}
        <span>{selectedIcon}</span>
      </div>
      
      {isOpen && (
        <div className="icon-popup">
          <input 
            type="text" 
            placeholder="Buscar icono..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="icon-search"
          />
          
          <div className="icons-grid">
            {filteredIcons.map(([name, Icon]) => (
              <div 
                key={name}
                className={`icon-item ${selectedIcon === name ? 'selected' : ''}`}
                onClick={() => {
                  onSelectIcon(name);
                  setIsOpen(false);
                }}
              >
                <Icon size={24} />
                <span>{name}</span>
              </div>
            ))}
            {filteredIcons.length === 0 && (
              <div className="no-results">No se encontraron iconos</div>
            )}
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

// Método estático para obtener un componente de icono por nombre
IconSelector.getIconComponent = function(iconName) {
  return popularIcons[iconName] || null;
};

// Componente para renderizar un icono específico
IconSelector.Icon = function IconDisplay({ iconName, size, color }) {
  const IconComponent = popularIcons[iconName];
  
  if (!IconComponent) {
    return null;
  }
  
  // Asegurar que el tamaño se aplique correctamente
  const sizeValue = typeof size === 'string' ? size : `${size}px`;
  
  return (
    <div 
      className="icon-display" 
      style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <IconComponent 
        size={sizeValue} 
        color={color}
        style={{
          width: sizeValue,
          height: sizeValue,
          display: 'block', // Asegura que se renderice como bloque
          flexShrink: 0 // Evita que el icono se comprima
        }}
      />
    </div>
  );
};

export default IconSelector;