import { VscClose } from "react-icons/vsc";
import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/announcementContext";
import { ContainerModalEdit } from "./styles";
import { useForm } from "react-hook-form";

const EditCommentModal = () => {

  const {setCommentModal, onSubmitUpdateComment, onDeleteComment} = useContext(AnnouncementContext);

  const {
    register,
    handleSubmit
  } = useForm()

  return (
    <ContainerModalEdit>
      <section>
        <div className="base-modal">

          <div className="mini-header">
            <h2>Excluir anúncio</h2>
            <VscClose onClick={() => {
              setCommentModal(false)
            }}/>
          </div>
          <form onSubmit={handleSubmit(onSubmitUpdateComment)}>
            <label>Editar comentário</label>
            <textarea 
              placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt earum odio omnis voluptates quasi quisquam eaque fugit qui placeat quibusdam tempora quia non ad, illo dolore nihil velit provident. Obcaecati!"
              {...register("comment")}
            />
            <div className="btn-box">
              <button type="button" className="delete" onClick={() => {
                onDeleteComment()
              }}>Excluir</button>
              <button type="submit" className="edit">Salvar</button>
            </div>
          </form>

        </div>
      </section>
    </ContainerModalEdit>
  )
}

export default EditCommentModal;