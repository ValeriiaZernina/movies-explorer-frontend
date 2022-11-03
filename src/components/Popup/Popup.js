import { useEffect } from "react";
import "./Popup.css";

function Popup({ isOpen, name, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return;

    const closeEscape = (e) => {
      if (e.key === "Escape") {
        onClose(e);
      }
    };
    document.addEventListener("keydown", closeEscape);
    return () => document.removeEventListener("keydown", closeEscape);
  }, [isOpen, onClose]);

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  }

  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""} popup_type_${name}`}
      onClick={handleOverlayClick}
    >
      <div className={`popup__container popup__container_type_${name}`}>
        {children}
        <button
          className="popup__close-button"
          aria-label="Закрыть форму"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default Popup;
