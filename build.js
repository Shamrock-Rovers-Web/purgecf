import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['./functions/index.js'],
  bundle: true,
  outfile: './functions/index.bundled.js',
  format: 'esm',
  platform: 'browser',
  target: 'es2020',
  external: [],
  minify: true,
})

// Copy the bundled file back to index.js
import { promises as fs } from 'fs'
await fs.copyFile('./functions/index.bundled.js', './functions/index.js')
await fs.unlink('./functions/index.bundled.js')
