import { greenwoodPluginAdapterVercel } from '@greenwood/plugin-adapter-vercel';
import { greenwoodPluginImportCss } from '@greenwood/plugin-import-css';
import { greenwoodPluginImportJsx } from '@greenwood/plugin-import-jsx';

export default {
  plugins: [
    greenwoodPluginImportCss(),
    greenwoodPluginImportJsx(),
    greenwoodPluginAdapterVercel()
  ]
};