import * as S from './styles'

type MainProps = {
  title?: string
}

const Main = ({ title = 'Beer collection' }: MainProps) => (
  <S.Wrapper>
    <h1>{title}</h1>
  </S.Wrapper>
)

export default Main
