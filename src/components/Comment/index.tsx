import { useContext } from "react"
import { AnnouncementContext, ICommentData } from "../../contexts/announcementContext"
import { ContainerComment } from "./styles"
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { LoginContext } from "../../contexts/Login";

const Comment = ({userName, date, comment, userId, id}: ICommentData) => {

  const {setCommentModal, commentModal, setCommentSelect} = useContext(AnnouncementContext);
  const { user } = useContext(LoginContext);

  return (
    <ContainerComment>
      <div className="user-date">
        <h2>{userName.split(" ")[0].substring(0,1)}</h2>
        <h3>{userName}</h3>
        <span></span>
        <p>{`${date.toString().substr(8,2)}/${date.toString().substr(5,2)}/${date.toString().substr(0,4)}`}</p>
        {userId === user?.id && 
          <BiDotsVerticalRounded 
            onClick={() => {
              setCommentSelect(id)
              setCommentModal(!commentModal)
            }}
          /> 
        }
      </div>
      <div className="comment">
        {comment}
      </div>
    </ContainerComment>
  )
}

export default Comment