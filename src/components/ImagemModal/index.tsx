import { ContainerModalImagem } from "./styles";
import { VscClose } from "react-icons/vsc";
import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/announcementContext";

const ImagemModal = () => {

  const {imageToModal, setImageModal, imageModal} = useContext(AnnouncementContext)

  return (
    <ContainerModalImagem>
      <section>
        <div className="base-modal">

          <div className="mini-header">
            <h2>Imagem do veículo</h2>
            <VscClose onClick={() => {
              setImageModal(!imageModal)
            }}/>
          </div>

          <figure>
            <img src={imageToModal} alt={imageToModal} />
          </figure>

        </div>
      </section>
    </ContainerModalImagem>
  )
}

export default ImagemModal