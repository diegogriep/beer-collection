import Logo from '@/components/Logo'
import * as S from '@/components/Main/styles'

type TemplateProps = {
  children: React.ReactNode
  title?: string
}

const Template = ({ children, title = 'Beer collection' }: TemplateProps) => (
  <S.Wrapper>
    <header>
      <Logo />
    </header>

    <main>{ children }</main>

    <footer>
      {`${new Date().getFullYear()} - ${ title }`}
    </footer>
  </S.Wrapper>
)

export default Template
