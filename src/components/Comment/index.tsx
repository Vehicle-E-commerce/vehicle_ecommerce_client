import { useContext } from "react"
import { AnnouncementContext, ICommentData } from "../../contexts/announcementContext"
import { ContainerComment } from "./styles"

const Comment = ({userName, date, comment}: ICommentData) => {

  const {} = useContext(AnnouncementContext);

  return (
    <ContainerComment>
      <div className="user-date">
        <h2>{userName.split(" ")[0].substring(0,1)}</h2>
        <h3>{userName}</h3>
        <span></span>
        <p>{`${date.toString().substr(8,2)}/${date.toString().substr(5,2)}/${date.toString().substr(0,4)}`}</p>
      </div>
      <div className="comment">
        {comment}
      </div>
    </ContainerComment>
  )
}

export default Comment