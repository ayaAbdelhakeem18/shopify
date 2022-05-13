import { gql } from "@apollo/client";

export const change_currency=gql`
   query {
   latest(baseCurrency:"EUR", quoteCurrencies:["USD","JPY"]){
    baseCurrency
    quoteCurrency
    quote
  }
   }
   
`



