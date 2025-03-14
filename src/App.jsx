
export default function App() {

  //------------------------------------------------------------ SNACK 1//

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


};


