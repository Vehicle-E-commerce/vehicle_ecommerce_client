import { useContext } from 'react'
import carImg from '../../assets/IMG/carModel2.png'
import { AnnouncementContext } from '../../contexts/announcementContext'
import { ContainerSpecificAnnouncement } from './styles'

const SpecificAnnouncement = () => {

  const {vehicleSpecific} = useContext(AnnouncementContext);

  return (
    <ContainerSpecificAnnouncement>
      <section className='data-page'>
        <div className='main-aside'>
          <main>
            <figure>
              <img src={vehicleSpecific?.cover_image} alt={vehicleSpecific?.cover_image} />
            </figure>
            <article className='data-car'>
              <h2>{vehicleSpecific?.title}</h2>
              <div className='date-km-value'>
                <div className='date-km'>
                  <span>{vehicleSpecific?.year}</span>
                  <span>{vehicleSpecific?.mileage} KM</span>
                </div>
                <span className='value'>R$ {vehicleSpecific?.price},00</span>
              </div>
              <button>Comprar</button>
            </article>
            <article className='description-box'>
              <h2>Descrição</h2>
              <p>{vehicleSpecific?.bio}</p>
            </article>
          </main>
          <aside>
            <div className='carImg-box'>
              <label>Fotos</label>
              <ul>
                {vehicleSpecific?.images.map((el) => (
                  <figure key={el.id}>
                    <img src={el.image} />
                  </figure>
                ))}
              </ul>
            </div>
            <div className='adversiter-box'>
              <h2>
                {vehicleSpecific?.user.name.split(" ")[0].substring(0,1).toLocaleUpperCase()}
                {vehicleSpecific?.user.name.split(" ")[1] && 
                  (
                    vehicleSpecific.user.name.split(" ")[1].length > 3 ?
                    vehicleSpecific.user.name.split(" ")[1].substring(0,1).toLocaleUpperCase() :
                    (vehicleSpecific.user.name.split(" ")[2] && 
                      vehicleSpecific.user.name.split(" ")[2].substring(0,1).toLocaleUpperCase()
                    )
                  )
                }
              </h2>
              <h3>
                {vehicleSpecific?.user.name.split(" ")[0]}
                {vehicleSpecific?.user.name.split(" ")[1]}
              </h3>
              <p>{vehicleSpecific?.user.bio}</p>
              <button>Ver todos anúncios</button>
            </div>
          </aside>
        </div>
        <article className='comments-list'>
          <h1>COMENTÁRIOS</h1>
        </article>
      </section>
    </ContainerSpecificAnnouncement>
  )
}

export default SpecificAnnouncement