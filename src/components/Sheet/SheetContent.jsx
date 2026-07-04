import Flashcard from "@/components/Flashcard/Flashcard";


export default function SheetContent({ cards }) {
    return (

        <div className="grid grid-cols-2 gap-4 p-4">
            {cards.map((card) => (
                <Flashcard
                    key={card.id}
                    data={card}
                />
            ))}

        </div>
    );
}