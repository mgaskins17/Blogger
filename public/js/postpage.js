// Post page script for interactions and fetch requests
// Query Selectors
const addPost = document.getElementById('add-btn');
const closeBtn = document.getElementById('closebtn');
const submitBtn = document.getElementById('submitbtn');
const editBtn = document.getElementById('edit-btn');
const submitUpdate = document.getElementById('submitUpdate');
const closeUpdate = document.getElementById('closeUpdate');

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


// Edit Post - Event Listener
editBtn.addEventListener('click', function () {
    setTimeout(function () {
        const popupbox = document.getElementById('update-post-form');
        popupbox.classList.remove('d-none');
    }, 150);

    // Query Selecting Information 
    const titles = document.getElementById('post-title').textContent;
    console.log(titles)

    const posts = document.getElementById('post-text').textContent;
    console.log(posts)

    document.getElementById('titleupdate').value = titles;
    document.getElementById('textupdate').value = posts;
})

submitUpdate.addEventListener('click', async function () {
    // Locating Title and Post Text
    const newTitle = document.getElementById('titleupdate').value;
    const newPost = document.getElementById('textupdate').value;

    if (!newTitle || !newPost) {
        console.log('no value');
    }
    
    const response = await fetch(`/api/post/${postID}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: newPost, title: newTitle })
    })

    if (response.ok) {
        location.reload();
    }

});

    // Close Pop Up - Event Listener
closeUpdate.addEventListener('click', (e) => {
    setTimeout(function() {
        const popupbox = document.getElementById('update-post-form');
        popupbox.classList.add('d-none');
    }, 150);
});













