import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24InfoInCircle = (props: SvgProps) => (
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
      d="M12 20.3C16.584 20.3 20.3 16.584 20.3 12C20.3 7.41604 16.584 3.7 12 3.7C7.41604 3.7 3.7 7.41604 3.7 12C3.7 16.584 7.41604 20.3 12 20.3ZM12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5Z"
      fill={props.color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.1592 16.4864L13.0001 16.4864C12.1164 16.4864 11.4001 15.77 11.4001 14.8864L11.4001 11.7046C11.4001 11.4837 11.221 11.3046 11.0001 11.3046L9.841 11.3046L9.841 10.1046L11.0001 10.1046C11.8837 10.1046 12.6001 10.8209 12.6001 11.7046L12.6001 14.8864C12.6001 15.1073 12.7792 15.2864 13.0001 15.2864L14.1592 15.2864L14.1592 16.4864ZM12.6001 7.25002L12.6001 8.54548L11.4001 8.54548L11.4001 7.25003L12.6001 7.25002Z"
      fill={props.color}
    />
  </Svg>
)