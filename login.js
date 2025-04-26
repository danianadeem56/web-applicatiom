function login() {
    // Get input values
    const email = document.querySelector('input[name="email"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();

    // Check if any field is empty
    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }

    // Get users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) ;

    // Check if a matching user exists
    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
        alert('Login successful!');
        // Redirect to home page
        window.location.href = '1home .html'; 
    } else {
        alert('Invalid email or password.');
    }
}
