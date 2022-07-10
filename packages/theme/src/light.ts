import { Theme } from './Theme'

const fontFamilySussieIntl = 'Sussie Intl'
const fontFamilyAgipo = 'Agipo'
const fontStyleNormal = 'normal'
const fontWeight900 = '900'
const fontWeight400 = '400'

export const light: Theme = {
  color: {
    black: '#272A35',
    white: '#FFFFFF',
    gray: '#7E7F85',
    silver: '#D9D9D9',
    cloud: '#F9F9F9',
    orange: '#FF6F00',
    green: '#87DF17',
    salad: '#DBF5B9',
    red: '#EA3737',
    pink: '#FFE3E3',
  },
  text: {
    h1: {
      family: fontFamilyAgipo,
      weight: fontWeight900,
      style: fontStyleNormal,
      size: [26, 40],
      height: [28, 42],
    },
    h2: {
      family: fontFamilyAgipo,
      weight: fontWeight900,
      style: fontStyleNormal,
      size: [22, 30],
      height: [24, 32],
    },
    h3: {
      family: fontFamilyAgipo,
      weight: fontWeight900,
      style: fontStyleNormal,
      size: [19, 20],
      height: [22, 22],
    },
    p10: {
      family: fontFamilySussieIntl,
      weight: fontWeight400,
      style: fontStyleNormal,
      size: 10,
      height: 12,
    },
    p14: {
      family: fontFamilySussieIntl,
      weight: fontWeight400,
      style: fontStyleNormal,
      size: 14,
      height: 18,
    },
    p16: {
      family: fontFamilySussieIntl,
      weight: fontWeight400,
      style: fontStyleNormal,
      size: 16,
      height: 18,
    },
    p19: {
      family: fontFamilySussieIntl,
      weight: fontWeight400,
      style: fontStyleNormal,
      size: 19,
      height: 22,
    },
  },
}
