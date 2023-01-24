// Post page script for interactions and fetch requests

// Query Selectors
const addPost = document.getElementById('add-btn');
const closeBtn = document.getElementById('closebtn');
const submitBtn = document.getElementById('submitbtn');

// Getting post ID
const URLPath = window.location.href;
console.log(URLPath);
const postID = URLPath.split('/')[4];
console.log(postID); 

// Add Post Pop Up - Event Listener 
addPost.addEventListener('click', function () {
    console.log('this works')
    setTimeout(function () {
        const popupbox = document.getElementById('create-comment-form');
        popupbox.classList.remove('d-none');
    }, 150);
});

// Close Pop Up - Event Listener
closeBtn.addEventListener('click', (e) => {
    setTimeout(function() {
        const popupbox = document.getElementById('create-comment-form');
        popupbox.classList.add('d-none');
    }, 150);
});

// Submit Post - Event Listener
submitBtn.addEventListener('click', async function () {
    // Text Input Value
    const commentText = document.getElementById('comment-text').value;

    if (!commentText) {
        console.log('no value');
    } else {
        const response = await fetch('/api/post/comment', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: commentText, id: parseInt(postID) })
        });
    
        if (response.ok) {
            const comment = await response.json();
            console.log(comment);
            location.reload();
        } else {
            const notLog = document.getElementById('notlog');
            notLog.classList.remove('d-none');
            const comment = await response.json();
            console.log(comment);
        }
    }  
})