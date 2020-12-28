const defaultResult = 0;
let currentResult = defaultResult;

function getUserPrincipalInput() {
  return parseInt(usrInputPrincipal.value);
}

function getUserRateInput() {
  return parseInt(usrInputRate.value);
}

function getUserTimeInput() {
  return parseInt(usrInputTime.value);
}

function si() {
  const enteredPrincipal = getUserPrincipalInput();
  const enteredRate = getUserRateInput();
  const enteredTime = getUserTimeInput();
  Interest = (enteredPrincipal * enteredRate * enteredTime)/100;
  Total = enteredPrincipal + Interest;
  outputResult(Interest, Total);
}

siBtn.addEventListener('click',si);