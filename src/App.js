import { GlobalStyle } from './styles/global'
import { ContextProvider } from './context/index'
import Container from './components/containerBox/index'
import Form from './components/form'

function App() {
  return (
    <ContextProvider>
      <GlobalStyle />
      <Container>
        <Form />
      </Container>
    </ContextProvider>
  )
}

export default App
