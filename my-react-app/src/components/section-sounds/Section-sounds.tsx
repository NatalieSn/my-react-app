import '../../assets/styles/Section_sounds.css'
import '../../assets/styles/Container.css'

export const Section_sounds = () => {
    return (
        <section className="section-sounds">

            <div className="container">
                <p className="container__caption">SOUNDS</p>
                <h2 className="container__slogan">Find your <span className="slogan_colored">sound</span></h2>
                <p className="container__text">Preview and download millions of royalty-free samples from top producers,
                    artists, and sound designers. Available on desktop, web, and mobile.</p>
                <button className="container__button">TRY SOUNDS</button>
            </div>
            <div className="swiper">
                <div className="swiper-wrapper">
                  <img src="./public/images/sounds_img.png" alt="" className="swiper-slide"/>
                  <img src="./public/images/screen.jpg" alt="" className="swiper-slide"/>
                </div>
                <div className="swiper-pagination"></div>
            </div>           
        </section>
    )
}