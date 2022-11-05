import { useState, useCallback } from "react";

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleInput = (event) => {
    const { name, value } = event.target;
    let validationMessage = event.target.validationMessage;

    if (name === "name" && event.target.validity.patternMismatch) {
      validationMessage =
        "Имя должно содержать латиницу, кириллицу, пробел или дефис.";
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setIsValid(event.target.closest("form").checkValidity());
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
