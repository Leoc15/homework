// export function setupSite() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(json => {
//             console.log(json)
//         }
//         )

//         //https://jsonplaceholder.typicode.com/posts?userId

//         //https://jsonplaceholder.typicode.com/comments?postId
// }

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const post = await response.json();
    return post;
  }

  fetchPosts().then(post => {
    // Create HTML elements and display the post
    const titleElement = document.createElement('h2');
    titleElement.textContent = post.title;
    // ... add other elements for date, content, etc.
    document.body.appendChild(titleElement);
  });

  async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const post = await response.json();
    return post;
  }
  
  fetchPosts().then(post => {
    const container = document.getElementById('app');
  
    const title = document.createElement('h2');
    title.textContent = post.title;
    container.appendChild(title);
  
    const date = document.createElement('p');
    date.textContent = post.date;
    container.appendChild(date);
  
    const content = document.createElement('p');
    content.textContent = post.content;
    container.appendChild(content);
  });