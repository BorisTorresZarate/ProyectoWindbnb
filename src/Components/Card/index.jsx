import { CardItem } from "./CardItem.jsx";
import './CardList.css'

export function CardList({ data, filteredData, setFilteredData }) {
    return (
        <>
            <div className="titulo-card">
                <h1>Stays in Finland</h1>
                <p>12+Stays</p>
            </div>
            <ul className="card-list">
                {filteredData &&
                    filteredData.map(data =>
                        <CardItem key={data.id} data={data} />
                    )}
            </ul>
        </>
    )
}