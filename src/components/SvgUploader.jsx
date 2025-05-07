import { useState, useRef, useEffect } from 'react';
import './SvgUploader.css';

const SvgUploader = ({ onSvgUpload, customSvg }) => {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);
  const svgPreviewRef = useRef(null);
  
  // Optimizar el SVG cuando se cargue
  useEffect(() => {
    if (customSvg && svgPreviewRef.current) {
      const svgElement = svgPreviewRef.current.querySelector('svg');
      if (svgElement) {
        // Asegurar que el SVG ocupe el espacio disponible
        svgElement.setAttribute('width', '100%');
        svgElement.setAttribute('height', '100%');
        svgElement.style.maxWidth = '100%';
        svgElement.style.maxHeight = '100%';
        svgElement.style.display = 'block';
        
        // Asegurar viewBox si no lo tiene
        if (!svgElement.getAttribute('viewBox')) {
          const width = svgElement.getAttribute('width') || '100';
          const height = svgElement.getAttribute('height') || '100';
          svgElement.setAttribute('viewBox', `0 0 ${width} ${height}`);
        }
      }
    }
  }, [customSvg]);
  
  const validateSvg = (fileContent) => {
    // Verificar que el archivo sea un SVG válido
    if (!fileContent.includes('<svg') || !fileContent.includes('</svg>')) {
      throw new Error('El archivo no parece ser un SVG válido');
    }
    
    // Validación básica contra scripts maliciosos
    if (fileContent.includes('<script') || fileContent.includes('javascript:')) {
      throw new Error('El SVG contiene código potencialmente inseguro');
    }
  };

  const processSvgFile = (file) => {
    if (!file || !file.type.includes('svg')) {
      setError('Por favor, sube un archivo SVG válido');
      return;
    }
    
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const svgContent = e.target.result;
        validateSvg(svgContent);
        
        // SVG válido, limpiar errores
        setError('');
        onSvgUpload(svgContent);
      } catch (err) {
        setError(err.message);
      }
    };
    
    reader.onerror = () => {
      setError('Error al leer el archivo');
    };
    
    reader.readAsText(file);
  };
  
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processSvgFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      processSvgFile(e.target.files[0]);
    }
  };
  
  const openFileBrowser = () => {
    fileInputRef.current.click();
  };
  
  const handleRemoveSvg = () => {
    onSvgUpload(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="svg-uploader-container">
      <h3>SVG Personalizado</h3>
      
      {customSvg ? (
        <div className="custom-svg-preview">
          <div 
            className="svg-preview" 
            ref={svgPreviewRef} 
            dangerouslySetInnerHTML={{ __html: customSvg }} 
          />
          <button 
            className="remove-svg-button" 
            onClick={handleRemoveSvg}
            aria-label="Eliminar SVG"
          >
            Eliminar SVG
          </button>
        </div>
      ) : (
        <div 
          className={`svg-dropzone ${dragActive ? 'active' : ''}`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          onClick={openFileBrowser}
        >
          <input 
            type="file" 
            ref={fileInputRef} 
            accept=".svg" 
            onChange={handleFileChange} 
            className="file-input" 
          />
          <div className="dropzone-content">
            <svg className="upload-icon" viewBox="0 0 24 24" width="36" height="36">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z" />
            </svg>
            <p>Arrastra aquí tu archivo SVG o haz clic para seleccionarlo</p>
          </div>
        </div>
      )}
      
      {error && <p className="error-message">{error}</p>}
      
      <div className="svg-upload-info">
        <p className="info-text">
          <strong>Nota:</strong> Sube un archivo SVG sin elementos dinámicos para mejor compatibilidad
        </p>
      </div>
    </div>
  );
};

export default SvgUploader;