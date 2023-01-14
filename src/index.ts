import { Transformer } from '@parcel/plugin';
import { Liquid, defaultOptions } from 'liquidjs';

type LiquidOptions = Partial<typeof defaultOptions>;

export default new Transformer({
  async loadConfig({ config }) {
    const configFiles = [
      '.liquidrc',
      '.liquidrc.js',
      '.liquidrc.cjs',
      'liquid.config.js',
      'liquid.config.cjs',
    ];

    const { contents, filePath } =
      (await config.getConfig<LiquidOptions>(configFiles)) || {};

    if (filePath) {
      if (filePath.endsWith('.js')) {
        config.invalidateOnStartup();
      }

      config.invalidateOnFileChange(filePath);
    }

    return contents;
  },
  async transform({ asset, config }) {
    const engine = new Liquid(config as LiquidOptions);
    const code = await asset.getCode();
    const template = await engine.parseAndRender(code);

    asset.setCode(template);
    asset.type = 'html';

    return [asset];
  },
});
