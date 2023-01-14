# parcel-transformer-liquid

[Parcel 2](https://parceljs.org/) transformer plugin for [LiquidJS](https://liquidjs.com/).

## Installation

```bash
$ yarn add -D parcel-transformer-liquid
```

## Usage

Add the transformer to Parcel config file:

```json
// .parcelrc

{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.liquid": [
      "parcel-transformer-liquid"
    ]
  }
}
```

To pass [options](https://liquidjs.com/tutorials/options.html) to the LiquidJS engine, create a configuration file named `.liquidrc`, `.liquidrc.js`, `.liquidrc.cjs`, `liquid.config.js`, or `liquid.config.cjs`:

```json
// .liquidrc

{
  "root": ["src/partials/"],
  "extname": ".liquid",
  "globals": {
    "page_title": "Liquid transformer example",
    "today": "Wednesday"
  }
}
```

## License

MIT
