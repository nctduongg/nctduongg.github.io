// EmailJS Form Handling
// After signing up at emailjs.com, replace these with your actual IDs:
const EMAILJS_CONFIG = {
    serviceId: 'service_zkimrql',      // e.g., 'service_abc123'
    communityTemplateId: 'template_ll3lbw6',  // e.g., 'template_xyz789'
    mediaTemplateId: 'template_h9wonzi'           // e.g., 'template_def456'
};

// Community Form Handler
document.getElementById('communityForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;
    const submitButton = form.querySelector('.submit-button');
    const statusDiv = form.querySelector('.form-status');

    // Disable button and show loading
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    // Send email via EmailJS
    emailjs.sendForm(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.communityTemplateId, form)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);

            // Show success message
            statusDiv.style.display = 'block';
            statusDiv.style.backgroundColor = '#d4edda';
            statusDiv.style.color = '#155724';
            statusDiv.style.border = '1px solid #c3e6cb';
            statusDiv.textContent = '🎉 Thank you for subscribing! We\'ll be in touch.';

            // Reset form
            form.reset();

            // Reset button after delay
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.textContent = 'Subscribe';
                statusDiv.style.display = 'none';
            }, 5000);

        }, function (error) {
            console.error('FAILED...', error);

            // Show error message
            statusDiv.style.display = 'block';
            statusDiv.style.backgroundColor = '#f8d7da';
            statusDiv.style.color = '#721c24';
            statusDiv.style.border = '1px solid #f5c6cb';
            statusDiv.textContent = '❌ Oops! Something went wrong. Please try again or email us directly.';

            // Reset button
            submitButton.disabled = false;
            submitButton.textContent = 'Subscribe';

            // Hide error after delay
            setTimeout(() => {
                statusDiv.style.display = 'none';
            }, 8000);
        });
});

// Media Inquiries Form Handler
document.getElementById('mediaForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;
    const submitButton = form.querySelector('.submit-button');
    const statusDiv = form.querySelector('.form-status');

    // Disable button and show loading
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    // Send email via EmailJS
    emailjs.sendForm(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.mediaTemplateId, form)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);

            // Show success message
            statusDiv.style.display = 'block';
            statusDiv.style.backgroundColor = '#d4edda';
            statusDiv.style.color = '#155724';
            statusDiv.style.border = '1px solid #c3e6cb';
            statusDiv.textContent = '🎉 Thank you for your inquiry! We received your message and will respond soon.';

            // Reset form
            form.reset();

            // Reset button after delay
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.textContent = 'Submit';
                statusDiv.style.display = 'none';
            }, 5000);

        }, function (error) {
            console.error('FAILED...', error);

            // Show error message
            statusDiv.style.display = 'block';
            statusDiv.style.backgroundColor = '#f8d7da';
            statusDiv.style.color = '#721c24';
            statusDiv.style.border = '1px solid #f5c6cb';
            statusDiv.textContent = '❌ Oops! Something went wrong. Please try again or email us directly.';

            // Reset button
            submitButton.disabled = false;
            submitButton.textContent = 'Submit';

            // Hide error after delay
            setTimeout(() => {
                statusDiv.style.display = 'none';
            }, 8000);
        });
});
