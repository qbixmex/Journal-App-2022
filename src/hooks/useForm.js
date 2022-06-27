import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [ formState, setFormState ] = useState(initialState);

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

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  };
};