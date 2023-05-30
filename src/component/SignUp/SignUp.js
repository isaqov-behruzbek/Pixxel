import './signup.css'

export const SignUp = () => {
    return (
        <>
            <div className="signup">
                <input className='input' type="text" placeholder='Ismingiz' />
                <input className='input mt-0' type="number" placeholder='Telefon raqamingiz' />

                {/* DropDown */}

                <div className="dropdown select-item">
                    <button className="btn select-item dropdown-toggle d-flex justify-content-between align-items-center"type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        Xizmatlar
                    </button>
                    <div className="dropdown-menu" aria-labelledby="triggerId">
                        <a className="dropdown-item" href=""></a>
                        <a className="dropdown-item" href=""></a>
                        <a className="dropdown-item" href=""></a>
                    </div>
                </div>  

                {/* a href */}
                <a className='signup_href' href="">Buyurtma berish</a>




            </div>
        </>
    )
}