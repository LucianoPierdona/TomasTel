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

// Page of calculations by the user
const CalculationsPage = () => {
  const [originDDD, setOriginDDD] = useState(11);
  const [destinyDDD, setDestinyDDD] = useState(11);
  const [minutes, setMinutes] = useState(0);
  const [planType, setPlanType] = useState("Selecione");
  const history = useHistory();

  // do the calculations, (I placed it here instead of a external file cause i used routes.)
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
        normalPrice.toFixed(2);

        let planPrice = minutes - discountValue;

        planPrice < 0 ? (planPrice = 0) : (planPrice += 0); // The last 0 is to remove warnings in the console.
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
                id="originDDD"
                onChange={(e) => setOriginDDD(parseInt(e.target.value))}
                required
              >
                {data.ddd.map((ddd) => {
                  return (
                    <option key={ddd} id={`a${ddd}`} value={ddd}>
                      {ddd}
                    </option>
                  );
                })}
              </select>
            </SelectContainer>
            <SelectContainer>
              <label>Destino</label>
              <select
                id="destinyDDD"
                required
                onChange={(e) => setDestinyDDD(parseInt(e.target.value))}
              >
                {data.ddd.map((ddd) => {
                  return (
                    <option key={ddd} id={`b${ddd}`} value={ddd}>
                      {ddd}
                    </option>
                  );
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
                id="planSelect"
                onChange={(e) => setPlanType(e.target.value)}
                required
              >
                {data.plans.map((plan) => {
                  return (
                    <option key={plan} id={plan.replace(/ /g, "")} value={plan}>
                      {plan}
                    </option>
                  );
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
