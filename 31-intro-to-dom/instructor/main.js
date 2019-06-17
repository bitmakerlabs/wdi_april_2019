document.addEventListener('DOMContentLoaded', function(e){
  // CODE GOES HERE
  // var title = document.querySelector('#page-title');
  // title.innerText = "I'm in a file";

  var todo = document.querySelector('#todo');

  var items = document.querySelectorAll('.item');
  var before = items[2];

  for (var i = 0; i < 1000; i++) {
    var li = document.createElement('li');
    li.innerText = "Add a todo";
    li.className = "item";

    todo.insertBefore(li, before);
  }
})
