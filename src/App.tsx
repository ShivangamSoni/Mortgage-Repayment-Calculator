import Empty from "./results/Empty";
import Result from "./results/Result";

export default function App() {
    return (
        <main className="font-primary antialiased bg-slate-100 min-h-screen">
            <section>
                <div>
                    <h1 className="text-3xl text-slate-900">
                        Mortgage Calculator
                    </h1>

                    <form>
                        <button type="reset">Clear All</button>

                        <label>
                            <span>Mortgage Amount</span>
                            <div>
                                <span>£</span>
                                <input type="number" />
                            </div>
                            <span>error</span>
                        </label>

                        <label>
                            <span>Mortgage Term</span>
                            <div>
                                <input type="number" />
                                <span>years</span>
                            </div>
                            <span>error</span>
                        </label>

                        <label>
                            <span>Interest Rate</span>
                            <div>
                                <input type="number" />
                                <span>%</span>
                            </div>
                            <span>error</span>
                        </label>

                        <fieldset>
                            <legend>Mortgage Type</legend>
                            <label>
                                <input type="radio" name="type" />
                                <span>Repayment</span>
                            </label>
                            <label>
                                <input type="radio" name="type" />
                                <span>interest Only</span>
                            </label>
                            <span>error</span>
                        </fieldset>

                        <button type="submit">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                                aria-hidden
                            >
                                <path
                                    fill="#133041"
                                    d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"
                                />
                            </svg>
                            Calculate Repayments
                        </button>
                    </form>
                </div>

                <div>
                    <Empty />
                    <Result />
                </div>
            </section>
        </main>
    );
}
