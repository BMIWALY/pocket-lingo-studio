import SheetHeader from "./SheetHeader";
import SheetContent from "./SheetContent";
// import SheetFooter from "./SheetFooter";

export default function Sheet({
    cards,
    currentSheet,
    totalSheets,
}) {
    return (
        <main className="min-h-screen bg-[var(--pl-bg)] p-8">

            <section
                className="
                    mx-auto
                    flex
                    aspect-[297/210]
                    w-full
                    max-w-[1500px]
                    flex-col
                    overflow-hidden
                    rounded-[28px]
                    bg-[var(--pl-card)]
                    shadow-2xl
                "
            >

                <SheetHeader
                    currentSheet={currentSheet}
                    totalSheets={totalSheets} />
                    

                <div className="flex-1 overflow-hidden">
                    <SheetContent cards={cards} />
                </div>

                {/* <SheetFooter /> */}

            </section>

        </main>
    );
}