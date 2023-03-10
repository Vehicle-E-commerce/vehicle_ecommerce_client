import { createContext, useContext, useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  IAnnouncement,
  IAnnouncementContext,
  IAnnouncementProviders,
  IComment,
} from "../interfaces";
import api from "../services/server";
import { LoginContext } from "./Login";

export const AnnouncementContext = createContext<IAnnouncementContext>(
  {} as IAnnouncementContext
);
 
function AnnouncementProvider({ children }: IAnnouncementProviders) {
  const { user } = useContext(LoginContext);

  const navigate = useNavigate();

  const [announcementList, setAnnouncementList] = useState<IAnnouncement[]>([]);
  const [carList, setCarList] = useState<IAnnouncement[]>([]);
  const [motorbikeList, setMotorbikeList] = useState<IAnnouncement[]>([]);
  const [commentsAd, setCommentsAd] = useState<IComment[]>([]);
  const [vehicleSpecific, setVehicleSpecific] = useState<IAnnouncement | null>(
    null
  );
  const [imageToModal, setImageToModal] = useState("");
  const [imageModal, setImageModal] = useState(false);
  const [userEditModal, setUserEditModal] = useState(false);
  const [userEditAddress, setUserEditAddress] = useState(false);
  const [updateAdModal, setUpdateAdModal] = useState(false);
  const [deleteAdModal, setDeleteAdModal] = useState(false);
  const [exampleComment, setExampleComment] = useState("");
  const [isCreateAnnou, setIsCreateAnnou] = useState(false);
  const [commentSelect, setCommentSelect] = useState('')
  const [commentModal, setCommentModal] = useState(false)
  const [carListUser, setCarListUser] = useState<IAnnouncement[]>([])
  const [motorBikeListUser, setMotorBikeListUser] = useState<IAnnouncement[]>([])
  const [carListRandomUser, setCarListRandomUser] = useState<IAnnouncement[]>([])
  const [motorBikeListRandomUser, setMotorBikeListRandomUser] = useState<IAnnouncement[]>([])
  const [newComment, setNewComment] = useState(false)

  document.onkeydown = function (e) {
    if (e.key === "Escape") {
      setImageModal(false);
      setUserEditAddress(false);
      setUserEditModal(false);
      setUpdateAdModal(false);
      setCommentModal(false);
    }
  };
  
  useEffect(() => {
    if(user) {
      setCarListUser(carList.filter((car) => car.user.id === user.id))
      setMotorBikeListUser(motorbikeList.filter((motor) => motor.user.id === user.id))
    }
    if(vehicleSpecific) {
      setCarListRandomUser(carList.filter((car) => car.user.id === vehicleSpecific.user.id))
      setMotorBikeListRandomUser(motorbikeList.filter((motor) => motor.user.id === vehicleSpecific.user.id))
    }
  }, [user, vehicleSpecific])

  const catchExample = (event: any) => {
    const example = event.target.getAttribute("data-valor");
    if (example) {
      setExampleComment(example);
    }
  };

  const onSubmitCreateComment: SubmitHandler<FieldValues> = (data) => {
    if (!user) {
      navigate("login", { replace: true });
      return;
    }
    api.defaults.headers.Authorization = `bearer ${localStorage.getItem(
      "@token"
    )}`;
    api
      .post(`announcement/${vehicleSpecific?.id}/comment/`, data)
      .then((res) => {
        toast.success("Comentário adicionado!", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
        setNewComment(!newComment)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const onEditAd: SubmitHandler<FieldValues> = (data) => {
    api.defaults.headers.Authorization = `bearer ${localStorage.getItem("@token")}`
    api.patch(`announcements/${vehicleSpecific!.id}`)
      .then((res) => {
  
        toast.success("Anúncio editado!", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const onSubmitUpdateComment: SubmitHandler<FieldValues> = (data) => {

    api.defaults.headers.Authorization = `bearer ${localStorage.getItem("@token")}`
    console.log(commentSelect)
    api.patch(`announcement/comment/${commentSelect}`, data)
      .then((res) => {
        toast.success("Comentário atualizado!", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
        setCommentModal(!commentModal)
        setNewComment(!newComment)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const onDeleteComment = () => {
    api.defaults.headers.Authorization = `bearer ${localStorage.getItem("@token")}`
    api.delete(`announcement/comment/${commentSelect}`)
      .then(() => {
        setCommentModal(!commentModal)
        toast.success("Comentário apagado!", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
        setNewComment(!newComment)
      })
  }
  const onDeleteAd = () => {
    api.defaults.headers.Authorization = `bearer ${localStorage.getItem(
      "@token"
    )}`;
    api
      .delete(`announcements/${vehicleSpecific?.id}`)
      .then((res) => {
        setDeleteAdModal(false);
        toast.success("Anúncio apagado!", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const commentsByAnnouncement = async (
    id_announcement: string | undefined
  ): Promise<any> => {
    const res = await api.get(`announcement/${id_announcement}/comments/`);
    return res.data;
  };

  useEffect(() => {
    commentsByAnnouncement(vehicleSpecific?.id)
      .then((comments) => {
        setCommentsAd(comments);
      })
      .catch((err) => console.log(err));
  }, [newComment, vehicleSpecific]);

  const announcementData = async (): Promise<void> => {
    await api
      .get("announcements/")
      .then((res) => {
        setAnnouncementList(res.data);
        setCarList(
          res.data.filter((data: IAnnouncement) => !data.is_motorbike)
        );
        setMotorbikeList(
          res.data.filter((data: IAnnouncement) => data.is_motorbike)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const announcement = async (): Promise<void> => {
    await api
      .get(`announcements/${localStorage.getItem("announcementID")}`)
      .then((res) => {
        setVehicleSpecific(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    announcementData();
    announcement();
  }, [localStorage.getItem("announcementID")]);

  const openAndClosedModalCreateAnnou = () => {
    if (isCreateAnnou) {
      setIsCreateAnnou(false);
    } else {
      setIsCreateAnnou(true);
    }
  };

  return (
    <AnnouncementContext.Provider
      value={{
        navigate,
        commentsByAnnouncement,
        catchExample,
        onSubmitCreateComment,
        onEditAd,

        onSubmitUpdateComment,

        onDeleteAd,
        onDeleteComment,
        setAnnouncementList,
        announcementList,
        setCarList,
        carList,
        setMotorbikeList,
        motorbikeList,
        setVehicleSpecific,
        vehicleSpecific,
        setImageToModal,
        imageToModal,
        setImageModal,
        imageModal,
        setCommentsAd,
        commentsAd,
        setExampleComment,
        exampleComment,
        setUserEditAddress,
        userEditAddress,
        setUserEditModal,
        userEditModal,
        setUpdateAdModal,
        updateAdModal,
        setDeleteAdModal,
        deleteAdModal,
        setCarListUser,
        carListUser,
        setMotorBikeListUser,
        motorBikeListUser,
        setCarListRandomUser,
        carListRandomUser,
        setMotorBikeListRandomUser,
        motorBikeListRandomUser,
        setCommentModal,
        commentModal,
        setCommentSelect,
        commentSelect,
        openAndClosedModalCreateAnnou,
        isCreateAnnou,
      }
    }>
      {children}
    </AnnouncementContext.Provider>
  );
}

export default AnnouncementProvider;
