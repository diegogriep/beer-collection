import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes = AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children?: React.ReactNode
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
  as?: React.ElementType
} & ButtonTypes

const Button = ({ children, ...props }: ButtonProps) => (
  <S.Wrapper {...props}>
    {children}
  </S.Wrapper>
)

export default Button
