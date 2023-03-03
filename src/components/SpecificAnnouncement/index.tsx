import { margin } from 'polished'
import { useContext } from 'react'
import carImg from '../../assets/IMG/carModel2.png'
import { AnnouncementContext } from '../../contexts/announcementContext'
import Comment from '../Comment'
import CreateComment from '../CreateComment'
import { ContainerComment, ContainerSpecificAnnouncement } from './styles'

const SpecificAnnouncement = () => {

  const {vehicleSpecific, setImageToModal, imageModal, setImageModal, commentsAd} = useContext(AnnouncementContext);

  return (
    <ContainerSpecificAnnouncement>
      <section className='data-page'>
        <div className='container-main'>
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
                    <figure key={el.id} onClick={()=> {
                      setImageToModal(el.image)
                      setImageModal(!imageModal)
                    }}>
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
          <ContainerComment>
            <div className='comment-list'>
              <label>Comentários</label>
              <ul>
                {
                  commentsAd.length > 0 
                  ?
                  commentsAd?.map((comment) => (
                    <Comment 
                      userName={comment.user.name}
                      date={comment.created_at}
                      comment={comment.comment}
                    />
                  ))
                  :
                  <div className='no-comments'>
                    <h1>Sem comentários</h1>
                  </div>
                }
              </ul>
            </div>
            <div className='create-comment'>
              <CreateComment/>
            </div>
          </ContainerComment>
        </div>
      </section>
    </ContainerSpecificAnnouncement>
  )
}

export default SpecificAnnouncement