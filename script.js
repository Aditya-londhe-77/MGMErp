// Add any dynamic interactivity (if needed)
// For example, alert on clicking payment link
document.querySelector('.payment-link').addEventListener('click', (event) => {
    event.preventDefault();
    alert('Redirecting to payment portal...');
});
