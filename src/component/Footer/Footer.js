import './footer.css';
import Telegram from '../../assets/img/social img/telegram.svg';
import Facebook from '../../assets/img/social img/facebook.svg';
import Instagram from '../../assets/img/social img/instagram.svg';

export const Footer = () => {
    return(
        <>
            <footer className='footer'>
                <div className="container d-flex justify-content-start">
                    <div className="copyright">
                        <h3 className='footer_heeding'>Copyright 2020</h3>
                        <p className='footer_p'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar tincidunt.</p>
                    </div>
                    <div className="saytpage">
                        <h3 className='footer_heeding'>Sayt sahifalari</h3>
                        <div className="sahifalar">
                            <a className='items' href="">Bosh sahifa</a>
                            <a className='items' href="">Xizmatlar</a>
                            <a className='items' href="">Portfolio</a>
                            <a className='items' href="">Jamoa</a>
                            <a className='items' href="">Blog</a>
                            <a className='items' href="">Kontaktlar</a>
                        </div>
                    </div>
                    <div className="socials">
                        <h3 className='footer_heeding'>Sayt sahifalari</h3>
                        <div className="social">
                            <a className='items' href=""><img className='social_img' src={Telegram} alt="" />Telegram</a>
                            <a className='items' href=""><img className='social_img' src={Facebook} alt="" />Facebook</a>
                            <a className='items' href=""><img className='social_img' src={Instagram} alt="" />Instagram</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}