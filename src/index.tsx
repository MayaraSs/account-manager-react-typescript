import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import {App} from './App'

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    transactions: [
      {
        id: 1,
        title: 'freela',
        type: 'deposit',
        category: 'dev',
        amount: 6000,
        createdAt: new Date ('2021-02-12 09:00:00'),
      },
      {
      id: 2,
      title: 'aluguel',
      type: 'withdraw',
      category: 'casa',
      amount: 1100,
      createdAt: new Date ('2021-02-12 09:00:00'),
    }
    ]
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start meWasuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
