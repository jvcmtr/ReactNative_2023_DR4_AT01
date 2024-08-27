import {Link} from 'react-router-dom'

export default function NavBar(){
  return(
    <div style={STYLE}>
      |
      <Link to='/'>Home</Link>
      ||
      <Link to='/sobre'>Sobre</Link>
      ||
      <Link to='/contato'>Contato</Link>
      |
    </div>)
}

const STYLE = {
  display: 'flex',
  alignItems: 'center',
  columnGap: '10px',
  padding: '10px',
  maxHeight: '10vh'
}