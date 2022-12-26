import { Header } from "./components/Header"
import { HeaderTasks } from "./components/HeaderTasks"
import { InputNewTask } from "./components/InputNewTask"
import { Task } from "./components/Task"

function App() {
  return (
    <div>
      <Header />
      <div className="max-w-5xl my-8 mx-auto py-0 px-4 items-start">
        <InputNewTask />
        <HeaderTasks />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  )
}

export default App
