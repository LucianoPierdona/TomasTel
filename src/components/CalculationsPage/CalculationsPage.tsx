import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { data } from "../../data";
import {
  CalculateButtonContainer,
  CalculationsContent,
  FormOptions,
  InputContainer,
  SelectContainer,
  Title,
} from "./style";

// Pagina onde o usuário escolhe os dados para serem cálculados
const CalculationsPage = () => {
  const [originDDD, setOriginDDD] = useState(11);
  const [destinyDDD, setDestinyDDD] = useState(11);
  const [minutes, setMinutes] = useState(0);
  const [planType, setPlanType] = useState("Selecione");
  const history = useHistory();

  // Faz os cálculos (acabei deixando ele nesta pasta pelo uso do hook useHistory)
  const onFormSubmit = (
    originDDD: number,
    destinyDDD: number,
    minutes: number,
    planType: string
  ) => {
    return data.details.map((detail) => {
      let discountValue = 0;
      if (planType === "FaleMais 30") discountValue = 30;
      if (planType === "FaleMais 60") discountValue = 60;
      if (planType === "FaleMais 120") discountValue = 120;

      const originDataDDD = parseInt(detail.origin);
      const destinyDataDDD = parseInt(detail.destiny);

      if (originDataDDD === originDDD && destinyDataDDD === destinyDDD) {
        const normalPrice = detail.pricePerMinute * minutes;
        let planPrice = minutes - discountValue;

        planPrice < 0 ? (planPrice = 0) : (planPrice = planPrice + 0); // O ultimo 0 é para remover o aviso no console.
        let costPerMinute = detail.pricePerMinute * 1.1;

        planPrice *= costPerMinute;
        let fixedPrice = planPrice.toFixed(2);
        let resultData = {
          originDDD,
          destinyDDD,
          minutes,
          planType,
          normalPrice,
          fixedPrice,
        };

        return history.push({
          pathname: "/result",
          state: {
            response: resultData,
          },
        });
      }
      return null;
    });
  };

  return (
    <CalculationsContent className="animate__animated animate__fadeIn">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onFormSubmit(originDDD, destinyDDD, minutes, planType);
        }}
      >
        <div>
          <Title>Primeiro selecione o DDD de origem e de destino</Title>
          <FormOptions>
            <SelectContainer>
              <label>Origem</label>
              <select
                onChange={(e) => setOriginDDD(parseInt(e.target.value))}
                required
              >
                {data.ddd.map((ddd) => {
                  return <option value={ddd}>{ddd}</option>;
                })}
              </select>
            </SelectContainer>
            <SelectContainer>
              <label>Destino</label>
              <select
                required
                onChange={(e) => setDestinyDDD(parseInt(e.target.value))}
              >
                {data.ddd.map((ddd) => {
                  return <option value={ddd}>{ddd}</option>;
                })}
              </select>
            </SelectContainer>
          </FormOptions>
        </div>
        <div>
          <Title>Selecione o tempo que você irá usar (Em Minutos)</Title>
          <InputContainer>
            <input
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value))}
              required
            />
          </InputContainer>
        </div>
        <div>
          <Title>Agora selecione o plano que será usado</Title>
          <FormOptions>
            <SelectContainer>
              <label>Plano</label>
              <select
                name="ddd-origem"
                onChange={(e) => setPlanType(e.target.value)}
                required
              >
                {data.plans.map((plan) => {
                  return <option value={plan}>{plan}</option>;
                })}
              </select>
            </SelectContainer>
          </FormOptions>
        </div>
        <CalculateButtonContainer>
          <button type="submit">Calcular</button>
        </CalculateButtonContainer>
      </form>
    </CalculationsContent>
  );
};

export default CalculationsPage;
