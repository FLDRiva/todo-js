let todo = []
function addItem(text) {
  id = +Math.random().toString().slice(2)
  let newTodo = 
    {
      id: id,
      title: text,
      complited: false,
    }
  todo.push(newTodo)
}

function delItem(item) {
  for (i = 0; i < todo.length; i++) {
    if(todo[i].id === item) {
      delete todo[id]
    }
  }
}

function changeItem(id, changeText) {
  for (i = 0; i < todo.length; i++) {
    if(todo[i].id === id) {
      todo[i].title = changeText
    }
  }
}

function compItem(id) {
  for (i = 0; i < todo.length; i++) {
    if(todo[i].id === id) {
      return todo[i].complited = !todo[i].complited
    }
  }
}

addItem('test')
compItem(1)
console.log(todo);


