import React from "react";
import Modal from 'react-modal'

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal( {isOpen, onRequestClose}: Props){
 
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}>
      <h2>Cadastrar</h2>
    </Modal>
  )
}