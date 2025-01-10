function submitLoanOfferFromWhatsApp() {
    const requestedAmount = document.getElementById('requestedAmount').value;
    const month = document.getElementById('month').value;

    if (requestedAmount && month) {
        // Removes any non-numeric characters from the phone number
        const cleanPhoneNumber = '2347069615095';
        
        const whatsappMessage = `Hello Sparklingwave, I would like to request a loan of ${requestedAmount} for a duration of ${month}.`;
        
        // Constructs the WhatsApp URL with the cleaned phone number
        const whatsappURL = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappURL, '_blank');
    } else {
        alert('Please select both amount and duration.');
    }
}