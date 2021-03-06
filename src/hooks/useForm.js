import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {

  const [ formState, setFormState ] = useState( initialForm );
  const [ formValidation, setFormValidation ] = useState({});

  useEffect(() => {
    createValidators()
  }, [ formState ]);

  // This effect change Note View if initialForm change
  useEffect(() => {
    setFormState(initialForm);
  }, [ initialForm ]);

  const isFormValid = useMemo(() => {
    for ( const formField in formValidation ) {
      if (formValidation[formField] !== null) return false;
    }
    return true;
  }, [ formValidation ]);

  const onInputChange = (event) => {
    const { target: { name = '', value = '' } } = event;
    setFormState({ ...formState, [name]: value });
  };

  const onResetForm = () => {
    setFormState(initialForm);
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