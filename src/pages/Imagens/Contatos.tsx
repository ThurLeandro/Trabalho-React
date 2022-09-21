import { Footer } from "../../components/footer/Footer"
import { Menu } from "../../components/menu/Menu"
import './contato.css'
import img from "./img/le.jpg"
import img2 from "./img/lole.jpg"
import img3 from "./img/lo.jpg"
export const Contatos = ()=>{
    return(
        <>
        <div className="logo">
            <h1>Imagens</h1>
        </div>
        <Menu/>
        <img src={img} alt="lozinho" className="img" />
        <p className="p1">Leandro Ló não foi apenas um atletla, campeão mundial, ele foi uma lenda.</p>
        <img src={img2} alt="lozinho" className="img2" />
        <p className="p2">Ló é inspiração de muitos atletas (inclusive meu)</p>
        <img src={img3} alt="lozinho" className="img3" />
        <p className="p3">Para sempre será lembrado, obrigado por tudo Ló</p>
        <div className="fsi">
            <Footer/>
        </div>
        
        </>
    )
}