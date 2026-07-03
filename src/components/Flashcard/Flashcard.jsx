export default function Flashcard({ data }) {
    const articleColorMap = {
        der: "bg-[var(--pl-masculine)] text-[var(--pl-masculine)]",
        die: "bg-[var(--pl-feminine)] text-[var(--pl-feminine)]",
        das: "bg-[var(--pl-neuter)] text-[var(--pl-neuter)]",
    };

    const articleColor = data.gender
        ? articleColorMap[data.gender]
        : "bg-[var(--pl-primary)] text-[var(--pl-primary)]";

    return (
        <article className="flex h-full flex-col overflow-hidden rounded-[22px] border border-[var(--pl-border)] bg-[var(--pl-surface)] shadow-[0_10px_24px_var(--pl-shadow)]">


            <div className="flex flex-1 gap-4 px-5 pb-4 pt-3">
                <div className="w-[300px] h-[300px] shrink-0 overflow-hidden rounded-[16px] bg-[#eee8fb]">
                    <img
                        src={data.image}
                        alt={data.word}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="flex flex-1 flex-col justify-between ">
                    <div className="flex items-center justify-between h-[45px]">
                        <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--pl-text-secondary)]">
                            {data.tag}
                        </p>

                        <span className="rounded-full bg-[var(--pl-primary)] px-3 py-1 text-[11px] font-bold text-white">
                            {data.type}
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span
                            className={`h-4 w-4 shrink-0 rounded-full ${data.gender
                                ? articleColor.split(" ")[0]
                                : "bg-[var(--pl-primary)]"
                                }`}
                        />

                        <h2 className="text-[40px] font-extrabold leading-none text-[var(--pl-text)]">
                            {data.gender ? (
                                <>
                                    <span className={articleColor.split(" ")[1]}>
                                        {data.gender}
                                    </span>{" "}
                                    {data.word}
                                </>
                            ) : (
                                data.word
                            )}
                        </h2>
                    </div>

                    <div className="h-[200px] flex flex-col p-4">

                    <div className="my-3 border-b-2 border-dashed border-[var(--pl-divider)]" />

                    <p className="text-[19px] font-medium text-[var(--pl-text-secondary)]">
                        {data.ipa}
                    </p>

                    <p className="mt-1 text-[22px] font-bold text-[var(--pl-primary)]">
                        {data.thaiPron}
                    </p>

                    <p className="mt-1 text-[26px] font-extrabold leading-tight text-[var(--pl-text)]">
                        {data.meaning}
                    </p>
                    </div>
                </div>
            </div>

            <footer className="flex min-h-[110px] bg-gradient-to-r from-[var(--pl-primary-dark)] to-[var(--pl-primary)] text-white">
                <div className="flex w-[38%] gap-3 border-r border-white/25 p-4">
                    <div className="text-[22px] leading-none">💡</div>

                    <div>
                        <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.18em] opacity-75">
                            Note
                        </p>

                        <p className="text-[15px] leading-[1.45]">{data.note}</p>
                    </div>
                </div>

                <div className="flex flex-1 gap-3 p-4">
                    <div className="text-[22px] leading-none">💬</div>

                    <div>
                        <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.18em] opacity-75">
                            Example
                        </p>

                        <p className="text-[15px] font-bold leading-tight">
                            {data.example}
                        </p>

                        <p className="mt-1 text-[15px] leading-tight opacity-90">
                            {data.examplePron}
                        </p>

                        <p className="mt-1 text-[15px] leading-tight opacity-90">
                            {data.exampleTh}
                        </p>
                    </div>
                </div>
            </footer>
        </article>
    );
}