import React from "react";
import { Link, useHistory } from "react-router-dom";
import { CalculateButtonContainer } from "../CalculationsPage/style";
import { Card, ResultBlock, ResultContainer } from "./style";

const Result = () => {
  const history: any = useHistory();
  console.log(history);
  const {
    destinyDDD,
    fixedPrice,
    minutes,
    normalPrice,
    originDDD,
    planType,
  } = history.location.state.response;
  return (
    <ResultContainer className="animate__animated animate__fadeIn">
      <h1>Resultado</h1>
      <ResultBlock>
        <Card>
          <h1>DDD Origem</h1>
          <p>{originDDD}</p>
        </Card>
        <Card>
          <h1>DDD Destino</h1>
          <p>{destinyDDD}</p>
        </Card>
      </ResultBlock>
      <ResultBlock>
        <Card>
          <h1>Minutos</h1>
          <p>{minutes}</p>
        </Card>
        <Card>
          <h1>Plano</h1>
          <p>{planType}</p>
        </Card>
      </ResultBlock>
      <ResultBlock>
        <Card>
          <h1>Sem o Plano</h1>
          <p>
            <strong id="red">R$ {normalPrice}</strong>
          </p>
        </Card>
        <Card>
          <h1>Com o Plano</h1>
          <p>
            <strong id="green">R$ {fixedPrice}</strong>
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
