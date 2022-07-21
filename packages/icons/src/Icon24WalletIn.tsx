import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24WalletIn = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.8749 2.40002C11.2063 2.40002 11.4749 2.66865 11.4749 3.00002V6.0515L12.7006 4.82576C12.935 4.59145 13.3149 4.59145 13.5492 4.82576C13.7835 5.06007 13.7835 5.43997 13.5492 5.67429L12.0947 7.12879C11.421 7.80245 10.3288 7.80245 9.65514 7.12879L8.20064 5.67429C7.96632 5.43997 7.96632 5.06007 8.20064 4.82576C8.43495 4.59145 8.81485 4.59145 9.04917 4.82576L10.2749 6.0515V3.00002C10.2749 2.66865 10.5435 2.40002 10.8749 2.40002ZM5.2499 6.97502C4.33863 6.97502 3.5999 7.71375 3.5999 8.62502V9.15002H18.1499V8.62502C18.1499 7.71375 17.4112 6.97502 16.4999 6.97502H15.3749C15.0435 6.97502 14.7749 6.7064 14.7749 6.37502C14.7749 6.04365 15.0435 5.77502 15.3749 5.77502H16.4999C18.0739 5.77502 19.3499 7.05101 19.3499 8.62502V9.21329C20.6358 9.48883 21.5999 10.6318 21.5999 12V18.75C21.5999 20.324 20.3239 21.6 18.7499 21.6H5.2499C3.67589 21.6 2.3999 20.324 2.3999 18.75V8.62502C2.3999 7.05101 3.67589 5.77502 5.2499 5.77502H6.3749C6.70627 5.77502 6.9749 6.04365 6.9749 6.37502C6.9749 6.7064 6.70627 6.97502 6.3749 6.97502H5.2499ZM20.3999 17.025V13.725H18.7499C17.8386 13.725 17.0999 14.4638 17.0999 15.375C17.0999 16.2863 17.8386 17.025 18.7499 17.025H20.3999ZM20.3999 12.525H18.7499C17.1759 12.525 15.8999 13.801 15.8999 15.375C15.8999 16.949 17.1759 18.225 18.7499 18.225H20.3999V18.75C20.3999 19.6613 19.6612 20.4 18.7499 20.4H5.2499C4.33863 20.4 3.5999 19.6613 3.5999 18.75V10.35H18.7499C19.6612 10.35 20.3999 11.0888 20.3999 12V12.525Z"
      fill={props.color}
    />
  </Svg>
)