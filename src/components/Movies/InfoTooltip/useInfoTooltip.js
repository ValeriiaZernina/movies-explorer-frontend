import { useState } from "react";

export function useInfoTooltip(onSubmit) {
  const [statusInfoTooltip, setFlagsInfoTooltip] = useState({
    isOpen: false,
    isOk: false,
    message: "",
  });

  function openInfoTooltip(isOk, message) {
    // Автоматическое закрытие
    const closeTimer = setTimeout(() => {
      setFlagsInfoTooltip((curr) => {
        if (curr.isOpen) {
          if (curr.isOk) {
            setTimeout(() => onSubmit(), 0);
          }
          return { isOpen: false, isOk: curr.isOk, message, closeTimer: null };
        } else {
          return curr;
        }
      });
    }, 3000);

    setFlagsInfoTooltip({ isOk, isOpen: true, message, closeTimer });
  }

  function closeInfoTooltip() {
    setFlagsInfoTooltip((curr) => {
      if (curr.closeTimer) {
        clearTimeout(curr.closeTimer);
      }
      if (curr.isOk) {
        setTimeout(() => onSubmit(), 0);
      }
      return { ...curr, isOpen: false, closeTimer: null };
    });
  }

  return { statusInfoTooltip, openInfoTooltip, closeInfoTooltip };
}
