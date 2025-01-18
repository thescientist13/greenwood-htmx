import { greenwoodPluginAdapterVercel } from '@greenwood/plugin-adapter-vercel';
import { greenwoodPluginImportRaw } from '@greenwood/plugin-import-raw';

export default {
  plugins: [
    greenwoodPluginImportRaw(),
    greenwoodPluginAdapterVercel({
      runtime: 'nodejs22.x'
    })
  ]
};