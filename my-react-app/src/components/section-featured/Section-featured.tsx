export const Section_featured = () => {
    return (
        <section className="section-featured">

            <p className="section-featured__caption">FEATURED IN</p>
            <div className="section-featured__marquee">
                <div className="section-featured__list" id="marquee">
                    <img src="img/featured1.svg" alt="" className="section-featured__img"/>
                    <img src="img/featured2.svg" alt="" className="section-featured__img"/>
                    <img src="img/featured3.svg" alt="" className="section-featured__img"/>
                    <img src="img/featured4.svg" alt="" className="section-featured__img"/>
                    <img src="img/featured5.svg" alt="" className="section-featured__img"/>  
                </div>
            </div>
        </section>
    )
}