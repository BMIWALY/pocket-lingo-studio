import FlashcardTemplate from "@/components/Flashcard/FlashcardTemplate"

const cards = [
  {
    word: "Hallo",
    ipa: "/ˈhaloː/",
    thaiPron: "ฮัล-โล",
    meaning: "สวัสดี",
    note: "ใช้กับเพื่อน คนรู้จัก หรือคนทั่วไป",
    example: "Hallo! Wie geht’s?",
    examplePron: "ฮัล-โล! วี เกทส์?",
    exampleTh: "สวัสดี! เป็นไงบ้าง?",
    image: "/images/greetings/hallo.png",
  },
  {
    word: "Guten Morgen",
    ipa: "/ˈɡuːtən ˈmɔʁɡn̩/",
    thaiPron: "กู-เทิน มอร์-เกิน",
    meaning: "อรุณสวัสดิ์",
    note: "ใช้ตอนเช้าจนถึงช่วงสาย",
    example: "Guten Morgen! Gut geschlafen?",
    examplePron: "กู-เทิน มอร์-เกิน! กูท เกอ-ชลา-เฟิน?",
    exampleTh: "อรุณสวัสดิ์! หลับสบายไหม?",
    image: "/images/greetings/guten-morgen.png",
  },
  {
    word: "Guten Tag",
    ipa: "/ˈɡuːtən taːk/",
    thaiPron: "กู-เทิน ทาค",
    meaning: "สวัสดีตอนกลางวัน",
    note: "สุภาพ ใช้กับคนไม่สนิทหรือร้านค้า",
    example: "Guten Tag! Kann ich Ihnen helfen?",
    examplePron: "กู-เทิน ทาค! คาน อิค อี-เนิน เฮล-เฟิน?",
    exampleTh: "สวัสดีค่ะ/ครับ มีอะไรให้ช่วยไหม?",
    image: "/images/greetings/guten-tag.png",
  },
  {
    word: "Guten Abend",
    ipa: "/ˈɡuːtən ˈaːbn̩t/",
    thaiPron: "กู-เทิน อา-เบินท์",
    meaning: "สวัสดีตอนเย็น",
    note: "ใช้ช่วงเย็นหรือค่ำแบบสุภาพ",
    example: "Guten Abend! Schön, Sie zu sehen.",
    examplePron: "กู-เทิน อา-เบินท์! เชิน ซี ซู เซ-เอิน",
    exampleTh: "สวัสดีตอนเย็น! ดีใจที่ได้เจอคุณ",
    image: "/images/greetings/guten-abend.png",
  },
]

export default function SheetContent() {
  return (
    <section className="grid flex-1 grid-cols-2 gap-6 p-6">
      {cards.map((card) => (
        <FlashcardTemplate key={card.word} card={card} />
      ))}
    </section>
  )
}