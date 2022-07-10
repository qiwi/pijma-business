import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40Star = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.2257 5.73079C18.3855 3.42306 21.6144 3.42308 22.7742 5.73079L25.9755 12.1006C26.1386 12.4251 26.4287 12.6425 26.7526 12.7083L33.4878 14.077C35.8891 14.565 36.7872 17.5097 35.2088 19.3213L30.3828 24.8606C30.1612 25.1149 30.0524 25.463 30.0944 25.8148L30.8844 32.4212C31.2035 35.0898 28.2577 37.0526 25.9858 35.408L20.6302 31.5313C20.2499 31.256 19.75 31.256 19.3697 31.5313L14.0141 35.408C11.7422 37.0526 8.79639 35.0899 9.11549 32.4212L9.90545 25.8148C9.94752 25.463 9.83865 25.1149 9.61712 24.8606L4.79107 19.3213C3.21272 17.5097 4.1108 14.565 6.51207 14.077L13.2473 12.7083C13.5712 12.6425 13.8613 12.4251 14.0244 12.1006L17.2257 5.73079ZM20.9872 6.62889C20.5658 5.79037 19.4341 5.79037 19.0127 6.62888L15.8114 12.9987C15.3806 13.856 14.5875 14.4769 13.6456 14.6683L6.91036 16.0369C6.08458 16.2048 5.67828 17.295 6.29903 18.0075L11.1251 23.5468C11.7237 24.2339 11.9995 25.1477 11.8913 26.0523L11.1013 32.6587C10.9707 33.7511 12.1072 34.3194 12.8414 33.7879L18.197 29.9112C19.2771 29.1294 20.7228 29.1294 21.8029 29.9112L27.1585 33.7879C27.8927 34.3194 29.0292 33.7511 28.8986 32.6587L28.1086 26.0523C28.0004 25.1477 28.2762 24.2339 28.8748 23.5468L33.7009 18.0075C34.3216 17.295 33.9153 16.2048 33.0895 16.0369L26.3543 14.6683C25.4124 14.4769 24.6193 13.856 24.1885 12.9987L20.9872 6.62889Z"
      fill={props.color}
    />
  </Svg>
)
