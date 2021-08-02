import React, { useState } from "react";
import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox} from "./styles";
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal( {isOpen, onRequestClose}: Props){

  const [type, setType] = useState('deposit')
 
  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >

    <button 
      type="button" 
      onClick={onRequestClose} 
      className="react-modal-close"
    >
      <img src={closeImg} alt="Fechar modal"/>
    </button>

    <Container>
        <h2>Cadastrar transação </h2>

        <input
          placeholder="Título"
        />

        <input
          type="number"
          placeholder="Valor"
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            isActive={type === 'deposit'}
            onClick={() => {setType('deposit')}}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
          </RadioBox>

          <RadioBox 
            type="button"
            isActive={type === 'withdraw'}
            onClick={() => {setType('withdraw')}}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
        />

        <button type="submit">
          Cadastrar
        </button>
    </Container>
      </Modal>
  )
}