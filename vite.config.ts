import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MuaazReactTreeView',
      fileName: 'index',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'classnames', 'axios', 'react-icons'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          classnames: 'classnames',
          axios: 'axios',
          'react-icons': 'ReactIcons',
        },
      },
    },
    sourcemap: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Using @use syntax in individual files instead of global import
      },
    },
  },
}) 