// Building out login and sign up interactions

// Fetch request for signing in - built as a function
async function Login() {
    // Collecting username and password from fields
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

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
            document.location.replace('/dashboard');
            console.log('Ok');
        } else {
            alert(response.statusText);
        }
    }
};

// Using above made function as the follow up action for clicking submit on logging in
document
    .querySelector('#signin-btn')
    .addEventListener('click', Login());











