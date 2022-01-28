import { GlobalStyle } from './styles/global'
import { ContextProvider } from './context/index'
import Container from './components/containerBox/index'
import Form from './components/form'
import DataCep from './components/dataCep'

function App() {
  return (
    <ContextProvider>
      <GlobalStyle />
      <Container>
        <Form />
        <DataCep />
      </Container>
    </ContextProvider>
  )
}

export default App
