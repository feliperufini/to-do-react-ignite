import { Trash } from "phosphor-react";

function handleDeleteTask() {
  console.log('delete task');
}

export function Task() {
  return (
    <div>
      <input type="checkbox" />
      <p>Tarefa</p>
      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  )
}
