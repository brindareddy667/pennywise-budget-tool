let totalBalance = 0;

function addTransaction() {
    const textInput = document.getElementById('text');
    const amountInput = document.getElementById('amount');
    const list = document.getElementById('list');
    const balanceDisplay = document.getElementById('balance');

    const text = textInput.value;
    const amount = parseFloat(amountInput.value);

    if (text.trim() === '' || isNaN(amount)) {
        alert('Please add a valid description and amount');
        return;
    }

    // Update Balance
    totalBalance += amount;
    balanceDisplay.innerText = `$${totalBalance.toFixed(2)}`;
    balanceDisplay.style.color = totalBalance < 0 ? '#e74c3c' : '#2ecc71';

    // Create List Item
    const li = document.createElement('li');
    li.classList.add(amount < 0 ? 'minus' : 'plus');
    
    li.innerHTML = `
        ${text} <span>${amount < 0 ? '-' : '+'}$${Math.abs(amount)}</span>
    `;

    list.appendChild(li);

    // Clear Inputs
    textInput.value = '';
    amountInput.value = '';
}
