// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// // https://jsonplaceholder.typicode.com/posts
// //     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
//
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => {
//      return response.json();
// })
// .then(posts => {
//     let postsDiv = document.createElement('div');
//     postsDiv.classList.add('postsDiv');
//     for (const post of posts) {
//         let postDiv=document.createElement('div');
//         postDiv.classList.add('postDiv');
//         postDiv.innerHTML=
//             `<h3>ID: ${post.id}</h3>
//             <h4>Title: ${post.title}</h4>
//             <h5>Body: ${post.body}</h5>`;
//         let button = document.createElement('button');
//         button.innerText = 'View comments';
//         button.onclick=(id)=> {
//             fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
//             .then(response => response.json())
//                 .then(comments =>{
//                     for (const comment of comments){
//                         if (post.id === comment.postId) {
//                             let commentsDiv = document.createElement('div');
//                             commentsDiv.classList.add('commentsDiv');
//                             commentsDiv.innerHTML = `
//                                         <h3>ID: ${comment.id}</h3>
//                                         <h4>Name: ${comment.name}</h4>
//                                         <h5>Email: ${comment.email}</h5>
//                                         <h6>Body: ${comment.body}</h6>
//                                         `;
//                             postDiv.appendChild(commentsDiv)
//                         }
//                         button.disabled = true;
//                     }
//
//                 })
//         }
//         postDiv.appendChild(button);
//         document.body.appendChild(postsDiv);
//         postsDiv.append(postDiv);
//     }
// })

