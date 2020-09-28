import React from "react";
import { Link } from "react-router-dom";
import { CalculateButtonContainer } from "../CalculationsPage/style";
import { Card, ResultBlock, ResultContainer } from "./style";

const Result = () => {
  return (
    <ResultContainer className="animate__animated animate__fadeIn">
      <h1>Resultado</h1>
      <ResultBlock>
        <Card>
          <h1>DDD Origem</h1>
          <p>011</p>
        </Card>
        <Card>
          <h1>DDD Destino</h1>
          <p>018</p>
        </Card>
      </ResultBlock>
      <ResultBlock>
        <Card>
          <h1>Minutos</h1>
          <p>59</p>
        </Card>
        <Card>
          <h1>Plano</h1>
          <p>FaleMais 60</p>
        </Card>
      </ResultBlock>
      <ResultBlock>
        <Card>
          <h1>Sem o Plano</h1>
          <p>
            <strong id="red">19.90</strong>
          </p>
        </Card>
        <Card>
          <h1>Com o Plano</h1>
          <p>
            <strong id="green">0.00</strong>
          </p>
        </Card>
      </ResultBlock>
      <CalculateButtonContainer>
        <Link to="/calculate">Calcular Outro Valor</Link>
      </CalculateButtonContainer>
    </ResultContainer>
  );
};

export default Result;
