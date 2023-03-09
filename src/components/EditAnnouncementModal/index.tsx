import { ContainerModalEdit } from "./styles";
import { VscClose } from "react-icons/vsc"
import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/announcementContext";

const EditAnnouncementModal = () => {

  const { setUpdateAdModal, updateAdModal, setDeleteAdModal, deleteAdModal} = useContext(AnnouncementContext);

  return (
    <ContainerModalEdit>
      <section>
        <div className="base-modal">

          <div className="mini-header">
            <h2>Editar anúncio</h2>
            <VscClose onClick={() => {
              setUpdateAdModal(!updateAdModal)
            }}/>
          </div>

          <h3>Tipo de anúncio</h3>
          <div className="sale-auction">
            <button type="button" className="btn-1">Venda</button>
            <button type="button" className="btn-2">Leilão</button>
          </div>

          <h3>Informações do veículo</h3>

          <form >
            <div className="title-box">
              <label>Título</label>
              <input 
                type="text" 
                placeholder="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200"
              />
            </div>
            <div className="year-km-price">
              <div className="responsive-box">
                <div className="box">
                  <label>Ano</label>
                  <input 
                    type="number"
                    placeholder="2018" 
                  />
                </div>
                <div className="box">
                  <label>Quilometragem</label>
                  <input 
                    type="number" 
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="box">
                <label>Preço</label>
                <input 
                  type="number" 
                  placeholder="50.000,00"
                />
              </div>
            </div>
            <div className="description-box">
              <label>Descrição</label>
              <textarea
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              />
            </div>
            <div className="btn-box">
              <label>Tipo de veículo</label>
              <div>
                <button type="button" className="btn-1">Carro</button>
                <button type="button" className="btn-2">Moto</button>
              </div>
            </div>
            <div className="btn-box">
              <label>Publicado</label>
              <div>
                <button type="button" className="btn-2">Sim</button>
                <button type="button" className="btn-1">Não</button>
              </div>
            </div>
            <div className="img-box">
              <div>
                <label>Imagem da capa</label>
                <input 
                  type="text" 
                  placeholder="https://image.com"
                />
              </div>
              <div>
                <label>1° Imagem da galeria</label>
                <input 
                  type="text" 
                  placeholder="https://image.com"
                />
              </div>
              <div>
                <label>2° Imagem da galeria</label>
                <input 
                  type="text" 
                  placeholder="https://image.com"
                />
              </div>
              <button type="button">
                Adicionar campo para imagem da galeria
              </button>
            </div>
            <div className="edit-or-delete">
              <button type="button" className="delete-btn" onClick={() => {
                setUpdateAdModal(false)
                setDeleteAdModal(!deleteAdModal)
              }}>Excluir anúncio</button>
              <button type="submit" className="edit-btn">Salvar alterações</button>
            </div>
          </form>
        </div>
      </section>
    </ContainerModalEdit>
  )
}

export default EditAnnouncementModal;