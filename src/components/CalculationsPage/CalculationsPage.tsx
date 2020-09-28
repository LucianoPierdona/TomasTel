import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../data";
import Result from "../Result/Result";
import { Calculation } from "./components/Calculation";
import {
  CalculateButtonContainer,
  CalculationsContent,
  FormOptions,
  InputContainer,
  SelectContainer,
  Title,
} from "./style";

const CalculationsPage = () => {
  const [originDDD, setOriginDDD] = useState(11);
  const [destinyDDD, setDestinyDDD] = useState(11);
  const [minutes, setMinutes] = useState(0);
  const [planType, setPlanType] = useState("Selecione");

  const onFormSubmit = (
    originDDD: number,
    destinyDDD: number,
    minutes: number,
    planType: string
  ) => {
    return Calculation(originDDD, destinyDDD, minutes, planType);
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
          <Title>Selecione o tempo que você irá usar</Title>
          <InputContainer>
            <input
              type="number"
              placeholder="Digite aqui os minutos"
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
          <button type="submit">Enviar</button>
          <Link to="/result">Calcular</Link>
        </CalculateButtonContainer>
      </form>
    </CalculationsContent>
  );
};

export default CalculationsPage;
