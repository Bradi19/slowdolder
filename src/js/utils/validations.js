/* eslint-disable import/prefer-default-export,array-callback-return,consistent-return,no-restricted-syntax,max-len */
export const validateEmail = (value) => {
  const regMail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

  let errorMessage = '';
  if (!regMail.test(value)) {
    errorMessage = 'global_errors.email_format';
  }
  return { errorMessage };
};

export const validationObject = {
  email: (value) => {
    const regMail = /^([A-z0-9_-]+\.)*[A-z0-9_-]+@[A-z0-9_-]+(\.[A-z0-9_-]+)*\.[A-z]{2,6}$/;
    let errorMessage = '';
    if (!regMail.test(value)) {
      errorMessage = 'global_errors.email_format';
    } else if (value.length > 50) {
      return { errorMessage: 'global_errors.field_max_length50', isValid: false };
    }
    return { errorMessage, isValid: !errorMessage };
  },
  name: (value) => {
    if (value === '') {
      return { errorMessage: 'global_errors.name', isValid: false };
    } else if (value.length > 50) {
      return { errorMessage: 'global_errors.field_max_length50', isValid: false };
    }
    return { errorMessage: '', isValid: true };
  },
  subject: (value) => {
    if (value === '') {
      return { errorMessage: 'global_errors.required_field', isValid: false };
    } else if (value.length > 1000) {
      return { errorMessage: 'global_errors.field_max_length1000', isValid: false };
    }
    return { errorMessage: '', isValid: true };
  },
};

export const checkInputForEmpty = (value, name) => {
  let errorMessage = '';
  if (value === '') {
    errorMessage = 'global_errors.required_field';
  }
  if (name === 'name' && value === '') {
    errorMessage = 'global_errors.name';
  }
  return { errorMessage };
};

export const clearContactsState = () => ({
  name: {
    isValid: true,
    value: '',
    errorMessage: '',
    error: 'global_errors.name',
  },
  email: {
    isValid: true,
    value: '',
    errorMessage: '',
    error: 'global_errors.email',
  },
  subject: {
    isValid: true,
    value: '',
    errorMessage: '',
    error: 'global_errors.required_field',
  },
});

export const validateContactsForm = (state) => {
  const temp = [];
  for (const key of Object.keys(state)) {
    temp.push(state[key].isValid);
  }
  return { isValidForm: temp.every(el => el === true) };
};
