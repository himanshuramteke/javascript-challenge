// Global array to hold posts
const posts = [];

// Handle login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    sessionStorage.setItem('loggedInUser', username);

    document.getElementById('login-container').style.display = 'none';
    document.getElementById('dashboard-container').style.display = 'block';
});

// Handle post creation
document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const content = document.getElementById('post-content').value;
    const imageUrl = document.getElementById('post-image-url').value;
    createPost(content, imageUrl);
    document.getElementById('post-form').reset();
});

function createPost(content, imageUrl) {
    const username = sessionStorage.getItem('loggedInUser') || 'Anonymous';
    const post = {
        content: content,
        imageUrl: imageUrl,
        username: username,
        timestamp: new Date().toLocaleString(),
        likes: 0,
        comments: []
    };

    posts.push(post);
    displayPosts();
}

function displayPosts() {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = ''; // Clear previous posts

    const loggedInUser = sessionStorage.getItem('loggedInUser') || 'Anonymous';

    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        if (post.username === loggedInUser) {
            postElement.classList.add('my-post');
        } else {
            postElement.classList.add('other-post');
        }

        const usernameElement = document.createElement('h3');
        usernameElement.textContent = post.username;
        postElement.appendChild(usernameElement);

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;
        postElement.appendChild(contentElement);

        if (post.imageUrl) {
            const imageElement = document.createElement('img');
            imageElement.src = post.imageUrl;
            imageElement.alt = 'Post image';
            postElement.appendChild(imageElement);
        }

        const timestampElement = document.createElement('span');
        timestampElement.classList.add('timestamp');
        timestampElement.textContent = post.timestamp;
        postElement.appendChild(timestampElement);

        const likeButton = document.createElement('button');
        likeButton.textContent = `Like (${post.likes})`;
        likeButton.addEventListener('click', () => likePost(index));
        postElement.appendChild(likeButton);

        const commentButton = document.createElement('button');
        commentButton.textContent = `Comment (${post.comments.length})`;
        commentButton.addEventListener('click', () => showCommentBox(index));
        postElement.appendChild(commentButton);

        const commentBox = document.createElement('div');
        commentBox.classList.add('comment-box');
        commentBox.style.display = 'none';

        const commentInput = document.createElement('input');
        commentInput.type = 'text';
        commentInput.placeholder = 'Write a comment...';
        commentBox.appendChild(commentInput);

        const submitCommentButton = document.createElement('button');
        submitCommentButton.textContent = 'Submit';
        submitCommentButton.addEventListener('click', () => addComment(index, commentInput.value));
        commentBox.appendChild(submitCommentButton);

        postElement.appendChild(commentBox);

        postsContainer.appendChild(postElement);
    });
}

function likePost(index) {
    posts[index].likes += 1;
    displayPosts();
}

function showCommentBox(index) {
    const postElements = document.querySelectorAll('.post');
    const commentBox = postElements[index].querySelector('.comment-box');
    commentBox.style.display = commentBox.style.display === 'none' ? 'block' : 'none';
}

function addComment(index, comment) {
    if (comment.trim() === '') return;
    posts[index].comments.push(comment);
    displayPosts();
}
