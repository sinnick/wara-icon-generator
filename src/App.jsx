import { useState, useRef } from 'react'
import { toPng } from 'html-to-image'
import { saveAs } from 'file-saver'
import ReactDOM from 'react-dom/client'
import './App.css'
import IconSelector from './components/IconSelector'
import ColorPicker from './components/ColorPicker'

function App() {
  // Estados para las propiedades del icono
  const [backgroundColor, setBackgroundColor] = useState('#d80073') // Color magenta por defecto como en la imagen
  const [borderColor, setBorderColor] = useState('#000000')
  const [borderWidth, setBorderWidth] = useState(0)
  const [selectedIcon, setSelectedIcon] = useState('file') // Icono de archivo por defecto
  const [iconColor, setIconColor] = useState('#FFFFFF') // Color blanco por defecto para el icono
  const [iconSize, setIconSize] = useState(60)
  
  const iconRef = useRef(null)

  // Función para descargar el icono como PNG
  const downloadIcon = async () => {
    if (iconRef.current) {
      try {
        // Crear un contenedor temporal para la versión de exportación del icono
        const tempContainer = document.createElement('div');
        tempContainer.style.position = 'absolute';
        tempContainer.style.left = '-9999px';
        tempContainer.style.top = '-9999px';
        tempContainer.style.width = '1024px';
        tempContainer.style.height = '1024px';
        document.body.appendChild(tempContainer);
        
        // Crear el elemento del icono para exportación
        const exportIcon = document.createElement('div');
        exportIcon.style.width = '100%';
        exportIcon.style.height = '100%';
        exportIcon.style.backgroundColor = backgroundColor;
        exportIcon.style.border = `${borderWidth * 5}px solid ${borderColor}`; // Escalar el borde proporcionalmente
        exportIcon.style.borderRadius = '16px'; // Bordes redondeados como en la vista previa
        exportIcon.style.boxSizing = 'border-box';
        exportIcon.style.display = 'flex';
        exportIcon.style.alignItems = 'center';
        exportIcon.style.justifyContent = 'center';
        tempContainer.appendChild(exportIcon);
        
        // Renderizar el icono SVG dentro del contenedor
        const IconComponent = IconSelector.getIconComponent(selectedIcon);
        if (IconComponent) {
          // Crear un div especial solo para el icono con tamaño controlado
          const iconContainer = document.createElement('div');
          iconContainer.style.width = `${iconSize}%`;
          iconContainer.style.height = `${iconSize}%`;
          iconContainer.style.display = 'flex';
          iconContainer.style.alignItems = 'center';
          iconContainer.style.justifyContent = 'center';
          exportIcon.appendChild(iconContainer);
          
          // Renderizar el SVG dentro del contenedor de tamaño controlado
          const tempRoot = document.createElement('div');
          tempRoot.style.width = '100%';
          tempRoot.style.height = '100%';
          tempRoot.style.display = 'flex';
          iconContainer.appendChild(tempRoot);
          
          // Usar ReactDOM para renderizar el componente
          const root = ReactDOM.createRoot(tempRoot);
          root.render(
            <IconComponent 
              size="100%" 
              color={iconColor}
              style={{ 
                width: '100%', 
                height: '100%',
                display: 'block'
              }}
            />
          );
          
          // Esperar a que el componente se renderice
          await new Promise(resolve => setTimeout(resolve, 100));
          
          // Capturar la imagen con exactamente 1024x1024 píxeles
          const dataUrl = await toPng(exportIcon, { 
            quality: 1.0,
            pixelRatio: 1, // Usar pixelRatio de 1 para mantener el tamaño exacto
            width: 1024,
            height: 1024
          });
          
          // Limpiar
          document.body.removeChild(tempContainer);
          
          // Descargar la imagen
          saveAs(dataUrl, 'icon.png');
        }
      } catch (error) {
        console.error('Error al generar la imagen:', error);
      }
    }
  }

  return (
    <div className="app-container">
      <h1>Generador de Iconos</h1>
      
      <div className="main-content">
        <div className="controls-panel">
          <h2>Personalización</h2>
          
          <div className="control-group">
            <label>Color de Fondo:</label>
            <ColorPicker color={backgroundColor} onChange={setBackgroundColor} />
          </div>
          
          <div className="control-group">
            <label>Borde:</label>
            <div className="border-controls">
              <div className="control-item">
                <span>Ancho:</span>
                <input 
                  type="range" 
                  min="0" 
                  max="50" 
                  value={borderWidth} 
                  onChange={(e) => setBorderWidth(Number(e.target.value))} 
                />
                <span>{borderWidth}px</span>
              </div>
              <div className="control-item">
                <span>Color:</span>
                <ColorPicker color={borderColor} onChange={setBorderColor} />
              </div>
            </div>
          </div>
          
          <div className="control-group">
            <label>Tamaño del Icono:</label>
            <input 
              type="range" 
              min="10" 
              max="90" 
              value={iconSize} 
              onChange={(e) => setIconSize(Number(e.target.value))} 
            />
            <span>{iconSize}%</span>
          </div>
          
          <div className="control-group">
            <label>Color del Icono:</label>
            <ColorPicker color={iconColor} onChange={setIconColor} />
          </div>
          
          <div className="control-group">
            <label>Seleccionar Icono:</label>
            <IconSelector 
              selectedIcon={selectedIcon} 
              onSelectIcon={setSelectedIcon}
              iconColor={iconColor}
            />
          </div>
          
          <button className="download-button" onClick={downloadIcon}>
            Descargar Icono
          </button>
        </div>
        
        <div className="preview-panel">
          <h2>Vista Previa</h2>
          <div 
            ref={iconRef} 
            className="icon-preview" 
            style={{ 
              backgroundColor: backgroundColor,
              border: `${borderWidth}px solid ${borderColor}`,
              width: '200px',
              height: '200px'
            }}
          >
            <IconSelector.Icon 
              iconName={selectedIcon} 
              size={`${iconSize}%`} 
              color={iconColor} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
