import './hero.css'
export const Hero = () => {
    return (
        <>
            <div className="text-align-start container hero_container">
                <div className="hero-left">
                    <h1 className='hero_text'>
                        Biznesingizni keyingi bosqichga
                        olib chiqing
                    </h1>
                    <p className='pt-3'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
                    <a className='hero_btn' href="">Xizmatlar bilan tanishish</a>
                </div>
                <iframe width="458" height="258" src="https://www.youtube.com/embed/6_pru8U2RmM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
        </>
    )
}