// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста


let wrapper = document.createElement('div');
document.body.appendChild(wrapper);
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    for (const user of users) {
        let userCard = document.createElement('div');
        userCard.innerHTML=
            `<h3>ID: ${user.id}</h3>
            <h4>Name: ${user.name}</h4>
            <h4>Name: ${user.username}</h4>
            <h5>Email: ${user.email}</h5>
            <h5>Website: ${user.website}</h5>`;
        let postsButton = document.createElement('button');
        postsButton.innerText ='User Posts';
        let postsClose = document.createElement('button');
        postsClose.innerText ='Close Posts';
        let postsDiv = document.createElement('div');
        userCard.append(postsDiv);
        postsButton.onclick = () => {
            fetch('https://jsonplaceholder.typicode.com/posts/')
                .then(response => response.json())
                .then(posts => {
                    for (const post of posts) {
                        if (user.id === post.userId){
                            let postDiv = document.createElement('div');
                            postDiv.classList.add(`postDiv`);
                            postDiv.innerHTML = `
                                        <h3>ID: ${post.id}</h3>
                                        <h3>Title: ${post.title}</h3>
                                        <h4>Body: ${post.body}</h4>`;
                            let postButton = document.createElement('button');
                            postButton.innerText = 'all comments';
                            postButton.onclick = () =>{
                                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                                    .then(response => response.json())
                                    .then(comments =>{
                                        for (const comment of comments){
                                            if (post.id === comment.postId) {
                                                let commentsDiv = document.createElement('div');
                                                commentsDiv.classList.add('commentsDiv');
                                                commentsDiv.innerHTML = `
                                                 <h3>ID: ${comment.id}</h3>
                                                 <h4>Name: ${comment.name}</h4>
                                                 <h5>Email: ${comment.email}</h5>
                                                 <h6>Body: ${comment.body}</h6>`;
                                                postDiv.appendChild(commentsDiv);
                                            }
                                        }
                                    })
                            }
                            postDiv.append(postButton);
                            postsDiv.append(postDiv);
                        }
                    }
                    })
        }
        postsClose.onclick = () => {
           postsDiv.hidden=true;
           window.location.reload();
        }
        userCard.append(postsButton);
        userCard.append(postsClose);
        wrapper.append(userCard);
    }
    }
)