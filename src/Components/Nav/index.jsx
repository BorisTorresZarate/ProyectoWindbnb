import './Nav.css'
export function Nav({ciudad,pais}) {
    return (
        <div className='conteiner-nav'>
            <div className='conteiner-logo'>
                <figure>
                    <img src="../images/triangulo.png" alt="triangulo" />
                </figure>
                <span>windbnb</span>
            </div>
            <nav className="search-nav">
                <button className="search-button">
                    <span>Helsinki, Finland</span>
                    <span>Id</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="red"
                            className="search-icon">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </span>
                </button>
            </nav>
        </div>

    )
}