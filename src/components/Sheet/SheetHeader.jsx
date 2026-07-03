export default function SheetHeader() {
  return (
    <header className="flex h-[92px] items-center justify-between bg-gradient-to-r from-[#6d55b3] to-[#8168c8] px-8 text-white">
      <div>
        <div className="text-[22px] font-bold tracking-[0.14em]">
          BAIMORN STUDIO
        </div>
        <div className="text-[11px] tracking-[0.25em] opacity-90">
          — POCKET LINGO SERIES —
        </div>
      </div>

      <div className="text-center">
        <div className="flex items-center gap-3">
        <div className="mx-auto mb-1 w-fit rounded-full bg-white px-5 py-1 text-[14px] font-bold text-[#6d55b3]">
          UNIT 01
        </div>
        <div className="text-[34px] font-bold leading-none">
          Greetings 👋
        </div>
        </div>
        <div className="mt-1 text-[14px] opacity-90">Sheet 1 of 3</div>
      </div>

      <div className="rounded-2xl bg-[#3e2c78] px-6 py-3 text-[22px] font-bold">
        ???
      </div>
    </header>
  )
}