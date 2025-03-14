
export default function App() {

  //-------------------------------------------------------------------------------- SNACK 1
  function somma(num1, num2) {
    const result = num1 + num2;
    return result;
  }
  console.log("Funzione dichiarativa - Risultato: " + somma(1, 2)); //Output: 3


  const somma2 = function (num1, num2) {
    const result = num1 + num2;
    return result;
  }
  console.log("Funzione anonima - Risultato: " + somma2(2, 3)); //Output: 5


  const somma3 = (num1, num2) => {
    const result = num1 + num2;
    return result;
  }
  console.log("Arrow function - Resultato: " + somma3(3, 4)); //Output: 7


  //-------------------------------------------------------------------------------- SNACK 2
  const quadrato = (num) => num * num;
  console.log(quadrato(3)); //Output: 9


  //-------------------------------------------------------------------------------- SNACK 3
  const sottrazione = (num1, num2) => num1 - num2;
  const divisione = (num1, num2) => num1 / num2;
  const eseguiOperazione = (num1, num2, operazione) => operazione(num1, num2);
  console.log("sottrazione: " + eseguiOperazione(6, 2, sottrazione)); //Output: 2
  console.log("divisione: " + eseguiOperazione(6, 2, divisione)); //Output: 3

};
