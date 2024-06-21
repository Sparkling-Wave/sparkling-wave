function submitLoanOfferFromWhatsApp() {
    const requestedAmount = document.getElementById('requestedAmount').value;
    const month = document.getElementById('month').value;
  
    if (requestedAmount && month) {
        const whatsappNumber = '1234567890'; // Replace with your WhatsApp number
        const whatsappMessage = `Hello, I would like to request a loan of ${requestedAmount} for a duration of ${month}.`;
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, '_blank');
    } else {
        alert('Please select both the requested amount and the month.');
    }
  }