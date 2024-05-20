import './Modal.css'
export function Modal(){
    return(
        <div className="modal">
            <div className="modal-content">
                <nav>
                    <div className="search-location">
                        <label htmlFor="search-location">

                        </label>
                        <input type="text" name="" id="search-location" />
                    </div>
                    <div className="search-guest">
                        <label htmlFor="search-guest">

                        </label>
                        <input type="text" name="" id="search-guest" />
                    </div>
                </nav>
            </div>
        </div>
    )
}