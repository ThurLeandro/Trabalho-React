import { Link } from 'react-router-dom'
import './footer.css'
export const Footer = ()=>{
    return(
        <>
        <footer>
            <div>
            <Link to="/sobre" className='sob'>sobre mim</Link> 
            </div>
        </footer>
        </>
    )
}