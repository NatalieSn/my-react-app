import '../../assets/styles/Section_featured.css'

export const Section_featured = () => {
    return (
        <section className="section-featured">

            <p className="section-featured__caption">FEATURED IN</p>
            <div className="section-featured__marquee">
                <div className="section-featured__list" id="marquee">
                    <img src="./public/images/featured1.svg" alt="" className="section-featured__img"/>
                    <img src="./public/images/featured2.svg" alt="" className="section-featured__img"/>
                    <img src="./public/images/featured3.svg" alt="" className="section-featured__img"/>
                    <img src="./public/images/featured4.svg" alt="" className="section-featured__img"/>
                    <img src="./public/images/featured5.svg" alt="" className="section-featured__img"/>  
                </div>
            </div>
        </section>
    )
}