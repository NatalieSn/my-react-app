export const Footer = () => {
    return (
        <footer className="footer">
        <div className="copyright">
            <img src="img/header/logo.svg" alt="" className="copyright__logo" />
            <p className="copyright__text">2021 Splice.com All Rights Reserved</p>
        </div>
        <div className="links">
            <ul className="links__column">
                <h2 className="column__h">STUDIO</h2>
                <li className="column__link">Features</li>
                <li className="column__link">About Splice Studio</li>
                <li className="column__link">Managing Your Production Library</li>
                <li className="column__link">Collaborating with Baewatch</li>
            </ul>
        </div>
        <div className="links">
            <ul className="links__column">
                <h2 className="column__h">PLUGINS</h2>
                <li className="column__link">Top VSTs</li>
                <li className="column__link">Serum</li>
                <li className="column__link">Rent to Own</li>
                <li className="column__link">Free Plugins</li>
                <li className="column__link">Top Manufacturers</li>
            </ul>
        </div>
        <div className="links">
            <ul className="links__column">
                <h2 className="column__h">COMMUNITY</h2>
                <li className="column__link">Ableton Live Projects</li>
                <li className="column__link">FL Studio Projects</li>
                <li className="column__link">Logic Pro X Projects</li>
                <li className="column__link">Garageband Projects</li>
                <li className="column__link">Remix Contests</li>
                <li className="column__link">Tiestos Secrets</li>
            </ul>
        </div>
        <div className="links">
            <ul className="links__column">
                <h2 className="column__h">BEATMAKER</h2>
                <li className="column__link">Create Your Own Beat</li>
                <li className="column__link">Wakapella</li>
                <li className="column__link">Just Blaze</li>
            </ul>
        </div>
        <div className="links">
            <ul className="links__column">
                <h2 className="column__h">SOUNDS</h2>
                <li className="column__link">Features</li>
                <li className="column__link">Catalog</li>
                <li className="column__link">How Jauz Uses Sounds</li>
                <li className="column__link">deadmau5s Chimaera</li>
                <li className="column__link">KSHMR Vol. 2</li>
            </ul>
        </div>
        <div className="links">
            <ul className="links__column">
                <h2 className="column__h">BLOG</h2>
                <li className="column__link">Latest Posts</li>
                <li className="column__link">Using Soundtoys Decapitator</li>
                <li className="column__link">Mastering 101</li>
                <li className="column__link">Producing Future Beats</li>
                <li className="column__link">Belonging at Splice</li>
            </ul>
        </div>
        <div className="socials">
            <h2 className="column__h">FIND US ON SOCIAL</h2>
            <div className="socials_imgs">
                <img src="img/facebook.svg" alt="" className="socials__item"/>
                <img src="img/twitter.svg" alt="" className="socials__item"/>
                <img src="img/instagram.svg" alt="" className="socials__item"/>
                <img src="img/YouTube.svg" alt="" className="socials__item"/>
            </div>
            <ul className="socials__links">
                <li className="socials__link">Terms Of Use</li>
                <li className="socials__link">Privacy Policy</li>
                <li className="socials__link">Jobs</li>
            </ul>
            <ul className="socials__links">
                <li className="socials__link">Contact</li>
                <li className="socials__link">Help</li>
            </ul>
        </div>
    </footer>
    )
}