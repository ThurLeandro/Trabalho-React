import { Footer } from "../../components/footer/Footer"
import { Menu } from "../../components/menu/Menu"
import './biografia.css'
import img from "./img/leandro.webp"
export const Servicos = ()=>{
    return(
        <>
      
            <div className="logo">
            <h1>Biografia</h1>
        </div>
        <Menu/>
        <h4>Leandro ló</h4>
        <p className="para">Leandro Ló começou sua carreira no jiu-jítsu aos 14 anos de idade, ao ingressar no projeto social Lutando Pelo Bem, coordenado pelo professor Cicero Costha, e conquistou a faixa preta em 2010.
         Seu cartel no jiu-jítsu é de 268 vitórias e 39 derrotas. Destas, apenas 10 ocorreram por finalização.
Começando as disputas de campeonatos na categoria peso-leve, foi campeão do campeonato brasileiro da Confederação Brasileira de Jiu-Jitsu (CBJJ) e o campeonato mundial de jiu-jítsu em Abu-Dhabi. Em 2012 venceu mais uma vez
 o campeonato brasileiro e conquistou seus primeiros títulos do pan-americano e do mundial organizado pela Federação Internacional de Jiu-Jitsu (IBJJF). Entre 2011 e 2013, manteve uma sequência invicta de vitórias na Copa Podio.
Tomou a decisão de subir de categoria, disputando agora como peso-médio, e em 2014 conquistou mais um campeonato mundial. No ano seguinte, anunciou seu desligamento da equipe de Cicero Costha e passou a competir pela NS Brotherhood,
 academia que fundou ao lado de amigos.
Mudou mais uma vez de categoria em 2017, passando a disputar os campeonatos entre os atletas pesados.</p>
<img src={img} alt="" className="ftb" />
<p className="pb">Eterno Ló</p>
        <div className="fsb">
            <Footer/>
        </div>
            
        </>
    )
}