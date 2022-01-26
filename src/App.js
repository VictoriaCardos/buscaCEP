import { GlobalStyle } from './styles/global'
import Container from './components/containerBox/index'
import Search from './components/form'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Search />
      </Container>
    </>
  )
}

export default App
