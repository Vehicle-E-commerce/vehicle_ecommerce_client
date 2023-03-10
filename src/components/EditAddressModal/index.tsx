import { useContext } from "react";
import { useForm } from "react-hook-form";
import { VscClose } from "react-icons/vsc";
import { AddressContext } from "../../contexts/Address";
import { AnnouncementContext } from "../../contexts/announcementContext";
import { ContainerEditAddress } from "./styles";
import { IAddress } from "../../interfaces";

const EditAddressModal = () => {
  const { setUserEditAddress, userEditAddress } =
    useContext(AnnouncementContext);

  const { updateAddressUser } = useContext(AddressContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddress>();

  return (
    <ContainerEditAddress>
      <section>
        <div className="base-modal">
          <div className="mini-header">
            <h2>Editar endereço</h2>
            <VscClose
              onClick={() => {
                setUserEditAddress(!userEditAddress);
              }}
            />
          </div>

          <h3>Informações de endereço</h3>

          <form onSubmit={handleSubmit(updateAddressUser)}>
            <div className="input">
              <label>CEP</label>
              <input
                id="cep"
                type="text"
                placeholder="69099.000"
                {...register("cep")}
              />
            </div>
            <div className="dual-input">
              <div className="input">
                <label>Estado</label>
                <input
                  id="state"
                  type="text"
                  placeholder="Amazonas"
                  {...register("state")}
                />
              </div>
              <div className="input">
                <label>Cidade</label>
                <input
                  id="city"
                  type="text"
                  placeholder="Manaus"
                  {...register("city")}
                />
              </div>
            </div>
            <div className="input">
              <label>Rua</label>
              <input
                id="road"
                type="text"
                placeholder="Rua do Amazonas"
                {...register("road")}
              />
            </div>
            <div className="dual-input">
              <div className="input">
                <label>Número</label>
                <input
                  id="number"
                  type="number"
                  placeholder="1029"
                  {...register("number")}
                />
              </div>
              <div className="input">
                <label>Complemento</label>
                <input
                  id="complement"
                  type="text"
                  placeholder="Apart 12"
                  {...register("complement")}
                />
              </div>
            </div>

            <div className="btn-box">
              <button
                className="close"
                onClick={() => {
                  setUserEditAddress(!userEditAddress);
                }}
              >
                Cancelar
              </button>
              <button type="submit" className="edit">
                Salvar alterações
              </button>
            </div>
          </form>
        </div>
      </section>
    </ContainerEditAddress>
  );
};

export default EditAddressModal;
