import search from '../../assets/search.svg'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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

    if (searchedCep === '') {
      toast.error('Insira um CEP primeiro')
      return
    } else {
      try {
        const response = await api.get(`/${searchedCep}/json/`)

        ctx.setCep(response.data)
        toast.success('CEP encontrado!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      } catch {
        toast.error('CEP não encontrado')
      }
    }

    setSearchedCep('')
  }

  return (
    <Content onSubmit={handleSubmit}>
      <input
        placeholder="Digite o CEP desejado"
        type="text"
        value={searchedCep}
        onChange={onChangeHandler}
      />
      <button type="submit">
        <img src={search} alt="search" />
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Content>
  )
}

export default Form
