module.exports = {
  expandProps: 'end',
  typescript: true,
  native: true,
  prettier: true,
  svgoConfig: {
    plugins: [
      {
        name: 'removeAttrs',
        params: {
          attrs: ['svg:xmlns'],
        },
      },
    ],
  },
  replaceAttrValues: {
    '#272A35': '{props.color}',
  },
  svgProps: {
    focusable: false,
  },
  template: require('./svgr.component.cjs'),
  indexTemplate: require('./svgr.index.cjs'),
}
