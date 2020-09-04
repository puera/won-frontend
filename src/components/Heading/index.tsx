import { HTMLAttributes } from 'react'
import * as S from './styles'

export type LineColorsProps = 'primary' | 'secondary'

export type HeadingProps = {
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColorsProps
  size?: 'small' | 'medium'
} & HTMLAttributes<HTMLHeadElement>

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  size = 'medium',
  lineColor = 'primary',
  ...props
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineColor={lineColor}
    size={size}
    {...props}
  >
    {children}
  </S.Wrapper>
)

export default Heading
