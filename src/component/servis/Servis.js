import './servis.css'
import {Card} from '../Card/Card'
import VebSayt from '../../assets/img/vebsayt.svg'
import Bot from '../../assets/img/bot.svg'
import Smm from '../../assets/img/smm.svg'
import Design from '../../assets/img/design.svg'
import Crm from '../../assets/img/crm.svg'


export const Servis = ({img,heeding}) =>{
    return(
        <>
            <div className="servis">
                <div className="container">
                    <h3 className="servis_heeding">
                        Xizmatlar
                    </h3>
                    <p className='servis_p'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <Card heeding={"Vebsayt tuzish"} img={VebSayt}/>
                        <Card heeding={"Telegram bot"} img={Bot} />
                        <Card heeding={"SMM"} img={Smm} />
                    </div>
                    <div className="d-flex align-items-center mt-5 justify-content-around">
                        <Card heeding={"Grafik dizayn"} img={Design} />
                        <Card heeding={"Telegram bot"} img={Crm} />
                    </div>
                    <div className="d-flex align-items-center mt-5 justify-content-center">
                        <a className='servis_href' href="">Buyurtma berish</a>
                        <a className='servic_ondecoration' href="">Xizmatlar sahifasiga o’tish</a>
                    </div>
                </div>
            </div>
        </>
    )
}