import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AnnouncementContext } from '../../contexts/announcementContext'
import { ContainerCreateComment } from './styles'

const CreateComment = (userName: any) => {

  const {exampleComment, catchExample} = useContext(AnnouncementContext);

  const {
    register,
    handleSubmit
  } = useForm()

  useEffect(() => {
    const input = document.querySelector("#input") as HTMLInputElement;
    if (input) {
      input.value = exampleComment;
    }
  }, [exampleComment]);

  return (
    <ContainerCreateComment>
      <div className='user-box'>
        <h2>{"UN"} </h2>
        <h3>{"User Name"}</h3>
      </div>
      <div className='input-box'>
        <input type="text"
          id='input'
          placeholder='Carro muito confortável, foi uma ótima experiência de compra...'
          {...register("comment")}
        />
        <button>Comentar</button>
      </div>
      <div className='examples'>
        <span onClick={catchExample} data-valor='Gostei muito!'>Gostei muito!</span>
        <span onClick={catchExample} data-valor='Incrível!'>Incrível!</span>
        <span onClick={catchExample} data-valor='Recomendarei para meus amigos!'>Recomendarei para meus amigos!</span>
      </div>
    </ContainerCreateComment>
  )
}

export default CreateComment