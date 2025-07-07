import '../../assets/styles/SectionAdvantages.css';

export const SectionAdvantages = () => {
    return (
        <section className="section-advantages" id="advantages">
            <h2 className="section-advantages__slogan">Ваше путешествие мечты начнется здесь</h2>
            <div className="advantages">
                <div className="advantages__advantage1">
                    <img src="./public/images/eco.png" alt="EcoTours" className="advantages__img" />
                    <p className="advantage__name">Экологичные туры</p>
                    <p className="advantage__text">Наши туры созданы с заботой об океане, поддерживая сохранение морской
                        природы и устойчивые практики.</p>
                </div>
                <div className="advantages__advantage2">
                    <img src="./public/images/certificate.png" alt="Certificate" className="advantages__img" />
                    <p className="advantage__name">Профессиональные гиды</p>
                    <p className="advantage__text">Погружайтесь под руководством сертифицированных экспертов, обеспечивающих
                        вашу безопасность и комфорт.</p>
                </div>
                <div className="advantages__advantage3">
                    <img src="./public/images/bron.png" alt="Bron" className="advantages__img" />
                    <p className="advantage__name">Гибкое бронирование</p>
                    <p className="advantage__text">Переносите или отменяйте бронирование без лишних вопросов — ваше удобство
                        в приоритете!</p>
                </div>
                <div className="advantages__advantage4">
                    <img src="./public/images/group.png" alt="Group" className="advantages__img" />
                    <p className="advantage__name">Камерные группы</p>
                    <p className="advantage__text">Наслаждайтесь эксклюзивными турами в небольших группах для
                        индивидуального и незабываемого опыта.</p>
                </div>
            </div>
        </section>
    );
};
