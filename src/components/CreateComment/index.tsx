import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AnnouncementContext } from '../../contexts/announcementContext'
import { LoginContext } from '../../contexts/Login'
import { ContainerCreateComment } from './styles'

const CreateComment = (userName: any) => {

  const {exampleComment, catchExample, onSubmitCreateComment} = useContext(AnnouncementContext);
  const { user } = useContext(LoginContext);

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
    <ContainerCreateComment onSubmit={handleSubmit(onSubmitCreateComment)}>
      {user && 
        <div className='user-box'>
          <h2>{user?.name.substring(0,1).toUpperCase()}</h2>
          <h3>{user?.name}</h3>
        </div>
      }
      <div className='input-box'>
        <input type="text"
          id='input'
          placeholder='Carro muito confortável, foi uma ótima experiência de compra...'
          {...register("comment")}
        />
        <button type='submit' >Comentar</button>
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