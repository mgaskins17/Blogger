// Dashboard script for interactions and fetch requests

// Query Selectors
const addPost = document.getElementById('add-btn');
const closeBtn = document.getElementById('closebtn');
const submitBtn = document.getElementById('submitbtn');

// Add Post Pop Up - Event Listener 
addPost.addEventListener('click', function () {
    console.log('this works')
    setTimeout(function () {
        const popupbox = document.getElementById('create-post-form');
        popupbox.classList.remove('d-none');
    }, 150);
});

// Close Pop Up - Event Listener
closeBtn.addEventListener('click', (e) => {
    setTimeout(function() {
        const popupbox = document.getElementById('create-post-form');
        popupbox.classList.add('d-none');
    }, 150);
});

// Submit Post - Event Listener
submitBtn.addEventListener('click', async function () {
    // Title and Text Input Values
    const postTitle = document.getElementById('posttitle').value;
    const postText = document.getElementById('posttext').value;

    if (!postTitle || !postText) {
        console.log('no value');
    } else {
        const response = await fetch('/api/post/postit', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: postText, title: postTitle })
        });
    
        if (response.ok) {
            const post = await response.json();
            console.log(post);
            location.reload();
        } else {
            const post = await response.json();
            console.log(post);
            location.reload();
        }
    }  
})

