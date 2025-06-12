/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import logo from "../assets/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import Card from "@mui/material/Card";
import DialogTitle from "@mui/material/DialogTitle";
import classNames from "classnames";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
const HomePage = ({ className }) => {
  const handleLogout = () => {
    localStorage.setItem("logged", false);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  const navigate = useNavigate();
  return (
    <div className={className}>
      <header>
        <div className="logoDiv">
          <img src={logo} />
        </div>
        <div className="logoutDiv">
          <LogoutIcon
            sx={{ cursor: "pointer" }}
            onClick={() => handleLogout()}
          />
        </div>
      </header>
      <div className="container">
        <div className="title">
          <h2>Olá Nickolas!</h2>
          <span>Veja abaixo o resumo de suas atividades</span>
        </div>
        <h3>Questionários Avaliados:</h3>
        <div className="pendingForms">
          <Tooltip placement="top" title="Ver análise completa" arrow>
            <Card
              variant="elevation"
              className={classNames(["card", "card-good"])}
            >
              <div className="cardTitle">Análise de Comunicação</div>
              <div className="cardDesc">
                Este questionário, tem como intuito, avaliar a efetividade da
                comunicação dos funcionários durante o período de trabalho em
                casa.
              </div>
              <div className="avails">
                <span>Pontuação: (85/100) pontos.</span>
                <span>Análise: Ótimo.</span>
              </div>
            </Card>
          </Tooltip>
          <Tooltip placement="top" title="Ver análise completa" arrow>
            <Card
              variant="elevation"
              className={classNames(["card", "card-warn"])}
            >
              <div className="cardTitle">Análise de Bem Estar e Saúde</div>
              <div className="cardDesc">
                Este questionário, tem como intuito, avaliar o seu bem estar
                pessoal durante o período de trabalho em casa.
              </div>
              <div className="avails">
                <span>Pontuação: (50/100) pontos.</span>
                <span>Análise: Precisa de atenção.</span>
              </div>
            </Card>
          </Tooltip>
        </div>
        <h3>Questionários Pendentes:</h3>
        <div className="pendingForms">
          <Tooltip placement="top" title="Reponder Questionário" arrow>
            <Card
              variant="elevation"
              className="card"
              onClick={() => navigate("/productivity_form")}
            >
              <div className="cardTitle">Análise de Produtividade</div>
              <div className="cardDesc">
                Este questionário, tem como intuito, avaliar o seu rendimento
                pessoal durante o período de trabalho em casa.
              </div>
            </Card>
          </Tooltip>
          <Tooltip placement="top" title="Reponder Questionário" arrow>
            <Card
              variant="elevation"
              className={"card"}
              onClick={() => navigate("/security_form")}
            >
              <div className="cardTitle">
                Análise de Segurança da Informação
              </div>
              <div className="cardDesc">
                Este questionário, tem como intuito, avaliar o seu bem estar
                pessoal durante o período de trabalho em casa.
              </div>
            </Card>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
export default styled(HomePage)`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  header {
    height: 5%;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
    box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.5);
    .logoDiv {
      width: 60%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      img {
        height: 40px;
      }
    }
    .logoutDiv {
      width: 50%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 24px;

    .title {
      width: 100%;
    }
    h2 {
      margin: 0;
    }
    .pendingForms {
      width: 50%;
      height: 30%;
      padding-left: 15px;
      display: flex;
      justify-content: space-evenly;

      .card {
        cursor: pointer;
        width: 300px;
        padding: 12px;
        background-color: rgba(52, 156, 235, 3);
        display: flex;
        flex-direction: column;
        gap: 20px;
        .avails {
          display: flex;
          flex-direction: column;
        }
        .cardTitle {
          padding: 12px;
          border-radius: 10px;
          background: #349ceb;
          color: #443b3b;
          box-shadow: inset 9px 9px 18px #2c85c8, inset -9px -9px 18px #3cb3ff;
        }
        .cardDesc {
          padding: 12px;
          color: #443b3b;
          font-size: 14px;
        }
        span {
          padding: 12px;
          font-size: 14px;
          color: #443b3b;
          font-weight: 500;
        }
      }
    }
    .card-good {
      background-color: #2dcc97 !important;
      .cardTitle {
        background-color: #2dcc97 !important;
        box-shadow: inset 9px 9px 18px #26ad80, inset -9px -9px 18px #34ebae !important;
      }
    }
    .card-warn {
      background-color: #c9c542 !important;
      .cardTitle {
        background-color: #c9c542 !important;
        box-shadow: inset 9px 9px 18px #aba738, inset -9px -9px 18px #e7e34c !important;
      }
    }
  }
`;
