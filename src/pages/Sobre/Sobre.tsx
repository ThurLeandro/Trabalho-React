import { Footer } from "../../components/footer/Footer"
import { Menu } from "../../components/menu/Menu"
import './sobre.css'
export const Sobre = ()=>{
    return(
        <>
        <div className="logo">
            <h1>Sobre Min</h1>
        </div>
            <Menu/>
            <form action="">
                <p className="ps">Nome:</p>
                <input type="text" className="box"/>
                <p className="ps">Email:</p>
                <input type="text" className="box2"/>
                <p>Digite seu comentário:</p>
                <textarea name="" className="box3"></textarea>
                <button className="but">Enviar</button>
            </form>
        <div className="princ">
            <h3>Sou apenas um admirador da lenda Leandro Ló e quis fazer essa homenagem para ele</h3>
        <p className="p4">meu email para contato: arturbc109@gmail.com<br/> @arturbl.bjj</p>
        </div>
        
        <div className="fss">
           <Footer/>
        </div>
        
    
    </>
    )
    
}