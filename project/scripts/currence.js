import { getdate } from "./getdate.mjs";
import { menusettings } from "./menuH.mjs";


document.addEventListener('DOMContentLoaded', () => {
    menusettings();
    getdate();
});

document.getElementById('convertButton').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    const conversionRates = {
        'gp': 1,       // Gold is the base unit
        'sp': 0.1,     // 10 Silver = 1 Gold
        'cp': 0.01,    // 100 Copper = 1 Gold
        'pp': 10,      // 1 Platinum = 10 Gold
        'ep': 0.5      // 2 Electrum = 1 Gold
    };

    const amountInGold = amount * conversionRates[fromCurrency];
    const convertedAmount = amountInGold / conversionRates[toCurrency];

    document.getElementById('result').innerText = `${amount} ${fromCurrency.toUpperCase()} = ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;
});