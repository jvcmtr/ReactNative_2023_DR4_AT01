import React from 'react'

export default function Contato(){

  const [erro, setErro] = React.useState('')
  const [nome, setNome] = React.useState('')
  const [msg, setMsg] = React.useState('')
  
  const validate = (e) =>{
    e.preventDefault();
    setErro('')
    
    let name = e.target[0].value
    if(name.length < 3 ){
      setErro('Digite o seu nome completo')
      return
    }

    let invalid = "0123456789!@#$%&*(){}[];:,?><=-"
      for (let i = 0; i<invalid.length; i++) {
        if (name.includes(invalid[i])){
          setErro('Seu nome não pode conter numeros ou caracteres especiais')
          return
        }
      }
      
    let content = e.target[1].value.trim()
    if (content == ""){
      setErro('Por favor digite  a mensagem que deseja nos enviar')
      return
    }

    setNome('');
    setMsg('')
    alert(`Obrigado pelo feed-back ${name}, a sua mensagem foi enviada com sucesso !`)
  }
  
  return(
    <div>
      <form style={STYLE} onSubmit={validate}>
        <h3>Entre em contato</h3>
        <label htmlFor='nome'> Nome </label>
        <input 
          type='text' 
          placeholder='Digite seu nome Completo' 
          value={nome} 
          onChange={(e)=>setNome(e.target.value)}/>

        <br></br>
        
        <label> Conteudo da mensagem </label>
        <textarea 
          placeholder='Sobre o que gostaria de falar conosco' 
          rows='5'
          value={msg} 
          onChange={(e)=>setMsg(e.target.value)}/>
        <br></br>

        <span style={{color:'red'}}>{erro}</span>
        <button type='submit' style={ButtonSTYLE}> Enviar</button>
      </form>
    </div>
  )
}



const STYLE = {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '5px',
  backgroundColor: "#dddddd",
  padding: '30px',
  width: '80vw',
  border: '5px solid #efefef',
}
const ButtonSTYLE = {
  width: '60px',
  borderRadius: '5px',
  padding: '5px',
  border: '3px solid #80ddff',
  backgroundColor: '#2080ff',
  fontWeight: '600',
  color: 'black'
}