export default function FlashcardTemplate({ card }) {
    return (
        <article className="overflow-hidden rounded-[18px] bg-white shadow-lg">
            <div className="grid h-[68%] grid-cols-[42%_58%] gap-4 p-4">
                <div className="overflow-hidden rounded-[14px] bg-[#eee8fb]">
                    <img
                        src={card.image}
                        alt={card.word}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <h2 className="text-[34px] font-bold leading-tight text-black">
                        <span className="mr-3 inline-block h-6 w-6 rounded-full bg-[#7c5fc4]" />
                        {card.word}
                    </h2>

                    <div className="my-3 border-t-2 border-dashed border-[#b8a7df]" />

                    <div className="text-[21px] text-zinc-800">{card.ipa}</div>
                    <div className="mt-2 text-[22px] font-semibold text-[#6d55b3]">
                        {card.thaiPron}
                    </div>
                    <div className="mt-1 text-[24px] font-bold text-black">
                        {card.meaning}
                    </div>
                </div>
            </div>

            <div className="grid h-[32%] grid-cols-[38%_62%] bg-gradient-to-r from-[#7a62bd] to-[#9a83d0] text-white">
                <div className="flex gap-3 border-r border-white/35 p-4">
                    <div className="text-3xl">💡</div>
                    <div>
                        <div className="text-[13px] font-bold uppercase opacity-80">
                            Note
                        </div>
                        <div className="text-[15px] leading-snug">{card.note}</div>
                    </div>
                </div>

                <div className="flex gap-3 p-4">
                    <div className="text-3xl">💬</div>
                    <div>
                        <div className="text-[13px] font-bold uppercase opacity-80">
                            Example
                        </div>
                        <div className="text-[16px] font-bold">{card.example}</div>
                        <div className="text-[13px] opacity-90">{card.examplePron}</div>
                        <div className="text-[13px] opacity-90">{card.exampleTh}</div>
                    </div>
                </div>
            </div>
        </article>
    )
}