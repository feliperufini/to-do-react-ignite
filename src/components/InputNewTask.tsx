export function InputNewTask() {
  return (
    <div className="flex gap-4">
      <input type="text" className="w-10/12 rounded-lg bg-zinc-700 px-2" />
      <button className="w-2/12 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 transition">Adicionar +</button>
    </div>
  )
}