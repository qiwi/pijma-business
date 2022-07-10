import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32Timer = (props: SvgProps) => (
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
      d="M11.9142 3.00001C11.9142 2.55818 12.2724 2.20001 12.7142 2.20001H19.2857C19.7275 2.20001 20.0857 2.55818 20.0857 3.00001C20.0857 3.44184 19.7275 3.80001 19.2857 3.80001H16.8V5.47537C18.7619 5.60014 20.5998 6.18057 22.2059 7.11132L23.6517 5.68124C23.9658 5.37054 24.4723 5.3733 24.783 5.68743C25.0937 6.00155 25.0909 6.50807 24.7768 6.81878L23.5609 8.02146C26.444 10.2482 28.3 13.7196 28.3 17.625C28.3 24.3573 22.7848 29.8 16 29.8C9.21511 29.8 3.69995 24.3573 3.69995 17.625C3.69995 13.7196 5.55588 10.2482 8.43898 8.02146L7.22308 6.81878C6.90896 6.50807 6.90619 6.00155 7.2169 5.68743C7.52761 5.3733 8.03413 5.37054 8.34825 5.68124L9.79404 7.11132C11.4001 6.18057 13.238 5.60014 15.2 5.47537V3.80001H12.7142C12.2724 3.80001 11.9142 3.44184 11.9142 3.00001ZM16 7.05001C10.0822 7.05001 5.29995 11.7928 5.29995 17.625C5.29995 23.4572 10.0822 28.2 16 28.2C21.9177 28.2 26.7 23.4572 26.7 17.625C26.7 11.7928 21.9177 7.05001 16 7.05001ZM16 10.325C16.4418 10.325 16.8 10.6832 16.8 11.125V15.3333C17.7526 15.6612 18.4428 16.5586 18.4428 17.625C18.4428 18.9725 17.3408 20.05 16 20.05C14.6591 20.05 13.5571 18.9725 13.5571 17.625C13.5571 16.5586 14.2473 15.6612 15.2 15.3333V11.125C15.2 10.6832 15.5581 10.325 16 10.325ZM16 16.8C15.5262 16.8 15.1571 17.1776 15.1571 17.625C15.1571 18.0724 15.5262 18.45 16 18.45C16.4737 18.45 16.8428 18.0724 16.8428 17.625C16.8428 17.1776 16.4737 16.8 16 16.8Z"
      fill={props.color}
    />
  </Svg>
)
