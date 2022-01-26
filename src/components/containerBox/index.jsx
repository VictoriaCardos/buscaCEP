import { Cont } from './style'

const Container = props => {
  return (
    <Cont>
      <h1>Busca CEP: </h1>
      {props.children}
    </Cont>
  )
}

export default Container
