import Logo from '../Logo'
import * as S from './styles'

type MainProps = {
  children: React.ReactNode
  title?: string
}

const Main = ({ children, title = 'Beer collection' }: MainProps) => (
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

export default Main
