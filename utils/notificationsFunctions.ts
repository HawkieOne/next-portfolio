import { Store } from "react-notifications-component";
export const showError = (errorMsg) => {
  Store.addNotification({
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

export const showSuccess = (successMsg) => {
  Store.addNotification({
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
