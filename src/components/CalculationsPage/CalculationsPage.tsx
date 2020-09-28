import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../data";
import {
  CalculateButtonContainer,
  CalculationsContent,
  FormOptions,
  InputContainer,
  SelectContainer,
  Title,
} from "./style";

const CalculationsPage = () => {
  const [originDDD, setOriginDDD] = useState(parseInt("011"));
  const [destinyDDD, setDestinyDDD] = useState(parseInt("011"));
  const [minutes, setMinutes] = useState(0);
  const [planType, setPlanType] = useState("Selecione");

  return (
    <CalculationsContent className="animate__animated animate__fadeIn">
      <form>
        <div>
          <Title>Primeiro selecione o DDD de origem e de destino</Title>
          <FormOptions>
            <SelectContainer>
              <label>Origem</label>
              <select name="ddd-origem" required>
                {data.ddd.map((ddd) => {
                  return (
                    <option
                      value={originDDD}
                      onClick={() => setOriginDDD(parseInt(ddd))}
                    >
                      {ddd}
                    </option>
                  );
                })}
              </select>
            </SelectContainer>
            <SelectContainer>
              <label>Destino</label>
              <select name="ddd-origem" required>
                {data.ddd.map((ddd) => {
                  return (
                    <option
                      value={destinyDDD}
                      onClick={() => setDestinyDDD(parseInt(ddd))}
                    >
                      {ddd}
                    </option>
                  );
                })}
              </select>
            </SelectContainer>
          </FormOptions>
        </div>
        <div>
          <Title>Selecione o tempo que você irá usar</Title>
          <InputContainer>
            <input
              type="number"
              name="minutes"
              placeholder="Digite aqui os minutos"
              required
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value))}
            />
          </InputContainer>
        </div>
        <div>
          <Title>Agora selecione o plano que será usado</Title>
          <FormOptions>
            <SelectContainer>
              <label>Plano</label>
              <select name="ddd-origem" required>
                {data.plans.map((plan) => {
                  return (
                    <option value={planType} onClick={() => setPlanType(plan)}>
                      {plan}
                    </option>
                  );
                })}
              </select>
            </SelectContainer>
          </FormOptions>
        </div>
        <CalculateButtonContainer>
          <Link to="/result">Calcular</Link>
        </CalculateButtonContainer>
      </form>
    </CalculationsContent>
  );
};

export default CalculationsPage;
