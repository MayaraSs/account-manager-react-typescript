import React from "react";
import { Container } from "./styles";
import iconInImage from "../../assets/in.svg"
import iconOutImage from "../../assets/out.svg"
import iconTotalImage from "../../assets/total.svg"



export function Summary() {
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={iconInImage} alt="Entrances"/>
        </header>
        <strong>R$ 1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={iconOutImage} alt="Out"/>
        </header>
        <strong> - R$ 500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={iconTotalImage} alt="Total"/>
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
}