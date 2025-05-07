export const Modal = () => {
    return (
        <div id="myModal" className="modal">
            <div className="modal__content">
                <span className="modal__close">&times;</span>
                <h2 className="modal__header">Форма</h2>
                <form id="myForm">
                    <label htmlFor="name" className="form__label">Имя:</label><br/>
                    <input type="text" id="name" name="name" className="form__input"/><br/><br/>
                    <label htmlFor="email" className="form__label">Email:</label><br/>
                    <input type="email" id="email" name="email" className="form__input"/><br/><br/>
                    <div className="form__buttons">
                        <button type="button" id="okButton" className="form__button">ОК</button>
                        <button type="button" id="cancelButton" className="form__button">Отмена</button>
                    </div>
                </form>
            </div>
          </div>
    )
}