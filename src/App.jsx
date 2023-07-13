import { useState } from 'react'
import Email from './email'
import TextArea from './TextArea'


function App() {
  const [newEmail, setEmail] = useState("")
  const [coments, setComents] = useState([])
  const [newtextComent, setNewTextComent] = useState("")
  function handleClick(ev) {
    ev.preventDefault()

    setComents([
      ...coments,
      {
        email: newEmail,
        data: new Date(),
        comentario: newtextComent
      }
    ])

    // Limpar o campo de e-mail após adicionar o comentário
    setEmail("")
    setNewTextComent("")
  }

  return (
    <div id='app'>
      <form onSubmit={handleClick}>
        <h2>Seção de comentários</h2>
        <Email newEmail={newEmail} setEmail={setEmail} />
        <TextArea newtextComent={newtextComent} setNewTextComent={setNewTextComent} />
        <button>Enviar comentário</button>
      </form>
      <hr />
      <div>
        {coments.length > 0 ? (

          coments.map((comment, index) => (
            <div key={index}>
              <h3>{comment.email}</h3>
              <span>{comment.data.toLocaleString()}</span>
              <p>{comment.comentario}</p>
            </div>
          )
          ) //Fim do map
        ) //fim do true
          : <p>Seja o primeiro a comentar</p> //senao
        }
      </div>
    </div >
  )
}

export default App
