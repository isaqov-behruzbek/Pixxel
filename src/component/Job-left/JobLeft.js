import './jobleft.css'

export const Jobleft = ({img,heeding}) =>{
    return(
        <>
            <div className="job-left">
                <img className='job-img' src={img} alt="" />
                <div className="job_texts">
                    <h3 className='job_heeding'>{heeding}</h3>
                    <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                </div>
            </div>
        </>
    )
}