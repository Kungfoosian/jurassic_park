const paymentFormClose = document.getElementById('form-close');
const paymentForm = document.getElementById('payment-form');

paymentFormClose.addEventListener('click', e => {
    paymentForm.classList.toggle('hidden');
})