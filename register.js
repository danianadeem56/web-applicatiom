function register()
{
    const email = document.querySelector('input[name="email"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();
    const fullName = document.querySelector('input[name="name"]').value.trim();

    if (!email || !password || !fullName) 
    {
        alert('Please fill in all fields.');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some(user => user.email === email);

    if (userExists) 
    {
        alert('Email already exists. Please use a different email.');
    } else 
    {
       
        users.push({ email: email, password: password, fullName: fullName });

        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration successful! You can now login.');
        
        window.location.href = 'login.html';
    }
}