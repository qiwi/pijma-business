/* eslint-disable */

const template = (
  { imports, interfaces, componentName, props, jsx },
  { tpl },
) => tpl`
${imports}
${interfaces}
export const ${componentName.replace('Svg', '')} = (${props}) => (
  ${jsx}
)
`

module.exports = template
