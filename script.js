const amountSlider = document.getElementById('amount-slider');
const amountInput = document.getElementById('amount-input');
const rateSlider = document.getElementById('rate-slider');
const rateInput = document.getElementById('rate-input');
const tenureSlider = document.getElementById('tenure-slider');
const tenureInput = document.getElementById('tenure-input');

const emiDisplay = document.getElementById('emi-display');
const rateDisplay = document.getElementById('rate-display');

function calculateEMI() {
    let P = parseFloat(amountInput.value);
    let r = parseFloat(rateInput.value) / 12 / 100;
    let n = parseFloat(tenureInput.value) * 12;

    let emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    
    emiDisplay.innerText = Math.round(emi).toLocaleString('en-IN');
    rateDisplay.innerText = rateInput.value;
}

// Sync Sliders and Inputs
function setupSync(slider, input) {
    slider.oninput = () => { input.value = slider.value; calculateEMI(); };
    input.oninput = () => { slider.value = input.value; calculateEMI(); };
}

setupSync(amountSlider, amountInput);
setupSync(rateSlider, rateInput);
setupSync(tenureSlider, tenureInput);

// Initial Calculation
calculateEMI();
