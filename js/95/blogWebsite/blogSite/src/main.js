import './style.css'

document.querySelector('#app').innerHTML = `
 <div class="header">
    <h1>Leos Spilled Tea</h1>
    <div class="card">
    <p>
      Your leading source on the most popular stories
    </p>
    <a href= '/'> back to home</a>
    <hr/>
    <div id="authors">
   </div>
  </div> 
`

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const author = await response.json();

  return author;
}

await fetchPosts().then(users => {
  users.forEach(author => {
    const container = document.getElementById('authors');
    console.log(author)
    const title = document.createElement('h3');
    title.textContent = author.name;
    container.appendChild(title);

    title.addEventListener('click', async e => {
      console.log('clicked')
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${author.id}`);
      const posts = await response.json();

      container.replaceChildren()

      posts.forEach(post => {

        console.log(post)
        const postName = document.createElement('p');
        postName.innerHTML = post.title;
        container.appendChild(postName);


        // postName.addEventListener('click', async e => {
        //     console.log('clicked')
        //     const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${}`);
        //     const comments = await response.json();

        //     container.replaceChildren()

        //     comments.forEach(comment => {

        //       console.log(comment)
        //       const commentTitle = document.createElement('p');
        //       commentTitle.innerHTML = comment.title;
        //       container.appendChild(commentTitle);
        //     });
        //  });
      });
    })
  });

});






// //setupSite()