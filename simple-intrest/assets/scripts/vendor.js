const usrInputPrincipal = document.getElementById('input-principal');
const usrInputRate = document.getElementById('input-rate');
const usrInputTime = document.getElementById('input-time');
const siBtn = document.getElementById('btn-si');

const currentInterestOutput = document.getElementById('input-si');
const currentCalculationOutput = document.getElementById('input-total');

function outputResult(interest, total) {
  currentInterestOutput.textContent = interest;
  currentCalculationOutput.textContent = total;
}
