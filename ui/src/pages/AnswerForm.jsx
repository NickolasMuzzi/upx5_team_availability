/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Form, Formik } from "formik";
import {
  questionsProductivity,
  questionsSecurity,
} from "./questions/questionsVars";
import { productivityHints, securityHints } from "./questions/questionsVars";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AnswerForm = ({ className, questions }) => {
  const [initialValues, setInitialValues] = useState();
  const [hints, setHints] = useState(false);
  const qsts = {
    productivity: questionsProductivity,
    security: questionsSecurity,
  };
  const hnts = {
    productivity: productivityHints,
    security: securityHints,
  };
  const questionList = qsts[questions];
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    localStorage.setItem(questions, JSON.stringify(values));

    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };
  useEffect(() => {
    const existentData = localStorage.getItem(questions);
    if (existentData) {
      setInitialValues(JSON.parse(existentData));
      setHints(true);
    }
  }, [questions]);

  if (!initialValues) {
    return <>Loading...</>;
  }
  return (
    <div className={className}>
      <div className="answerContainer">
        <div className="formTitle">Questionário de Análise de Comunicação</div>
        <div className="questionsContainer">
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ setFieldValue, values }) => (
              <Form>
                {questionList &&
                  questionList.map((quest) => {
                    console.log(values[`answer-${quest.id}`]);
                    return (
                      <>
                        <h5>
                          ({quest.id}) - {quest.text}
                        </h5>
                        <div className="options">
                          <div>
                            <input
                              disabled={initialValues != null}
                              onChange={() =>
                                setFieldValue(`answer-${quest.id}`, "sim")
                              }
                              type="radio"
                              name={`answer-${quest.id}`}
                              checked={values[`answer-${quest.id}`] === "sim"}
                            />{" "}
                            Sim
                          </div>
                          <div>
                            <input
                              disabled={initialValues != null}
                              onChange={() =>
                                setFieldValue(
                                  `answer-${quest.id}`,
                                  "parcialmente"
                                )
                              }
                              type="radio"
                              name={`answer-${quest.id}`}
                              checked={
                                values[`answer-${quest.id}`] === "parcialmente"
                              }
                            />{" "}
                            Parcialmente
                          </div>
                          <div>
                            <input
                              disabled={initialValues != null}
                              onChange={() =>
                                setFieldValue(`answer-${quest.id}`, "não")
                              }
                              type="radio"
                              name={`answer-${quest.id}`}
                              checked={values[`answer-${quest.id}`] === "não"}
                            />{" "}
                            Não
                          </div>
                        </div>
                      </>
                    );
                  })}
                <Button type="submit" variant="contained">
                  Enviar
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {hints && (
        <div className="hintsContainer">
          <h5>Dicas:</h5>
          {hnts[questions].map((h) => (
            <>
              <br />
              <br />
              <label>- {h.text}</label>
            </>
          ))}
        </div>
      )}
    </div>
  );
};
export default styled(AnswerForm)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  .answerContainer {
    width: 30%;
    height: 80%;
    border-radius: 15px;
    background: #f0f8ff;
    box-shadow: 5px 5px 8px #ccd3d9, -5px -5px 8px #ffffff;
    padding: 24px;
    .formTitle {
      width: 100%;
      text-align: center;
    }
    .questionsContainer {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 15px;
      /* Chrome, Edge, Safari */
      &::-webkit-scrollbar {
        width: 10px;
      }

      &::-webkit-scrollbar-track {
        background: #f0f0f0;
        border-radius: 8px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 8px;
        border: 2px solid #f0f0f0;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
      Button {
        width: 30%;
        margin-top: 15px;
        margin-bottom: 15px;
        margin-left: 67%;
      }
    }
  }
  .hintsContainer {
    position: absolute;
    top: 30%;
    right: 3%;
    width: 500px;
    height: auto;
    min-height: 50px;
    background-color: #1a81bd;
    border-radius: 10px;
    padding: 12px;

    h5,
    label {
      color: #e6e5e5;
      margin: 0;
    }
  }
`;
