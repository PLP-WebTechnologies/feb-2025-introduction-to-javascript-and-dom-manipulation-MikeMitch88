// Change text and style dynamically
document.getElementById('change-btn').addEventListener('click', function () {
    const desc = document.getElementById('description');
    desc.textContent = 'The text has changed! 🎉';
    desc.style.color = 'blue';
    desc.style.fontWeight = 'bold';
  });
  
  // Add and remove list items
  document.getElementById('add-btn').addEventListener('click', function () {
    const ul = document.getElementById('item-list');
    const li = document.createElement('li');
    li.textContent = 'New List Item';
    ul.appendChild(li);
  });
  
  document.getElementById('remove-btn').addEventListener('click', function () {
    const ul = document.getElementById('item-list');
    if (ul.lastElementChild) {
      ul.removeChild(ul.lastElementChild);
    }
  });
  