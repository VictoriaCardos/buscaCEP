import { useState, useContext } from 'react'
import { context } from '../../context'
import { api } from '../../services/api'
import { Content } from './style'

const Form = () => {
  const ctx = useContext(context)

  const [searchedCep, setSearchedCep] = useState('')
  const onChangeHandler = event => {
    setSearchedCep(event.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const response = await api.get(`/${searchedCep}/json/`)

      ctx.setCep(response.data)
      console.log('deu certo??')
    } catch (err) {
      console.log(err)
      alert('cep não encontrado')
    }
  }

  return (
    <Content onSubmit={handleSubmit}>
      <input type="text" value={searchedCep} onChange={onChangeHandler} />
      <button type="submit">PESQUISAR</button>
      {ctx.cep?.cep ? <h2>{ctx.cep?.logradouro}</h2> : undefined}
    </Content>
  )
}

export default Form
