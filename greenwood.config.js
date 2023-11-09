import { greenwoodPluginAdapterVercel } from '@greenwood/plugin-adapter-vercel';
import { greenwoodPluginImportCss } from '@greenwood/plugin-import-css';

export default {
  plugins: [
    greenwoodPluginImportCss(),
    greenwoodPluginAdapterVercel()
  ]
};