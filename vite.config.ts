import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
const JavaScriptObfuscator = require('javascript-obfuscator');
const obfuscationConfig = require('./obfuscator.config');

import Unocss from 'unocss/vite'
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

const obfuscateCode = (code) => {
  const obfuscationResult = JavaScriptObfuscator.obfuscate(code, obfuscationConfig.options);
  return obfuscationResult.getObfuscatedCode();
};

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: false,
  },
  resolve: {
    alias: {
      '~/': `${pathSrc}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
      transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
      ]
    }),
    // {
    //   name: 'obfuscator',
    //   transform(code, id) { 
    //     if (id.endsWith('.js') || id.endsWith('.ts') ) {
    //       return obfuscateCode(code);
    //     }
    //   },
    // },
  ],
})
