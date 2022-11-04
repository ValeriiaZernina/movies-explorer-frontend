import "./InfoTooltip.css";
import Popup from "../../Popup/Popup";
import React from "react";
import successReg from "../../../images/successful_login.svg";
import failReg from "../../../images/fail_login.svg";

function InfoTooltip({ status, onClose }) {
  function handleClose() {
    onClose();
  }

  return (
    <Popup
      name="info"
      isOpen={status.isOpen}
      onClose={handleClose}
      style={status.isOk ? "green" : "red"}
    >
      <img
        alt="Статус регистрации"
        className="info-tooltip__img"
        src={status ? successReg : failReg}
      />
      <h2 className="info-tooltip__title">
        {status
          ? "Вы успешно зарегистрировались!"
          : "Что-то пошло не так! Попробуйте ещё раз."}
      </h2>
    </Popup>
  );
}

export default InfoTooltip;
