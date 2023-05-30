import "./header.css"
import Logo from "../../assets/img/layer.svg"
export const Header = () =>{
    return(
        <>
            <header className="header">
                <div className="container header_container">
                    <a href="">
                        <img src={Logo} alt="" />
                    </a>
                    <nav className="p-0">
                        <ul className="list">
                            <li className="item">
                                <a className="link" href="">Bosh saxifa</a>
                            </li>
                            <li className="item">
                                <a className="link" href="">Xizmatlar</a>
                            </li>
                            <li className="item">
                                <a className="link" href="">Portfolio</a>
                            </li>
                            <li className="item">
                                <a className="link" href="">Jamoa</a>
                            </li>
                            <li className="item">
                                <a className="link" href="">Blog</a>
                            </li>
                            <li className="item">
                                <a className="link" href="">Kontaktlar</a>
                            </li>
                            <li className="item">
                                <a className="tel_btn" href="">+998 90 921 37 11</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
