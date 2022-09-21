import { Link } from 'react-router-dom'
import './menu.css'
export const Menu = ()=>{
    return(
         <>
         <div className='men'>
        <Link to="/" className='ul'>Home</Link>
        <Link to="/servicos" className='ul'>Biografia</Link>
        <Link to="/contatos" className='ul'>Imagens</Link>
         </div>
        
    </>
    )
   
}