import { useState } from 'react';
import './Modal.css'
export function Modal({ setIsOpen, data, setFilteredData }) {
    const closeModal = (e) => {
        if (e.target.id === 'modal') {
            setIsOpen(false)
        }
    }
    const [selectedLocation, setSelectedLocation] = useState('');
    const [guests, setGuests] = useState(1);

    function filtroDatos() {
        const rs = data.filter(dato => {
            const locationMatch = selectedLocation === '' || dato.ciudad.toLowerCase() === selectedLocation.toLowerCase();
            const guestsMatch = dato.maxInvitados >= guests;
            return locationMatch && guestsMatch;
        });
        
        setFilteredData(rs);
    }
    return (
        <div id='modal' className="modal" onClick={closeModal} >
            <div className="modal-content">
                <nav>
                    <div className="search-location">
                        <label htmlFor="search-location">
                            <span>Location</span>
                        </label>
                        <select className='search-location' id="search-location" value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                            <option value=""> Locations</option>
                            <option value="Helsinki">Helsinki</option>
                            <option value="Turku">Turku</option>
                            <option value="Vaasa">Vaasa</option>
                            <option value="Oulu">Oulu</option>
                        </select>
                    </div>
                    <div className="search-guest">
                        <label htmlFor="search-guest">
                            <span>Guest</span>
                        </label>
                        <input type="number" name="" id="search-guest" placeholder='Add Guests' value={guests} onChange={(e) => setGuests(e.target.value)} max="10" min="1" />
                    </div>
                    <button className='filter-button' onClick={filtroDatos}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor" className="search-icon">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        search
                    </button>
                </nav>
            </div>
        </div>
    )
}