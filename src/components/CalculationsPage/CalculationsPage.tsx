import React from "react";
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
                  return <option value="ddd">{ddd}</option>;
                })}
              </select>
            </SelectContainer>
            <SelectContainer>
              <label>Destino</label>
              <select name="ddd-origem" required>
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
              name="minutes"
              placeholder="Digite aqui os minutos"
              required
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
                  return <option value={plan}>{plan}</option>;
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
