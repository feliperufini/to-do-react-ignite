import { Trash } from "phosphor-react";

function handleDeleteTask() {
  console.log('delete task');
}

export function Task() {
  return (
    <div className="flex justify-between mb-4 p-2 rounded-lg bg-zinc-800">
      <div className="flex gap-4">
        <input type="checkbox" />
        <p>Tarefa</p>
      </div>
      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  )
}
