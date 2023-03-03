import { ContainerModalDelete } from "./styles";
import { VscClose } from "react-icons/vsc";

const DeleteAnnouncementModal = () => {
  return (
    <ContainerModalDelete>
      <section>
        <div className="base-modal">

          <div className="mini-header">
            <h2>Excluir anúncio</h2>
            <VscClose/>
          </div>

          <h2>Tem certeza que deseja remover este anúncio?</h2>

          <p>Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.</p>

          <div className="btn-box">
            <button id="cancel">Cancelar</button>
            <button id="delete">Sim, excluir anúncio</button>
          </div>

        </div>
      </section>
    </ContainerModalDelete>
  )
}

export default DeleteAnnouncementModal