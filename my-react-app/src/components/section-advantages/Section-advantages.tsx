import '../../assets/styles/Section_advantages.css'

export const Section_advantages = () => {
    return (
        <section className="section-advantages">
            <h2 className="section-advantages__slogan">As good as it sounds</h2>
            <div className="advantages">
                <div className="advantages__advantage1">
                    <img src="./public/images/volume.svg" alt="" className="advantages__img"/>
                    <p className="advantage__name">100 royalty free</p>
                    <p className="advantage__text">Use sounds for anything. They are cleared for commercial use.</p>
                </div>
                <div className="advantages__advantage2">
                    <img src="./public/images/unlock.svg" alt="" className="advantages__img"/>
                    <p className="advantage__name">No commitments</p>
                    <p className="advantage__text">Cancel your subscription at any time, no questions asked.</p>
                </div>
                <div className="advantages__advantage3">
                    <img src="./public/images/download.svg" alt="" className="advantages__img"/>
                    <p className="advantage__name">Yours forever</p>
                    <p className="advantage__text">Keep everything download. <br/>Even if you cancel.</p>
                </div>
                <div className="advantages__advantage4">
                    <img src="./public/images/play.svg" alt="" className="advantages__img"/>
                    <p className="advantage__name">Individual samples</p>
                    <p className="advantage__text">Preview download individual samples, not just full packs.</p>
                </div>
            </div>
        </section>
    )
}