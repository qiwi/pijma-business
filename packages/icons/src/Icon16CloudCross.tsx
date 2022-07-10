import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16CloudCross = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9892 2.63723C12.1896 2.4472 12.5061 2.45556 12.6961 2.65591L13.4167 3.41558L14.1372 2.65591C14.3273 2.45556 14.6437 2.4472 14.8441 2.63723C15.0444 2.82727 15.0528 3.14374 14.8628 3.34409L14.1058 4.14213L14.8628 4.94017C15.0528 5.14052 15.0444 5.457 14.8441 5.64703C14.6437 5.83707 14.3273 5.82871 14.1372 5.62836L13.4167 4.86868L12.6961 5.62836C12.5061 5.82871 12.1896 5.83707 11.9892 5.64703C11.7889 5.457 11.7805 5.14052 11.9706 4.94017L12.7275 4.14213L11.9706 3.34409C11.7805 3.14374 11.7889 2.82727 11.9892 2.63723ZM4.29141 7.36216C4.29141 7.3625 4.29141 7.36284 4.29141 7.36318L4.29152 7.38965C4.29254 7.63779 4.11143 7.84913 3.86606 7.88612C2.8308 8.04219 2 8.99279 2 10.1816C2 11.4872 2.9976 12.5 4.17332 12.5L4.17635 12.5L10.6657 12.5C11.6305 12.5 12.4571 11.6675 12.4571 10.5842C12.4571 9.50093 11.6305 8.66844 10.6657 8.66844C9.98844 8.66844 9.38497 9.0731 9.07947 9.69309C8.95741 9.94079 8.65766 10.0426 8.40996 9.92059C8.16226 9.79853 8.0604 9.49878 8.18246 9.25108C8.43588 8.73678 8.83469 8.30693 9.32567 8.02561C9.37535 7.81406 9.40185 7.59224 9.40185 7.36318C9.40185 5.83516 8.23326 4.64214 6.84663 4.64214C5.4603 4.64214 4.29193 5.83463 4.29141 7.36216ZM10.3889 7.68254C10.3975 7.5772 10.4018 7.47069 10.4018 7.36318C10.4018 5.33333 8.83469 3.64214 6.84663 3.64214C4.9826 3.64214 3.48859 5.12889 3.30943 6.98754C1.96263 7.38414 1 8.67828 1 10.1816C1 11.9891 2.39617 13.5 4.17332 13.5L4.1772 13.5H10.6657C12.2319 13.5 13.4571 12.1693 13.4571 10.5842C13.4571 8.99911 12.2319 7.66844 10.6657 7.66844C10.5722 7.66844 10.4799 7.67322 10.3889 7.68254Z"
      fill={props.color}
    />
  </Svg>
)
