/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import { Formik, Form } from "formik";
import loginVideo from "../assets/login_video.mp4";
import Input from "../components/Input";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
const LoginPage = ({ className }) => {

  const handleLogin = () => {
    localStorage.setItem("logged", true);
    toast.success("Seja bem vindo!");
    setTimeout(() => window.location.reload(), 1000);
  };

  return (
    <div className={className}>
      <div className="formContainer">
        <div className="videoContainer">
          <video
            src={loginVideo}
            autoPlay
            disableRemotePlayback
            disablePictureInPicture
            loop
            playsInline
            muted
          />
        </div>
        <Formik initialValues={{}} validateOnChange enableReinitialize>
          <Form>
            <div className="title">
              <h2>Seja Bem Vindo!</h2>
              <span>Preencha o formulário abaixo para realizar seu login</span>
            </div>
            <div className="fields">
              <Input name="login" placeholder="Email" />
              <Input name="password" type="password" placeholder="Senha" />
              <Button variant="contained" onClick={() => handleLogin()}>
                Enviar
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default styled(LoginPage)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .formContainer {
    width: 70%;
    height: 70%;
    border-radius: 19px;
    background: #f0f8ff;
    box-shadow: 10px 10px 20px #ccd3d9, -10px -10px 20px #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    form {
      width: 60%;
      height: 100%;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      .title {
        width: 100%;
        text-align: center;
      }
      .fields {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
      }
    }
  }
  .videoContainer {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 19px;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 19px 0px 0px 19px;
    }
  }
`;
