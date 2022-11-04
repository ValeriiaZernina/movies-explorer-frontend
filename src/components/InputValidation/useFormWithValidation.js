import { useState, useCallback } from "react";

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  if (name === "name" && e.target.validity.patternMismatch) {
    validationMessage =
      "Имя должно содержать латиницу, кирилицу, пробел или дефис";
  }

  const handleInput = (event) => {
    const { name, value } = event.target;
    const validationMessage = event.target.validationMessage;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleInput,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  };
}
