import { useState } from "react";

export function useInfoTooltip(onSubmit) {
  const [flagsInfoTooltip, setFlagsInfoTooltip] = useState({
    isOpen: false,
    isOk: false,
    message: "",
  });

  function openInfoTooltip(isOk, message) {}
  function closeInfoTooltip() {}
}
