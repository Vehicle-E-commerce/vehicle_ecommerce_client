import { ContainerModalEdit } from './styles';
import { VscClose } from "react-icons/vsc"
import { useContext } from 'react';
import { AnnouncementContext } from '../../contexts/announcementContext';
import { LoginContext } from '../../contexts/Login';
import { useForm } from 'react-hook-form';

const EditUserModal = () => {

  const { userEditModal, setUserEditModal } = useContext(AnnouncementContext);
  const { onSubmitUpdateUser } = useContext(LoginContext);

  const {
    register,
    handleSubmit
  } = useForm()

  return (
    <ContainerModalEdit>
      <section>
        <div className='base-modal'>

          <div className="mini-header">
            <h2>Editar perfil</h2>
            <VscClose onClick={() => {
              setUserEditModal(!userEditModal)
            }}/>
          </div>

          <h3>Informações pessoais</h3> 

          <form onSubmit={handleSubmit(onSubmitUpdateUser)}>
            <div>
              <label>Nome</label>
              <input 
                type="text" 
                placeholder='Samuel Leão Silva'
                {...register("name")}
              />
            </div>
            <div>
              <label>Email</label>
              <input 
                type="email" 
                placeholder='samuel@email.com'
                {...register("email")}
              />
            </div>
            <div>
              <label>CPF</label>
              <input 
                type="number" 
                placeholder='123.456.789-10'
                {...register("cpf")}
              />
            </div>
            <div>
              <label>Celular</label>
              <input 
                type="number" 
                placeholder='(92) 90909-9092'
                {...register("telephone")}
              />
            </div>
            <div>
              <label>Data de nascimento</label>
              <input 
                type="date" 
                placeholder='09/12/19'
                {...register("birth_date")}
              />
            </div>
            <div>
              <label>Descrição</label>
              <textarea 
                placeholder='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
                {...register("bio")}
              />
            </div>

            <div className="btn-box">
              <button className='close' onClick={() => {
                
              }}>Cancelar</button>
              <button type='submit' className='edit'>Salvar alterações</button>
            </div>
            
          </form>


        </div>
      </section>
    </ContainerModalEdit>
  )
}

export default EditUserModal;