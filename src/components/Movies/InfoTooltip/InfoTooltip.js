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
        alt={status.isOk ? "успешно" : "ошибка"}
        className="info-tooltip__img"
        src={status.isOk ? successReg : failReg}
      />
      <h2 className="info-tooltip__title">
        {status.isOk ? "Успешно" : "Что-то пошло не так!"}
      </h2>
    </Popup>
  );
}

export default InfoTooltip;
