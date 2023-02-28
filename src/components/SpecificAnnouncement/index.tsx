import carImg from '../../assets/IMG/carModel2.png'
import { ContainerSpecificAnnouncement } from './styles'

const SpecificAnnouncement = () => {
  const number = [1,2,3,4,5,6]

  return (
    <ContainerSpecificAnnouncement>
      <section className='data-page'>
        <div className='main-aside'>
          <main>
            <figure>
              <img src={carImg} alt="imagem do carro" />
            </figure>
            <article className='data-car'>
              <h2>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h2>
              <div className='date-km-value'>
                <div className='date-km'>
                  <span>2013</span>
                  <span>0 KM</span>
                </div>
                <span className='value'>R$ 00.000,00</span>
              </div>
              <button>Comprar</button>
            </article>
            <article className='description-box'>
              <h2>Descrição</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, saepe repellendus. Natus alias a nostrum adipisci aut est. Repellendus dolore esse eveniet eos cupiditate tenetur quos ratione expedita quas incidunt?</p>
            </article>
          </main>
          <aside>
            <div className='carImg-box'>
              <label>Fotos</label>
              <ul>
                {number.map((el) => (
                  <figure>
                    <img src={carImg} />
                  </figure>
                ))}
              </ul>
            </div>
            <div className='adversiter-box'>
              <h2>SL</h2>
              <h3>Samuel Leão</h3>
              <p>Lorem ipsum dolorores sim mistet aldo sir sit amet consectetur adipisicing elit. Esse, praesentiuma! Cumque dolorem.</p>
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