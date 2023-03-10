import { ContainerModalEdit } from "./styles";
import { VscClose } from "react-icons/vsc"
import { useContext, useEffect, useState } from "react";
import { AnnouncementContext } from "../../contexts/announcementContext";
import { IImages } from "../../contexts/announcementContext";
import { Input } from "../Input";
import { useForm } from "react-hook-form";

interface editAdverts {
  type: string,
  title: string,
  year: number,
  mileage: number;
  price: number;
  bio: string;
  is_motorbike: boolean;
  cover_image: string;
  images: IImages[]

}
const EditAnnouncementModal = () => {
  const { register, handleSubmit, formState: {errors}} = useForm();
  const { setUpdateAdModal, onEditAd, vehicleSpecific, updateAdModal, setDeleteAdModal, deleteAdModal} = useContext(AnnouncementContext);
  const { 
    title, 
    year, 
    mileage, 
    price, 
    bio,
    is_motorbike, 
    cover_image, 
    images, 
  } = vehicleSpecific!
  let [dataEdit, setDataEdit] = useState({ 
    title, 
    year, 
    mileage, 
    price, 
    bio,
    is_motorbike, 
    cover_image, 
    images, 
  } )
  const [motorBike, setMotorBike] = useState(vehicleSpecific?.is_motorbike)

  const selectButton = (e:any)=>{
    e.preventDefault()
    const btnsCont = document.querySelector('.is_motorbike')
    const btns = [...btnsCont!.children]

    btns.forEach(el => {
      el.classList.remove("btnSelected")
      if(el === e.target){
        e.target.classList.add("btnSelected")
      }
    })
    if(e.target == document.querySelector('.btn-car')){
      setDataEdit({
        ...dataEdit,
        ["is_motorbike"]: false
      })
    }else{
      setDataEdit({
        ...dataEdit,
        ["is_motorbike"]: true
      })
    }
    console.log(dataEdit)
  }

  const onchangeValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name, value} = e.target

    setDataEdit({
      ...dataEdit,
      [name]: value

    });
  }
  const onSubmit = (e: any) => {
    e.preventDefault()
    console.log(dataEdit)
  }
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
            <button type="button" className="btnSelected">Venda</button>
            <button type="button" className="inative">Leilão</button>
          </div>

          <h3>Informações do veículo</h3>

          <form >
            <div className="title-box">
              <label>Título</label>
              <Input 
                type="text"
                name="title" 
                placeholder="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200"
                value={dataEdit.title}
                onCharge={(e) => onchangeValue(e)}
                />
            </div>
            <div className="year-km-price">
              <div className="responsive-box">
                <div className="box">
                  <label>Ano</label>
                  <input 
                    type="number"
                    name="year"
                    value={dataEdit.year}
                    onChange={(e) => onchangeValue(e)}
                  />
                </div>
                <div className="box">
                  <label>Quilometragem</label>
                  <input 
                    type="number" 
                    name="mileage"
                    value={dataEdit.mileage}
                    onChange={(e) => onchangeValue(e)}
                  />
                </div>
              </div>
              <div className="box">
                <label>Preço</label>
                <input 
                  type="number" 
                  name="price"
                  value={dataEdit.price}
                  onChange={(e) => onchangeValue(e)}
                />
              </div>
            </div>
            <div className="description-box">
              <label>Descrição</label>
              <textarea
                name="bio"
                value={dataEdit.bio}
                onChange={(e) => onchangeValue(e)}  
              />
            </div>
            <div className="btn-box">
              <label>Tipo de veículo</label>
              <div className="is_motorbike">
                {}
                <button 
                  type="button" 
                  className={`btn-car ${dataEdit.is_motorbike ? '' : 'btnSelected'}`}  
                  onClick={(e)=> {
                    setMotorBike(false);
                    selectButton(e)
                  }}
                  >Carro</button>
                <button 
                  type="button" 
                  className={`btn-moto ${dataEdit.is_motorbike ? 'btnSelected' : ''}`} 
                  onClick={(e)=> {
                    setMotorBike(true); 
                    selectButton(e) 
                  }}
                  >Moto</button>
              </div>
            </div>
            <div className="btn-box">
              <label>Publicado</label>
              <div>
                <button type="button" className="inative">Sim</button>
                <button type="button" className="inative">Não</button>
              </div>
            </div>
            <div className="img-box">
              <div>
                <label>Imagem da capa</label>
                <input 
                  type="text"
                  name="cover_image"
                  value={dataEdit.cover_image}
                  onChange={(e) => onchangeValue(e)}  
             
                />
              </div>
              <div>
                {dataEdit.images.map((img, i)=>{
                  return(<>
                    <label>{i+1}° Imagem da galeria</label>
                    <input 
                      type="text" 
                      name={`img-${i}`}
                      value={img.image}
                      onChange={(e) => onchangeValue(e)}
                    />
                  </>)
                })}
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
              <button type="submit" className="edit-btn" onClick={(e)=>onSubmit(e)}
                
              >Salvar alterações</button>
            </div>
          </form>
        </div>
      </section>
    </ContainerModalEdit>
  )
}

export default EditAnnouncementModal;