import SheetHeader from "./SheetHeader"
import SheetContent from "./SheetContent"
import SheetFooter from "./SheetFooter"

export default function Sheet() {
  return (
    <main className="min-h-screen bg-zinc-200 p-8">
      <section className="mx-auto flex  w-[1123px] flex-col overflow-hidden rounded-[24px] bg-[#f7f4ff] shadow-2xl">
        <SheetHeader />
        <SheetContent />
        <SheetFooter />
      </section>
    </main>
  )
}