import React from "react";
import Modal from 'react-modal'
import { Container } from "./styles";

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal( {isOpen, onRequestClose}: Props){
 
  return (
    <Container>
      <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <h2>Cadastrar transação </h2>

        <input
          placeholder="Título"
        />
        <input
          type="number"
          placeholder="Valor"
        />
        <input
          placeholder="Categoria"
        />

        <button type="submit">
          Cadastrar
        </button>
      </Modal>
    </Container>
  )
}