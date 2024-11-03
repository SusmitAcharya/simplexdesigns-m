document.getElementById('contactForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Collect the form data
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const email = document.querySelector('input[name="email"]').value;
    
    // Get the text of the selected option for the purpose field
    const purposeSelect = document.querySelector('select[name="purpose"]');
    const purposeText = purposeSelect.options[purposeSelect.selectedIndex].text;
    
    const message = document.querySelector('textarea[name="message"]').value;

    // Format data into a single paragraph
    const formattedMessage = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPurpose: ${purposeText}\nMessage: ${message}`;

    // Send data to Formspree
    try {
        const response = await fetch('https://formspree.io/f/mqakpnba', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: formattedMessage })
        });

        if (response.ok) {
            window.location.href = 'submitted.html'; // Replace with your custom thank-you page URL
        } else {
            alert('There was a problem submitting the form. Please try again or mail to susmitacharya.official@gmail.com');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was a problem submitting the form. Please try again or mail to susmitacharya.official@gmail.com');
    }
});
