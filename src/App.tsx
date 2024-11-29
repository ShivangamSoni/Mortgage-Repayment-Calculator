// import Empty from "./results/Empty";
import Result from "./results/Result";

export default function App() {
    return (
        <main className="font-primary antialiased bg-slate-100 min-h-screen md:flex md:items-center md:justify-center">
            <section className="bg-white text-slate-900 w-full max-w-screen-lg md:grid md:grid-cols-2 md:rounded-3xl md:overflow-hidden">
                <div className="p-6 md:p-10">
                    <h1 className="text-2xl font-semibold mb-1.5">
                        Mortgage Calculator
                    </h1>
                    <form className="grid gap-4 text-slate-700">
                        <button
                            type="reset"
                            className="w-fit text-sm underline outline-transparent hover:text-slate-900 focus-visible:text-slate-900 transition-colors"
                        >
                            Clear All
                        </button>

                        <label className="space-y-2">
                            <span>Mortgage Amount</span>
                            <div className="flex border border-current rounded-lg overflow-hidden font-semibold cursor-pointer">
                                <span className="px-4 py-3 bg-slate-100">
                                    £
                                </span>
                                <input
                                    className="w-full px-4 py-3 text-slate-900 outline-transparent"
                                    type="number"
                                />
                            </div>
                            <span className="text-sm text-primary-red ">
                                error
                            </span>
                        </label>

                        <div className="grid gap-4 md:grid-cols-2">
                            <label className="space-y-2">
                                <span>Mortgage Term</span>
                                <div className="flex border border-current rounded-lg overflow-hidden font-semibold cursor-pointer">
                                    <input
                                        className="w-full px-4 py-3 text-slate-900 outline-transparent"
                                        type="number"
                                    />
                                    <span className="px-4 py-3 bg-slate-100">
                                        years
                                    </span>
                                </div>
                                <span className="text-sm text-primary-red ">
                                    error
                                </span>
                            </label>

                            <label className="space-y-2">
                                <span>Interest Rate</span>
                                <div className="flex border border-current rounded-lg overflow-hidden font-semibold cursor-pointer">
                                    <input
                                        className="w-full px-4 py-3 text-slate-900 outline-transparent"
                                        type="number"
                                    />
                                    <span className="px-4 py-3 bg-slate-100">
                                        %
                                    </span>
                                </div>
                                <span className="text-sm text-primary-red ">
                                    error
                                </span>
                            </label>
                        </div>

                        <fieldset className="grid gap-2">
                            <legend className="mb-2">Mortgage Type</legend>
                            <label>
                                <input
                                    type="radio"
                                    name="type"
                                    className="peer sr-only"
                                />
                                <div className="flex items-center gap-4 px-4 py-3 border border-slate-900 rounded-lg font-semibold text-slate-900 cursor-pointer hover:border-primary-lime peer-focus-visible:border-primary-lime transition-colors">
                                    <span className="w-4 h-4 rounded-full border border-current relative before:hidden before:absolute before:inset-[2px] before:bg-primary-lime before:rounded-full"></span>
                                    <span>Repayment</span>
                                </div>
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="type"
                                    className="peer sr-only"
                                />
                                <div className="flex items-center gap-4 px-4 py-3 border border-slate-900 rounded-lg font-semibold text-slate-900 cursor-pointer hover:border-primary-lime peer-focus-visible:border-primary-lime transition-colors">
                                    <span className="w-4 h-4 rounded-full border border-current relative before:hidden before:absolute before:inset-[2px] before:bg-primary-lime before:rounded-full"></span>
                                    <span>Interest Only</span>
                                </div>
                            </label>
                            <span className="text-sm text-primary-red ">
                                error
                            </span>
                        </fieldset>

                        <button
                            type="submit"
                            className="flex items-center justify-center gap-4 font-bold text-lg bg-primary-lime text-slate-900 p-4 rounded-full outline-none hover:bg-opacity-50 focus-visible:bg-opacity-50"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                                aria-hidden
                            >
                                <path
                                    fill="currentColor"
                                    d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"
                                />
                            </svg>
                            Calculate Repayments
                        </button>
                    </form>
                </div>

                <div className="bg-slate-900 bg-opacity-90 text-white p-6 md:p-10 md:rounded-bl-[150px]">
                    {/* <Empty /> */}
                    <Result />
                </div>
            </section>
        </main>
    );
}
