import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Task } from "./Task";

export function Body() {
  const [newTask, setNewTask] = useState('');
  const [completeTasks, setCompleteTasks] = useState(2);
  const [lastTaskId, setLastTaskId] = useState(4);
  const [tasks, setTasks] = useState([
    {
      "taskId": 1,
      "content": "Apple",
      "status": true
    },
    {
      "taskId": 2,
      "content": "Banana",
      "status": true
    },
    {
      "taskId": 3,
      "content": "Tea",
      "status": false
    },
    {
      "taskId": 4,
      "content": "Coffee",
      "status": false
    }
  ]);

  const notifySuccess = (message: string) => toast.success(message);

  function handleCreateNewTask() {
    if (newTask != '') {
      setTasks([...tasks, { "taskId": lastTaskId + 1, "content": newTask, "status": false }]);
      setLastTaskId(lastTaskId + 1);
      setNewTask('');
      notifySuccess('Tarefa cadastrada com sucesso!');
    }
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function onDeleteTask(taskId: number) {
    let thisTask = tasks.filter(task => task.taskId == taskId);
    if (thisTask[0].status == true) {
      setCompleteTasks(completeTasks - 1);
    }
    let activeTasks = tasks.filter(task => task.taskId != taskId);
    setTasks(activeTasks);
    notifySuccess('Tarefa excluída com sucesso!');
  }

  function onChangeStatusTask(taskId: number) {
    let thisTask = tasks.filter(task => task.taskId == taskId);
    if (thisTask[0].status == true) {
      setCompleteTasks(completeTasks - 1);
      thisTask[0].status = false;
    } else {
      setCompleteTasks(completeTasks + 1);
      thisTask[0].status = true;
    }
  }

  return (
    <div className="max-w-5xl my-8 mx-auto py-0 px-4 items-start">
      <Toaster
        position='top-right'
        toastOptions={
          {
            duration: 4000,
            style: {
              border: '1px solid #313131',
              background: '#1f1f1f',
              color: '#f3f3f3',
              cursor: 'pointer'
            }
          }
        }
      />
      <div className="flex gap-4">
        <input type="text" id="inputNewTask" value={newTask} onChange={handleNewTaskChange} className="w-10/12 rounded-lg bg-zinc-700 px-2 outline-none" />
        <button onClick={handleCreateNewTask} className="flex justify-center items-center gap-2 w-2/12 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 transition">Adicionar <PlusCircle size={20} /></button>
      </div>
      <div className="flex justify-between pt-8 pb-4">
        <div className="flex gap-2">
          <p className="text-cyan-400">Tarefas criadas</p>
          <span className="rounded-xl bg-zinc-600 text-zinc-300 px-3 text-sm my-auto pt-[2px]">{tasks.length}</span>
        </div>
        <div className="flex gap-2">
          <p className="text-sky-500">Tarefas concluídas</p>
          <span className="rounded-xl bg-zinc-600 text-zinc-300 px-3 text-sm my-auto pt-[2px]">{completeTasks} de {tasks.length}</span>
        </div>
      </div>
      <div>
        {tasks.map((task) => {
          return <Task key={task.taskId} task={task} onDeleteTask={onDeleteTask} onChangeStatusTask={onChangeStatusTask} />
        })}
      </div>
    </div>
  )
}