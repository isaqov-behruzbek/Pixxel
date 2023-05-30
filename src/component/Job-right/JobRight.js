import './jobright.css'

export const Jobright = ({ img, heeding }) => {
    return (
        <>
            <div className="job-right">
                <div className="job_texts">
                    <h3 className='job_heeding'>{heeding}</h3>
                    <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                </div>
                <img className='job-img' src={img} alt="" />
            </div>
        </>
    )
}