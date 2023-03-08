import { VscClose } from "react-icons/vsc"
import { ContainerEditAddress } from "./styles"

const EditAddressModal = () => {
  return (
    <ContainerEditAddress>
      <section>
        <div className="base-modal">

          <div className="mini-header">
            <h2>Editar endereço</h2>
            <VscClose/>
          </div>

          <h3>Informações de endereço</h3>

          <form>
            <div className="input">
              <label>CEP</label>
              <input 
                type="text" 
                placeholder="69099.000"
              />
            </div>
            <div className="dual-input">
              <div className="input">
                <label>Estado</label>
                <input 
                  type="text" 
                  placeholder="Amazonas"
                />
              </div>
              <div className="input">
                <label>Cidade</label>
                <input 
                  type="text" 
                  placeholder="Manaus"
                />
              </div>
            </div>
            <div className="input">
              <label>Rua</label>
              <input 
                type="text" 
                placeholder="Rua do Amazonas"
              />
            </div>
            <div className="dual-input">
              <div className="input">
                <label>Número</label>
                <input 
                  type="number" 
                  placeholder="1029"
                />
              </div>
              <div className="input">
                <label>Complemento</label>
                <input 
                  type="text" 
                  placeholder="Apart 12"
                />
              </div>
            </div>

            <div className="btn-box">
              <button className="close">Cancelar</button>
              <button className="edit">Salvar alterações</button>
            </div>
          </form>
        </div>
      </section>
    </ContainerEditAddress>
  )
}

export default EditAddressModal;