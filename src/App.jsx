import { useState, useRef } from 'react'
import { toPng } from 'html-to-image'
import { saveAs } from 'file-saver'
import ReactDOM from 'react-dom/client'
import './App.css'
import IconSelector from './components/IconSelector'
import ColorPicker from './components/ColorPicker'
import SvgUploader from './components/SvgUploader'

function App() {
	// Estados para las propiedades del icono
	const [backgroundColor, setBackgroundColor] = useState('#ca0060') // Color magenta por defecto como en la imagen
	const [borderColor, setBorderColor] = useState('#000000')
	const [borderWidth, setBorderWidth] = useState(0)
	const [selectedIcon, setSelectedIcon] = useState('file') // Icono de archivo por defecto
	const [iconColor, setIconColor] = useState('#FFFFFF') // Color blanco por defecto para el icono
	const [iconSize, setIconSize] = useState(60)
	const [customSvg, setCustomSvg] = useState(null) // Estado para el SVG personalizado
	const [exportSize, setExportSize] = useState(1024); // Resolución de exportación (px)

	const iconRef = useRef(null)

	// Función para manejar la carga de SVG personalizado
	const handleSvgUpload = (svgContent) => {
		setCustomSvg(svgContent);
		// Si se sube un SVG personalizado, deseleccionamos cualquier icono
		if (svgContent) {
			setSelectedIcon(null);
		}
	};

	// Función para manejar la selección de iconos predefinidos
	const handleIconSelect = (iconName) => {
		setSelectedIcon(iconName);
		// Si seleccionamos un icono predefinido, eliminamos cualquier SVG personalizado
		if (iconName) {
			setCustomSvg(null);
		}
	};

	// Función para descargar el icono como PNG
	const downloadIcon = async () => {
		if (iconRef.current) {
			try {
				const resolution = exportSize;
				const scaleFactor = resolution / 200;
				// Crear un contenedor temporal para la versión de exportación del icono
				const tempContainer = document.createElement('div');
				tempContainer.style.position = 'absolute';
				tempContainer.style.left = '-9999px';
				tempContainer.style.top = '-9999px';
				tempContainer.style.width = `${resolution}px`;
				tempContainer.style.height = `${resolution}px`;
				document.body.appendChild(tempContainer);

				// Crear el elemento del icono para exportación
				const exportIcon = document.createElement('div');
				exportIcon.style.width = '100%';
				exportIcon.style.height = '100%';
				exportIcon.style.backgroundColor = backgroundColor;
				exportIcon.style.border = `${borderWidth * scaleFactor}px solid ${borderColor}`; // Escalar el borde proporcionalmente
				exportIcon.style.borderRadius = '16px'; // Bordes redondeados como en la vista previa
				exportIcon.style.boxSizing = 'border-box';
				exportIcon.style.display = 'flex';
				exportIcon.style.alignItems = 'center';
				exportIcon.style.justifyContent = 'center';
				tempContainer.appendChild(exportIcon);

					// Crear un div especial solo para el icono con tamaño controlado
				const iconContainer = document.createElement('div');
				iconContainer.style.width = `${iconSize}%`;
				iconContainer.style.height = `${iconSize}%`;
				iconContainer.style.display = 'flex';
				iconContainer.style.alignItems = 'center';
				iconContainer.style.justifyContent = 'center';
				exportIcon.appendChild(iconContainer);

				if (customSvg) {
					// Renderizar el SVG personalizado
					// Crear un contenedor adicional para garantizar el centrado correcto y el escalado
					const svgContainer = document.createElement('div');
					svgContainer.style.width = '100%';
					svgContainer.style.height = '100%';
					svgContainer.style.display = 'flex';
					svgContainer.style.alignItems = 'center';
					svgContainer.style.justifyContent = 'center';
					iconContainer.appendChild(svgContainer);
					
					// Insertar el SVG en el contenedor
					svgContainer.innerHTML = customSvg;
					
					// Aplicar color al SVG si es necesario
					const svgElement = svgContainer.querySelector('svg');
					if (svgElement) {
						// Ajustar el SVG para que ocupe todo el espacio
						svgElement.setAttribute('width', '100%');
						svgElement.setAttribute('height', '100%');
						svgElement.style.maxWidth = '100%';
						svgElement.style.maxHeight = '100%';
						// Asegurar que el SVG se renderiza correctamente en el centro
						svgElement.style.display = 'block';
						// Opcionalmente aplicar color si el SVG lo permite
						svgElement.style.fill = iconColor;
						svgElement.style.color = iconColor;
					}
				} else if (selectedIcon) {
					// Renderizar el icono predefinido
					const IconComponent = IconSelector.getIconComponent(selectedIcon);
					if (IconComponent) {
						// Crear un div especial para el icono predefinido
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
					}
				}

				// Esperar a que el componente se renderice
				await new Promise(resolve => setTimeout(resolve, 100));

				// Capturar la imagen con la resolución seleccionada
				const dataUrl = await toPng(exportIcon, {
					quality: 1.0,
					pixelRatio: 1, // Mantener el tamaño exacto
					width: resolution,
					height: resolution
				});

				// Limpiar
				document.body.removeChild(tempContainer);

				// Descargar la imagen
				saveAs(dataUrl, 'icon.png');
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
						<label>Resolución de Exportación:</label>
						<select value={exportSize} onChange={(e) => setExportSize(Number(e.target.value))}>
							<option value={512}>512x512</option>
							<option value={1024}>1024x1024</option>
						</select>
					</div>

					<div className="control-group">
						<SvgUploader
							onSvgUpload={handleSvgUpload}
							customSvg={customSvg}
						/>
					</div>

					<div className="control-group">
						<label>O selecciona un icono predefinido:</label>
						<IconSelector
							selectedIcon={selectedIcon}
							onSelectIcon={handleIconSelect}
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
						{customSvg ? (
							<div 
								className="svg-container"
								style={{ 
									width: `${iconSize}%`, 
									height: `${iconSize}%`,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									position: 'relative'
								}}
							>
								<div 
									className="svg-wrapper"
									style={{ 
										width: '100%', 
										height: '100%',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										overflow: 'hidden'
									}}
								>
									<div
										style={{
											width: '100%',
											height: '100%',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center'
										}}
										dangerouslySetInnerHTML={{ 
											__html: customSvg.replace(/<svg/, `<svg style="width:100%;height:100%;fill:${iconColor};color:${iconColor};display:block" `) 
										}} 
									/>
								</div>
							</div>
						) : (
							selectedIcon && (
								<IconSelector.Icon
									iconName={selectedIcon}
									size={`${iconSize}%`}
									color={iconColor}
								/>
							)
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
