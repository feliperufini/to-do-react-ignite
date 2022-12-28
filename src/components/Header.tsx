import { ClipboardText } from "phosphor-react";

export function Header() {
  return (
    <header className="flex justify-center bg-[#202024] py-8">
      <ClipboardText size={32} className="text-sky-500 mr-2" />
      <h2 className="font-semibold text-2xl">
        <span className="text-cyan-400">To</span>
        <span className="text-sky-500">Do</span>
      </h2>
    </header>
  )
}