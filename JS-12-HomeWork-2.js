// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        for (const comment of comments) {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `
                        <h3>ID: ${comment.id}</h3>
                        <h4>Name: ${comment.name}</h4>
                        <h5>Email: ${comment.email}</h5>
                        <h6>Body: ${comment.body}</h6>
                        `;
            wrapper.appendChild(commentDiv);
            document.body.appendChild(wrapper);
        }
    })


