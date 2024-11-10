import {Plugin} from 'vite';

import * as yaml from 'js-yaml'

export default function yamlPlugin(): Plugin {
  return {
    name: 'yaml-plugin-vite',
    transform(code, id) {
      if (!id.endsWith('.yaml')) return;

      const data = yaml.load(code)
      return `export default ${JSON.stringify(data)}`
    }
  }
}
