import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32ArrowDownV4 = (props: SvgProps) => (
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
      d="M16.8485 20.0201C16.3799 20.4887 15.6201 20.4887 15.1514 20.0201L4.56564 9.4343C4.25322 9.12188 3.74669 9.12188 3.43427 9.4343C3.12185 9.74672 3.12185 10.2533 3.43427 10.5657L14.0201 21.1515C15.1135 22.2449 16.8864 22.2449 17.9799 21.1515L28.5656 10.5657C28.8781 10.2533 28.8781 9.74672 28.5656 9.4343C28.2532 9.12188 27.7467 9.12188 27.4343 9.4343L16.8485 20.0201Z"
      fill={props.color}
    />
  </Svg>
)
