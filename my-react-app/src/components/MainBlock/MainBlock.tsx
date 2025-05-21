import '../../assets/styles/MainBlock.css'
import '../../assets/styles/Container.css'

export const MainBlock = () => {
    return (
        <section className="main-block">

            <div className="main-block__container">
                <img src="./public/images/main-block/slogan.png" alt="" className="container__slogan-img"/>
                <p className="container__text">Royalty-free sounds. Industry-leading software.<br/>Endless inspiration. Start
                    creating
                    with Splice.</p>
                <button className="container__button">SIGN UP</button>
            </div>
            <div className="image-container">
                <img src="./public/images/main-block/side.png" alt="" className="main-block__img"/>
            </div>
        </section>
    )
}