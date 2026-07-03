import SheetHeader from "./SheetHeader";
import SheetContent from "./SheetContent";
import SheetFooter from "./SheetFooter";

export default function Sheet() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-200 p-8">

      <section className="flex h-[794px] w-[1123px] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">

        <SheetHeader />

        <SheetContent />

        <SheetFooter />

      </section>

    </div>
  );
}