class List {
  const list = []

  function listGenerator(storage) {
  let listId = 0
  return function(listName) {
    const list = {
      id:++listId,
      listName:listName
    }
    storage.push(list)
    return list
    }
  }

  const listHtml = ()=> {
  return '
    <div id="lists">
<!-- begin list 1 -->
  <div>
    <h2>doughnuts
      <button data-title="doughnuts" class="delete-list">
        X
      </button>
    </h2>
    <ul>
        <li>
        Task: mocha
        <button data-list-title="doughnuts" data-task-name="mocha" class="delete-task">
            X
        </button>
        <br>
        Priority: low
      </li>
      <li>
        Task: chocolate
        <button data-list-title="doughnuts" data-task-name="chocolate" class="delete-task">
          X
        </button>
        <br>
        Priority: high
      </li>
    </ul>
  </div>
'}



}
