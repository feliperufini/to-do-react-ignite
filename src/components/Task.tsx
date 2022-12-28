import { Trash } from "phosphor-react";
import { ChangeEvent, useState } from "react";

interface TaskProps {
  task: {
    taskId: number;
    content: string;
    status: boolean;
  };
  onChangeStatusTask: (content: number) => void;
  onDeleteTask: (content: number) => void;
}

export function Task({task, onChangeStatusTask, onDeleteTask}: TaskProps) {  
  const [statusTask, setStatusTask] = useState(task.status);

  function handleDeleteTask() {
    onDeleteTask(task.taskId);
  }

  function handleChangeStatusTask(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked == true) {
      event.target.nextElementSibling?.classList.add('text-zinc-500', 'line-through');
      setStatusTask(true);
    } else {
      event.target.nextElementSibling?.classList.remove('text-zinc-500', 'line-through');
      setStatusTask(false);
    }
    onChangeStatusTask(parseInt(event.target.value));
  }

  return (
    <div className="flex justify-between mb-4 p-4 rounded-lg bg-zinc-800">
      <div className="flex gap-4 w-full">
        <input type="checkbox" id={'task-'+task.taskId} value={task.taskId} onChange={handleChangeStatusTask} checked={statusTask} className="accent-cyan-500 cursor-pointer" />
        <label htmlFor={'task-'+task.taskId} className={'w-full cursor-pointer '+(statusTask == true ? 'text-zinc-500 line-through' : '')}>{task.content}</label>
      </div>
      <button onClick={handleDeleteTask}>
        <Trash size={18} className="text-zinc-400 hover:text-red-400 transition" />
      </button>
    </div>
  )
}
