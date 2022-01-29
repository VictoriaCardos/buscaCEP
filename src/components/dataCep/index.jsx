import { useContext } from 'react'
import { context } from '../../context'
import { DataCEP } from './style'

const DataCep = () => {
  const ctx = useContext(context)
  return (
    <DataCEP>
      {ctx.cep?.cep ? (
        <>
          <h2>
            <strong>CEP:</strong> {ctx.cep?.cep}
          </h2>
          <h2>
            <strong>Logradouro: </strong>
            {ctx.cep?.logradouro}
          </h2>
          <h2>
            <strong>Bairro: </strong>
            {ctx.cep?.bairro}
          </h2>
          <h2>
            <strong>Complemento: </strong>
            {ctx.cep?.complemento}
          </h2>
          <h2>
            <strong>Localidade: </strong>
            {ctx.cep?.localidade}
          </h2>
          <h2>
            <strong>UF: </strong>
            {ctx.cep?.uf}
          </h2>
        </>
      ) : undefined}
    </DataCEP>
  )
}

export default DataCep
