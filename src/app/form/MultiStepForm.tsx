"use client";
import { useEffect, useState } from "react";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";
import Summary from "@/components/Summary";
import {
  loadFromStorage,
  saveToStorage,
  clearStorage,
} from "@/lib/localStorage";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const next = (data: any) => {
    const updated = { ...formData, ...data };
    setFormData(updated);
    saveToStorage(updated);
    setStep((prev) => prev + 1);
  };

  const prev = () => setStep((prev) => prev - 1);

  const reset = () => {
    setFormData({});
    clearStorage();
    setStep(1);
  };

  useEffect(() => {
    const saved = loadFromStorage();
    if (saved) setFormData(saved);
  }, []);

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow mt-10">
      {step === 1 && <Step1 next={next} defaultValues={formData} />}
      {step === 2 && <Step2 next={next} prev={prev} defaultValues={formData} />}
      {step === 3 && <Step3 next={next} prev={prev} defaultValues={formData} />}
      {step === 4 && <Summary data={formData} prev={prev} reset={reset} />}
    </div>
  );
}
