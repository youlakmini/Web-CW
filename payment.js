// Function to show successful payment popup
        function showSuccessMessage() {
            alert("Payment Successful! Thank you for your purchase.");
        }

        // Adding event listener to form submission
        document.getElementById("checkoutForm").addEventListener("submit", function(event) {
            // Preventing default form submission behavior
            event.preventDefault();
            // Assuming payment validation is successful, calling the showSuccessMessage function
            showSuccessMessage();
            // You can also submit the form programmatically here if needed
            // this.submit(); 
        });