import Button from '@/components/Button'
import { Container } from '@/components/Container'
import Filter from '@/components/Filter'
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
      <Filter />
    </header>

    <Container>
      <S.WrapperItems>
        {children}
      </S.WrapperItems>
    </Container>

    <footer>
      {`${new Date().getFullYear()} - ${ title }`}
    </footer>
  </S.Wrapper>
)

export default Template
