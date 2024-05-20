import './CardItem.css'

export function CardItem({ data: { id, ciudad, pais, superAnfitrion, titulo, clasificacion, maxInvitados, tipo, camas, foto } }) {
    return (
        <li className='card-item' id={id}>
            <figure>
                <img src={foto} alt="" />
            </figure>
            <div className='title-card-item'>
                <h4>{/* {superAnfitrion} */}Super Host</h4>
                <p>{tipo}</p>
                <p>{camas}beds</p>
                <h6><img src="../images/estrella.png" alt="estrella" />{clasificacion}</h6>
            </div>
            <h3>{titulo}</h3>
        </li>
    )
}