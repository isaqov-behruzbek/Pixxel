import './card.css'
export const Card = ({img, heeding}) =>{
    return(
        <>
            <div className="cards">
                <img src={img} alt="" />
                <h3 className='card_heeding'>{heeding}</h3>
                <p>Lorem ipsum</p>
            </div>
        </>
    )
}