/* eslint-disable */

const path = require('path')

const defaultIndexTemplate = (files) => {
  const result = []
  const icons = files.map((file) => path.basename(file, path.extname(file)))
  icons.forEach((name) => {
    result.push(`export * from './${name}'`)
  })
  // result.push(`export interface IconProps {`)
  result.push(
    // `  size: ${icons
    `export type IconSize = ${icons
      .map((icon) => icon.substring(4, 6))
      .filter((value, index, self) => self.indexOf(value) === index)
      .join(' | ')}`,
  )
  result.push(
    // `  name: ${icons
    `export type IconName = ${icons
      .map((icon) =>
        icon
          .substring(6)
          .replace(/[A-Z]/g, (match) => '-' + match.toLowerCase())
          .replace(/^\d+/g, (match) => '-' + match.toLowerCase())
          .substring(1)
          .toLowerCase(),
      )
      .filter((value, index, self) => self.indexOf(value) === index)
      .map((name) => `'${name}'`)
      .join(' | ')}`,
  )
  // result.push(`}`)
  return result.join('\n')
}

module.exports = defaultIndexTemplate
