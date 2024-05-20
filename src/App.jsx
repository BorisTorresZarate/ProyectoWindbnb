import { useEffect } from "react"
import { useState } from "react"
import { CardList } from "./Components/Card"
import { Nav } from "./Components/Nav"
import { Modal } from "./Components/Modal"


function App() {
  const [data, setData] = useState()
  const [filteredData, setFilteredData] = useState()
  async function getData() {
    const rs = await fetch('./stays.json')
    const rsjson = await rs.json()
    const filterData = rsjson.map(datos => {
      return {
        id: datos.id,
        ciudad: datos.city,
        pais: datos.country,
        superAnfitrion: datos.superhost,
        titulo: datos.title,
        clasificacion: datos.rating,
        maxInvitados: datos.maxGuests,
        tipo: datos.type,
        camas: datos.beds,
        foto: datos.photo,
      }
    })
    setData(filterData)
    setFilteredData(filterData)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="conteiner">
        <Modal />
        <Nav />
        <CardList data={data} filteredData={filteredData} setFilteredData={setFilteredData} />
        <div className="modal">

        </div>
      </div>
    </>
  )
}

export default App
