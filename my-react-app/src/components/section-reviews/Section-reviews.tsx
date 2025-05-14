import '../../assets/styles/Section_reviews.css'
import '../../assets/styles/Container.css'

export const Section_reviews = () => {
    return (
         <section className="section-reviews">

            <div className="container">
                <h2 className="container__slogan">What <span className="slogan_colored">creators</span> are saying about Splice</h2>
                <p className="container__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Augue tellus urna, mi velit diam. Turpis diam amet massa id.</p>
                <button className="container__button">TRY IT NOW</button>
            </div>

            <img src="./public/images/reviews_img.png" alt="" className="section-reviews__img"/>
            
            <div className="section-reviews__cards" id="cards"></div>
        </section>
    )
}