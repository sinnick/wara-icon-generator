# Generador de Iconos

Una aplicación web simple pero potente para crear iconos personalizados. Desarrollada con React y Vite, esta herramienta te permite diseñar iconos con diferentes colores, bordes y símbolos SVG.

![Ejemplo de Icono](https://via.placeholder.com/200x200/d80073/FFFFFF?text=Icon)

## Características

- **Personalización de Colores**: Elige el color de fondo y del icono con un selector de color intuitivo.
- **Configuración de Bordes**: Define el ancho y color del borde según tus necesidades.
- **Biblioteca de Iconos SVG**: Selecciona entre una amplia variedad de iconos organizados por categorías.
- **Ajuste de Tamaño**: Controla el tamaño del icono dentro del contenedor.
- **Vista Previa en Tiempo Real**: Visualiza tus cambios instantáneamente.
- **Exportación de Alta Calidad**: Descarga tu icono como imagen PNG en resolución 1024x1024 píxeles.

## Cómo Usar

1. **Selecciona un Icono**: Elige entre varias opciones de la biblioteca de iconos.
2. **Personaliza el Aspecto**:
   - Ajusta el color de fondo
   - Modifica el color del icono
   - Configura el ancho y color del borde
   - Cambia el tamaño del icono
3. **Visualiza en Tiempo Real**: Observa los cambios inmediatamente en la vista previa.
4. **Descarga tu Icono**: Haz clic en "Descargar Icono" para obtener una imagen PNG lista para usar.

## Tecnologías Utilizadas

- **React**: Biblioteca de interfaz de usuario
- **Vite**: Entorno de desarrollo rápido
- **react-icons**: Colección de iconos SVG
- **html-to-image**: Conversión de elementos DOM a imágenes
- **file-saver**: Descarga de archivos en el navegador

## Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar la versión de producción
npm run preview
```

## Personalización Avanzada

El código de la aplicación está organizado para facilitar la extensión y personalización:

- **Añadir más Iconos**: Modifica el archivo `IconSelector.jsx` para incluir más colecciones de iconos.
- **Funcionalidades Adicionales**: La arquitectura basada en componentes permite añadir nuevas características fácilmente.

## Licencia

MIT
