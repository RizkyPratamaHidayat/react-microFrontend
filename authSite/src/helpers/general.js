import { login } from "./request";
export const loginhandle = (
  params,
  callback = () => {},
  setSubmitting = () => {},
  SignInCallback = () => {},
  setIsError = () => {},
  setEmail = () => {},
  setPassword = () => {}
) => {
  login("/login", params)
    .then((res) => {
      console.log(res);
      setEmail("");
      setPassword("");
      callback(res);
      SignInCallback();
      localStorage.setItem('access-token' , res.jwt)
    })
    .catch((err) => {
      console.log("err", err);
      setIsError(err.data);
    })
    .finally(() => {
      setSubmitting(false);
    });
};
