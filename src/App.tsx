import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Empty from "./results/Empty";
import Result, { ResultData } from "./results/Result";

const mortgageSchema = z.object({
    mortgageAmount: z
        .string()
        .min(1, "Mortgage Amount is required")
        .refine((val) => parseFloat(val.replace(/,/g, "")) > 0, {
            message: "Amount must be greater than zero",
        }),
    mortgageTerm: z
        .string()
        .min(1, "Mortgage Term is required")
        .refine((val) => parseFloat(val) > 0, {
            message: "Time must be greater than zero",
        }),
    interestRate: z
        .string()
        .min(1, "Interest Rate is required")
        .refine((val) => parseFloat(val) > 0, {
            message: "Interest must be greater than zero",
        }),
    mortgageType: z.enum(["repayment", "interest-only"], {
        message: "Select a Mortgage Type",
    }),
});

type MortgageFormValues = z.infer<typeof mortgageSchema>;

const formDefault = {
    mortgageAmount: "",
    mortgageTerm: "",
    interestRate: "",
};

export default function App() {
    const [result, setResult] = useState<ResultData | null>(null);
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<MortgageFormValues>({
        resolver: zodResolver(mortgageSchema),
        defaultValues: formDefault,
    });

    const submitForm = ({
        mortgageAmount,
        mortgageTerm,
        mortgageType,
        interestRate,
    }: MortgageFormValues) => {
        const amount = parseFloat(mortgageAmount.replace(/,/g, ""));
        const term = parseFloat(mortgageTerm) * 12;
        const monthlyInterest = parseFloat(interestRate) / 100 / 12;

        console.log(mortgageType);

        let monthly;

        if (mortgageType == "interest-only") {
            monthly = amount * monthlyInterest;
        } else {
            monthly =
                amount *
                ((monthlyInterest * Math.pow(1 + monthlyInterest, term)) /
                    (Math.pow(1 + monthlyInterest, term) - 1));
        }

        const total = monthly * term;
        setResult({ monthly, total });
    };

    const formatWithCommas = (key: keyof MortgageFormValues, value: string) => {
        const formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        setValue(key, formattedValue, { shouldValidate: true });
    };

    return (
        <main className="font-primary antialiased bg-slate-100 min-h-screen md:flex md:items-center md:justify-center">
            <section className="bg-white text-slate-900 w-full max-w-screen-lg md:grid md:grid-cols-2 md:rounded-3xl md:overflow-hidden">
                <div className="p-6 md:p-10">
                    <h1 className="text-2xl font-semibold mb-1.5">
                        Mortgage Calculator
                    </h1>
                    <form
                        onSubmit={handleSubmit(submitForm)}
                        className="grid gap-4 text-slate-700"
                    >
                        <button
                            onClick={() => {
                                reset(formDefault);
                                setResult(null);
                            }}
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
                                    type="text"
                                    {...register("mortgageAmount")}
                                    onChange={(e) =>
                                        formatWithCommas(
                                            "mortgageAmount",
                                            e.target.value.replace(/,/g, "")
                                        )
                                    }
                                />
                            </div>
                            {errors.mortgageAmount && (
                                <span className="text-sm text-primary-red ">
                                    {errors.mortgageAmount.message}
                                </span>
                            )}
                        </label>

                        <div className="grid gap-4 md:grid-cols-2">
                            <label className="space-y-2">
                                <span>Mortgage Term</span>
                                <div className="flex border border-current rounded-lg overflow-hidden font-semibold cursor-pointer">
                                    <input
                                        className="w-full px-4 py-3 text-slate-900 outline-transparent"
                                        type="text"
                                        {...register("mortgageTerm")}
                                    />
                                    <span className="px-4 py-3 bg-slate-100">
                                        years
                                    </span>
                                </div>
                                {errors.mortgageTerm && (
                                    <span className="text-sm text-primary-red ">
                                        {errors.mortgageTerm.message}
                                    </span>
                                )}
                            </label>

                            <label className="space-y-2">
                                <span>Interest Rate</span>
                                <div className="flex border border-current rounded-lg overflow-hidden font-semibold cursor-pointer">
                                    <input
                                        className="w-full px-4 py-3 text-slate-900 outline-transparent"
                                        type="text"
                                        {...register("interestRate")}
                                    />
                                    <span className="px-4 py-3 bg-slate-100">
                                        %
                                    </span>
                                </div>
                                {errors.interestRate && (
                                    <span className="text-sm text-primary-red ">
                                        {errors.interestRate.message}
                                    </span>
                                )}
                            </label>
                        </div>

                        <fieldset className="grid gap-2">
                            <legend className="mb-2">Mortgage Type</legend>
                            <label className="relative">
                                <input
                                    type="radio"
                                    value="repayment"
                                    {...register("mortgageType")}
                                    className="peer absolute scale-0"
                                />
                                <span className="absolute top-1/2 left-4 -translate-y-1/2 w-4 h-4 rounded-full border border-current before:absolute before:inset-[2px] before:bg-white peer-checked:before:bg-primary-lime before:rounded-full transition-transform"></span>
                                <div className="ps-12 px-4 py-3 border border-slate-900 rounded-lg font-semibold text-slate-900 cursor-pointer hover:border-primary-lime peer-focus-visible:border-primary-lime peer-checked:bg-primary-lime peer-checked:bg-opacity-10 peer-checked:border-primary-lime transition-colors">
                                    Repayment
                                </div>
                            </label>

                            <label className="relative">
                                <input
                                    type="radio"
                                    value="interest-only"
                                    {...register("mortgageType")}
                                    className="peer absolute scale-0"
                                />
                                <span className="absolute top-1/2 left-4 -translate-y-1/2 w-4 h-4 rounded-full border border-current before:absolute before:inset-[2px] before:bg-white peer-checked:before:bg-primary-lime before:rounded-full transition-transform"></span>
                                <div className="ps-12 px-4 py-3 border border-slate-900 rounded-lg font-semibold text-slate-900 cursor-pointer hover:border-primary-lime peer-focus-visible:border-primary-lime peer-checked:bg-primary-lime peer-checked:bg-opacity-10 peer-checked:border-primary-lime transition-colors">
                                    Interest Only
                                </div>
                            </label>
                            {errors.mortgageType && (
                                <span className="text-sm text-primary-red">
                                    {errors.mortgageType.message}
                                </span>
                            )}
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
                    {!result ? <Empty /> : <Result {...result} />}
                </div>
            </section>
        </main>
    );
}
