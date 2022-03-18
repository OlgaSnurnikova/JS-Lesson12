//  1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
// щоб отримати 5 елементів в рядку.
//  Для кожного елементу свій блок div.post
//  Всі характеристики повинні мати свої блоки всередені div.post


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        for (const post of posts) {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `
                    <h3>ID: ${post.id}</h3>
                    <h4>Title: ${post.title}</h4>
                    <h5>Body: ${post.body}</h5>
                    `;
            wrapper.appendChild(postDiv);
            document.body.appendChild(wrapper);
        }
    });