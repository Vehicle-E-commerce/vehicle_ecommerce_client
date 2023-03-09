import { ContainerModalDelete } from "./styles";
import { VscClose } from "react-icons/vsc";
import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/announcementContext";

const DeleteAnnouncementModal = () => {

  const { setDeleteAdModal, onDeleteAd } = useContext(AnnouncementContext);

  return (
    <ContainerModalDelete>
      <section>
        <div className="base-modal">

          <div className="mini-header">
            <h2>Excluir anúncio</h2>
            <VscClose onClick={() => {
              setDeleteAdModal(false)
            }}/>
          </div>

          <h2>Tem certeza que deseja remover este anúncio?</h2>

          <p>Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.</p>

          <div className="btn-box">
            <button id="cancel" onClick={() => {
              setDeleteAdModal(false)
            }}>Cancelar</button>
            <button id="delete" onClick={() => {
              onDeleteAd()
            }}>Sim, excluir anúncio</button>
          </div>

        </div>
      </section>
    </ContainerModalDelete>
  )
}

export default DeleteAnnouncementModal