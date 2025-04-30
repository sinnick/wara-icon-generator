import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      // Alias para los módulos específicos que causan problemas
      'react-native/Libraries/vendor/emitter/EventEmitter': resolve(__dirname, './node_modules/events'),
      'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter': resolve(__dirname, './node_modules/events'),
    },
    extensions: ['.web.js', '.js', '.jsx', '.json']
  },
  define: {
    // Definiciones globales para evitar errores de variables no definidas
    global: 'window',
    __DEV__: JSON.stringify(true),
  },
  optimizeDeps: {
    include: ['@expo/vector-icons'],
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      },
      // Asegurarse de que esbuild no intenta procesar estos módulos
      external: ['react-native']
    }
  }
})
