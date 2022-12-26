export function HeaderTasks() {
  return (
    <div className="flex justify-between pt-8 pb-4">
      <div className="flex gap-2">
        <p className="text-cyan-400">Tarefas criadas</p>
        <span className="rounded-xl bg-zinc-600 px-2">5</span>
      </div>
      <div className="flex gap-2">
        <p className="text-sky-500">Tarefas concluídas</p>
        <span className="rounded-xl bg-zinc-600 px-2">2 de 5</span>
      </div>
    </div>
  )
}