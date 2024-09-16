document.addEventListener('DOMContentLoaded', () => {
    // Select form and input fields
    const form = document.getElementById('registration-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Select error message elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    // Validation functions
    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.style.display = 'block';
        } else {
            nameError.style.display = 'none';
        }
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }
    }

    function validatePassword() {
        if (passwordInput.value.length < 8) {
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
        }
    }

    // Event listeners for real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    // Event listeners for blur event (when the field loses focus)
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    passwordInput.addEventListener('blur', validatePassword);

    // Form submission event listener
    form.addEventListener('submit', (event) => {
        validateName();
        validateEmail();
        validatePassword();

        if (nameError.style.display === 'block' || 
            emailError.style.display === 'block' || 
            passwordError.style.display === 'block') {
            event.preventDefault(); // Prevent form submission if there are errors
        }
    });
});
