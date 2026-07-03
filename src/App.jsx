import Sheet from "@/components/Sheet/Sheet";
import { greetingCards } from "@/data/greetings";

function App() {
    const cardsPerSheet = 4;

    const sheets = [];

    for (let i = 0; i < greetingCards.length; i += cardsPerSheet) {
        sheets.push(greetingCards.slice(i, i + cardsPerSheet));
    }

    return (
        <>
            {sheets.map((sheet, index) => (
                <Sheet
                    key={index}
                    cards={sheet}
                    currentSheet={index + 1}
                    totalSheets={sheets.length}
                />
            ))}
        </>
    );
}

export default App;