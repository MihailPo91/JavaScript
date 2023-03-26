function attachEvents() {
    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const btnView = document.getElementById('btnViewPost');

    const BASE_URL_POSTS = 'http://localhost:3030/jsonstore/blog/posts';
    const BASE_URL_COMMENTS = 'http://localhost:3030/jsonstore/blog/comments';

    btnLoadPosts.addEventListener('click', loadPosts);
    btnView.addEventListener('click', showPost);

    postsData = {};

    function getPost(selected) {
        for (const post in postsData) {
            if (selected === postsData[post].id) {
                return postsData[post]
            }
        }
    }

    async function loadPosts() {
        const allPostsResponse = await fetch(BASE_URL_POSTS, { method: 'GET' });
        const dataPosts = await allPostsResponse.json();
        postsData = dataPosts;

        const selectPost = document.getElementById('posts');
        for (const key in dataPosts) {
            createElement('option', dataPosts[key].title, selectPost, '', '', { value: key })
        }
    }

    async function showPost() {

        const allCommentsResponse = await fetch(BASE_URL_COMMENTS, { method: 'GET' });
        const dataComments = await allCommentsResponse.json();

        const selectValue = document.getElementById('posts').value;

        let postBody = '';
        let postTitle = '';

        let post = getPost(selectValue);
        document.getElementById('post-title').textContent = post.title;
        document.getElementById('post-body').textContent = post.body;
        ul = document.getElementById('post-comments');
        for (const child of Array.from(ul.children)) {
            child.remove();
        }
        for (const comment in dataComments) {
            if (dataComments[comment].postId === selectValue) {
                createElement('li', dataComments[comment].text, ul, dataComments[comment].id)
            }
        }
    }



    function createElement(type, content, parentNode, id, classes, attributes) {
        const htmlElement = document.createElement(type);

        if (content && type !== 'input') {
            htmlElement.textContent = content;
        }

        if (content && type === 'input') {
            htmlElement.value = content;
        }

        if (id) {
            htmlElement.id = id;
        }

        if (classes) {
            htmlElement.classList.add(...classes);
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }
        }

        return htmlElement;
    }
}

attachEvents();