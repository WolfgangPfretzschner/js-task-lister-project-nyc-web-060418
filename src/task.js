class Task {
  const list = []

  function taskGenerator(storage) {
  let taskId = 0
  return function(taskName,listObj) {
    const task =  {
      id:++taskId,
      taskName:taskName,
      listId:listObj.id
    }
    storage.push(task)
    return task
    }
  }

  function returnTaskForList(listObj, taskStorage) {
    return taskStorage.filter( taskObj => taskObj.listId === listObj.id)
  }

  <div id="app-content">
  <form id="create-task-form">
    <label for="parent-list">Select List:</label>
    <select id="parent-list">
      <!-- Major key alert:
      read the docs for HTML option selected:
      https://www.w3schools.com/tags/att_option_selected.asp -->
    <option value="My Dank List" selected>
      My Dank List
    </option>
    </select>

    <label for="new-task-description">Task description:</label>
    <input required type="text" id="new-task-description" placeholder="description">

    <label for="new-task-priority">Priority level:</label>
    <input type="text" id="new-task-priority" placeholder="priority">
    <input type="submit" value="Create New Task">
  </form>
</div>


}
