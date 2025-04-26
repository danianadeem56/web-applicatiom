
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  // Set the user name or default as "Guest"
  if (user) {
    document.getElementById('loggedUserName').innerText = user.fullName;
  } else {
    document.getElementById('loggedUserName').innerText = 'User';
  
  }

  // Logout function
  function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html'; 
  }

