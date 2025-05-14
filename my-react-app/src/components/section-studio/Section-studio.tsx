import '../../assets/styles/Section_studio.css'
import '../../assets/styles/Container.css'

export const Section_studio = () => {
    return (
        <section className="section-studio">

            <div className="container">
                <p className="container__caption">STUDIO</p>
                <h2 className="container__slogan">Stay in <span className="slogan_colored">sync</span></h2>
                <p className="container__text">Tru industry-leading music software for free, pay it off over time and own it forever.</p>
                <button className="container__button">TRY STUDIO</button>                
            </div>
            
            <img src="./public/images/studio_img.png" alt="" className="info-studio__img"/>
        </section>
    )
}