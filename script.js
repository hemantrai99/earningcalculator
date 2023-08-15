const priceInput = document.getElementById("price");
const priceSlider = document.getElementById("priceSlider");
const salesInput = document.getElementById("sales");
const salesSlider = document.getElementById("salesSlider");
const exchangeRateInput = document.getElementById("exchangeRate");
const platformFeeInput = document.getElementById("platformFee");
const earningUSD = document.getElementById("earningUSD");
const earningINR = document.getElementById("earningINR");
const priceINR = document.getElementById("priceINR");

function calculateEarning() {
    const price = parseFloat(priceInput.value);
    const sales = parseFloat(salesInput.value);
    const exchangeRate = parseFloat(exchangeRateInput.value);
    const platformFee = parseFloat(platformFeeInput.value) / 100; // Convert percentage to decimal

    const potentialEarningUSD = price * sales;
    const platformCut = potentialEarningUSD * platformFee;
    const earningAfterPlatform = potentialEarningUSD - platformCut;
    const potentialEarningINR = earningAfterPlatform * exchangeRate;
    const priceInINR = price * exchangeRate;

    earningUSD.textContent = earningAfterPlatform.toLocaleString();
    earningINR.textContent = potentialEarningINR.toLocaleString();
    priceINR.textContent = priceInINR.toLocaleString();

    const greyedPriceINR = (price * exchangeRate).toLocaleString();
    earningINR.dataset.greyedPrice = greyedPriceINR;
    priceINR.dataset.priceInr = priceInINR.toLocaleString();
}

priceInput.addEventListener("input", () => {
    priceSlider.value = priceInput.value;
    calculateEarning();
});

priceSlider.addEventListener("input", () => {
    priceInput.value = priceSlider.value;
    calculateEarning();
});

salesInput.addEventListener("input", () => {
    salesSlider.value = salesInput.value;
    calculateEarning();
});

salesSlider.addEventListener("input", () => {
    salesInput.value = salesSlider.value;
    calculateEarning();
});

exchangeRateInput.addEventListener("input", calculateEarning);
platformFeeInput.addEventListener("input", calculateEarning);

// Initial calculation
calculateEarning();
