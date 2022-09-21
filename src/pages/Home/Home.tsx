import { Footer } from "../../components/footer/Footer"
import { Menu } from "../../components/menu/Menu"
import './home.css'
import img from "./img/copa-podio-campeao.png"
export const Home = ()=>{
    return(
    <>
    <div className="logo">
        <h1>Home Page</h1>
    </div>
        <Menu/>
    <h4>Titulos</h4>
    <p className="p">Leandro já conquistou vários títulos, dentre os principais podemos citar:</p>
    <li className="lista">Campeão Mundial (IBJJF) em 2012, 2013, 2014, 2015, 2016, 2018, 2019, 2022;</li>
        <li className="lista">Campeão Pan-americano (IBJJF) em 2012, 2014, 2015, 2016, 2017 e 2018;</li>
        <li className="lista">Campeão Europeu (IBJJF) em 2017;</li>
        <li className="lista">Campeão brasileiro (CBJJ) em 2011, 2012 e 2017;</li>
        <li className="lista">Campeão brasileiro de jiu-jítsu sem quimono em 2011 e 2012;</li>
        <li className="lista">Campeão Mundial Abu Dhabi Pro (UAEJJF) em 2011, 2013, 2014 e 2015.</li>
    <img src={img} alt="leandro ló" className="ft" />
    <p className="ft">Leandro Ló ganhando ouro na copa podio</p>
    <div className="fsh">
         <Footer/>
    </div>
       
    </>
    )
}