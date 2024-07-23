import { resolve } from 'node:path'
import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'
import VueTools from 'vite-plugin-vue-devtools'
import Unocss from 'unocss/vite'
import ApiAutoImport from 'unplugin-auto-import/vite'
import ComponentAutoImport from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    Vue(),
    VueTools(),
    Unocss(),
    ApiAutoImport({
      dts: 'types/auto-imports.d.ts',
      imports: ['vue'],
    }),
    ComponentAutoImport({
      dts: 'types/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, './'),
      '@': resolve(__dirname, './src'),
    },
  },
})
