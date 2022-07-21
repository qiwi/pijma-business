import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32QuestionInCircle = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 26.9C22.0199 26.9 26.9 22.0199 26.9 16C26.9 9.9801 22.0199 5.1 16 5.1C9.9801 5.1 5.1 9.9801 5.1 16C5.1 22.0199 9.9801 26.9 16 26.9ZM16 28.5C22.9036 28.5 28.5 22.9036 28.5 16C28.5 9.09644 22.9036 3.5 16 3.5C9.09644 3.5 3.5 9.09644 3.5 16C3.5 22.9036 9.09644 28.5 16 28.5Z"
      fill={props.color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.0397 9.98184C14.4408 9.98184 13.037 11.2373 13.037 12.9325H11.437C11.437 10.2782 13.6345 8.38184 16.0397 8.38184C18.4676 8.38184 20.5609 10.3001 20.5609 12.9325C20.5609 14.0487 20.0755 14.7905 19.483 15.3993C19.2489 15.64 18.9829 15.8748 18.7302 16.098C18.682 16.1406 18.6343 16.1827 18.5873 16.2244C18.2835 16.4943 17.9851 16.768 17.6973 17.0861C17.1015 17.7447 16.8002 18.4794 16.8002 19.4111H15.2002C15.2002 18.0699 15.6576 16.9558 16.5108 16.0126C16.8594 15.6274 17.2113 15.3066 17.5248 15.0281C17.5794 14.9796 17.6322 14.933 17.6833 14.8878C17.9361 14.6643 18.1482 14.4768 18.3364 14.2834C18.7542 13.8541 18.9609 13.4908 18.9609 12.9325C18.9609 11.2154 17.616 9.98184 16.0397 9.98184ZM15.2397 22.8201V21.1156H16.8397V22.8201H15.2397Z"
      fill={props.color}
    />
  </Svg>
)