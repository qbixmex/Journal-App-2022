import { useEffect, useMemo, useState } from "react";

export const useForm = (initialState = {}, formValidations = {}) => {
  const [ formState, setFormState ] = useState(initialState);
  const [ formValidation, setFormValidation ] = useState({});

  useEffect(() => createValidators(), [formState]);

  const isFormValid = useMemo(() => {
    for ( const formField in formValidation ) {
      if (formValidation[formField] !== null) return false;
    }
    return true;
  }, [ formValidation ]);

  /**
   * @param {{ target: { name: string, value: string } }} event
   * @returns { void }
   */
  const onInputChange = ({ target: { name = '', value = '' } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const onResetForm = () => {
    setFormState(initialState);
  };

  const createValidators = () => {

    const formCheckedValues = {};

    for (const formField in formValidations) {
      const [ fn, errorMessage ] = formValidations[formField];
      formCheckedValues[`${formField}Valid`] = !fn( formState[formField] ) ? errorMessage : null;
    }

    setFormValidation( formCheckedValues );

  };

  return {
    ...formState,
    ...formValidation,
    isFormValid,
    formState,
    onInputChange,
    onResetForm
  };
};