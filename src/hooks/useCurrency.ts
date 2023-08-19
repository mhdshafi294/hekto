import { create } from "zustand";

interface CurrencyStore {
  currency: string;
  setUSD: () => void;
  setEUR: () => void;
}

const useCurrency = create<CurrencyStore>((set) => ({
  currency: "USD",
  setUSD: () => set({ currency: "USD" }),
  setEUR: () => set({ currency: "EUR" }),
}));

export default useCurrency;
