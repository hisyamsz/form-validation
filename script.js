document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('mainForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const phone = document.getElementById('phone');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (checkInputs) {
            showModal();
        }
    });

    username.addEventListener('input', () => {
        validateField(
            username,
            username.value.trim() !== '',
            'Username cannot be blank!',
        );
    });

    email.addEventListener('input', () => {
        validateField(email, isEmail(email.value.trim()), 'Not a valid email!');
    });

    password.addEventListener('input', () => {
        validateField(
            password,
            password.value.trim().length >= 8,
            'Password must be at least 8 characters!',
        );
    });

    phone.addEventListener('input', () => {
        validateField(
            phone,
            isPhone(phone.value.trim()),
            'Not a valid number!',
        );
    });

    function checkInputs() {
        let isValid = true;
        validateField(
            username,
            username.value.trim() !== '',
            'Username cannot be blank!',
        );

        validateField(email, isEmail(email.value.trim()), 'Not a valid email!');

        validateField(
            password,
            password.value.trim().length >= 8,
            'Password must be at least 8 characters!',
        );

        validateField(
            phone,
            isPhone(phone.value.trim()),
            'Not a valid number!',
        );

        document.querySelectorAll('.form-control').forEach((control) => {
            if (control.classList.contains('error')) {
                isValid = false;
            }
        });

        return isValid;
    }

    function validateField(input, condition, errorMessage) {
        if (condition) {
            setSuccess(input);
        } else {
            setError(input, errorMessage);
        }
    }

    function setSuccess(input) {
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.bi');

        formControl.className = 'form-control success';
        icon.className = 'bi bi-check-circle-fill';
    }

    function setError(input, message) {
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.bi');

        formControl.className = 'form-control error';
        icon.className = 'bi bi-exclamation-circle-fill';
        input.placeholder = message;
    }

    function isEmail(email) {
        return /^[\w]+@[\w]+\.[a-zA-z]{2,6}$/.test(email);
    }

    function isPhone(phone) {
        return /^\+?(\d.*){3,}$/.test(phone);
    }

    function showModal() {
        const modal = document.getElementById('successModal');
        modal.style.display = 'block';

        const closeBtn = document.querySelector('.close-btn');
        closeBtn.onclick = function () {
            modal.style.display = 'none';
        };

        window.onclick = function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        };
    }
});
