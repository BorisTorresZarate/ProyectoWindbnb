import { CardItem } from "./CardItem.jsx";
import './CardList.css'

export function CardList({data,filteredData,setFilteredData}) {
    return(
        <ul className="card-list">
            {filteredData &&
                filteredData.map(data =>
                    <CardItem key={data.id} data={data} />
                )}
        </ul>
    )
}