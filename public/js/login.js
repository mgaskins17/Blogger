// Building out login and sign up interactions

// Fetch request for signing in - built as a function
async function Login(event) {
    event.preventDefault();
    // Collecting username and password from fields
    const username = document.getElementById('username-login').value.trim();
    const password = document.getElementById('password-login').value.trim();
    // const username = 'User1';
    // const password = 'password1';

    console.log('Please Work')
    console.log(username);
    console.log(password);

    if (username && password) {
        // Send Post Requst to Login API
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log('Ok');
            document.location.replace('/dashboard');            
        } else {
            alert(response.statusText);
        }
    }
};

// Using above made function as the follow up action for clicking submit on logging in
document
    .getElementById('signin-btn')
    .addEventListener('click', Login);











