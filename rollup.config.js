import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default [
  {
    input: 'client.js',
    output: {
      dir: 'public',
      format: 'cjs'
    },
    plugins: [
      svelte(),
      resolve({
        browser: true,
        dedupe: ['svelte']
      }),
      commonjs()
    ],
    watch: {
      clearScreen: false
    }
  },
  {
    input: 'Static.svelte',
    output: {
      file: 'static.js',
      format: 'cjs',
      exports: 'auto'
    },
    plugins: [
      svelte({
        compilerOptions: {
          generate: 'ssr'
        }
      }),
      resolve()
    ]
  }
]
