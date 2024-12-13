document.getElementById('creditCardForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const cardNumber = document.getElementById('cardNumber').value;
    const cardHolderName = document.getElementById('cardName').value;
    const expirationMonth = document.getElementById('expiryMonth').value;
    const expirationYear = document.getElementById('expiryYear').value;
    const cvv = document.getElementById('cvv').value;
    
    document.getElementById('card-number').textContent = cardNumber;
    document.getElementById('card-name').textContent = cardHolderName;
    document.getElementById('expiry-date').textContent = `${expirationMonth}/${expirationYear}`;
    document.getElementById('credit-cvv').textContent = cvv;



    
});

document.addEventListener("DOMContentLoaded", function() {
    const creditCardForm = document.getElementById("creditCardForm");
    const messageDiv = document.getElementById("message");
  
    creditCardForm.addEventListener("submit", function(event) {
      event.preventDefault(); 
      
      
      creditCardForm.style.display = "none";
      
      messageDiv.style.display = "block";
    });
  });
  