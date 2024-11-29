import illustration from "../assets/illustration-empty.svg";

export default function Empty() {
    return (
        <div className="h-full flex flex-col items-center justify-center gap-4 text-center">
            <img src={illustration} alt="" className="justify-self-center" />
            <h2 className="text-2xl font-bold">Results shown here</h2>
            <p className="text-sm text-slate-100">
                Complete the form and click "calculate repayments" to see what
                your monthly repayments would be.
            </p>
        </div>
    );
}
