export const validateEmail = (email) => {
  // eslint-disable-next-line
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

export const validatePasswordMatch = (data) => {
  const pwdIsNotEmpty = !!data?.password;
  const repeatPwdIsNotEmpty = !!data?.repeatpassword;
  return pwdIsNotEmpty && repeatPwdIsNotEmpty && data?.password === data?.repeatpassword;
};
