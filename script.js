// Fetch items from the JSONPlaceholder API
const itemList = document.getElementById('item-list');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const listItem = document.createElement('li');
      listItem.classList.add('item');
      listItem.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.body}</p>
      `;
      itemList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });