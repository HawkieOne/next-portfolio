import { Store } from "react-notifications-component";
import { BeatLoader } from "react-spinners";
import LoadingInfo from "../components/Contact/LoadingInfo";

export const showError = (errorMsg) => {
  return Store.addNotification({
    title: "Error!",
    message: errorMsg,
    type: "danger",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
};

export const showInfo = (errorMsg) => {
  return Store.addNotification({
    title: "Info!",
    message: errorMsg,
    type: "info",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
  });
};

export const showSuccess = (successMsg) => {
  return Store.addNotification({
    title: "Success!",
    message: successMsg,
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
};

export const removeNotifications = () => {
  Store.removeAllNotifications();
}
