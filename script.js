// Querying the input value;
var newItem = document.getElementById('item');
// Keypress Event;
newItem.addEventListener('keypress', (event) => {
  keyCheck(event.key);
});
// Checking the Key;
function keyCheck(key) {
  if (key === 'Enter') {
    addItem(event);
  }
}

// Querying the Form;
var form = document.getElementById('addForm');
// Form submit event
form.addEventListener('submit', (event) => {
  addItem(event);
});

// Querying the UL;
var itemList = document.getElementById('items');
// Delete event
itemList.addEventListener('click', removeItem);

// Querying the input value for Filter (Searching);
var filter = document.getElementById('filter');
// Filter event
filter.addEventListener('keypress', filterItems);

// Function for Adding an item;
function addItem(event) {
  event.preventDefault();

  if (newItem.value === "") {
    alert(`Please Enter Valid Input`);
  }
  else if (checkItems()) {
    alert(`Item Already Exists`);
  }
  else {
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem.value));

    // Create del button element
    var deleteBtn = document.createElement('button');
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);

    alert(`Item Successfully Added to the List`);
  }

}

// To Check the Input with Existing checkItems;
var itemValue = itemList.children;

function checkItems() {
  for (var item of itemValue) {
    var oldValue = item.firstChild.textContent;

    if (newItem.value.trim().toLowerCase() === oldValue.trim().toLowerCase()) {
      return true;
    }
  }
  return false;
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get All li Elements
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}