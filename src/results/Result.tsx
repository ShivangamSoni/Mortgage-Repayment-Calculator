export default function Result() {
    return (
        <div className="h-full flex flex-col gap-4 md:gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">Your results</h2>
            <p className="text-sm md:text-base text-slate-100">
                Your results are shown below based on the information you
                provided. To adjust the results, edit the form and click
                "calculate repayments" again
            </p>
            <div className="bg-primary-lime p-4 md:p-8 rounded-lg divide-y divide-slate-700 overflow-hidden relative isolate before:absolute before:left-0 before:top-1 before:w-full before:h-full before:rounded-lg before:bg-slate-900 before:-z-[1]">
                <div className="grid gap-2">
                    <span className="text-sm md:text-base text-slate-100">
                        Your monthly repayments
                    </span>
                    <span className="text-primary-lime font-semibold text-4xl md:text-6xl">
                        £1,797.74
                    </span>
                </div>
                <div className="grid gap-2 mt-4 md:mt-8 pt-4 md:pt-8">
                    <span className="text-sm md:text-base text-slate-100">
                        Total you'll repay over the term
                    </span>
                    <span className="font-semibold text-xl md:text-2xl">
                        £539,322.94
                    </span>
                </div>
            </div>
        </div>
    );
}
