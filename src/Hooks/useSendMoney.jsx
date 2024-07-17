import { useEffect, useState } from "react";

function useSendMoney(initialAmount = "") {
  const [amount, setAmount] = useState(initialAmount);
  const [finalAmount, setFinalAmount] = useState(initialAmount);

  useEffect(() => {
    const amountNumber = parseFloat(amount);
    if (amountNumber > 100) {
      setFinalAmount(amountNumber + 5);
    } else {
      setFinalAmount(amountNumber);
    }
  }, [amount]);
//   const handleAmountChange = (event) => {
//     setAmount(event.target.sendAm.value);
//   };
  return [amount, finalAmount, setAmount];
}

export default useSendMoney;
