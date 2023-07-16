import create from "zustand";

export const userAuth = create((set) => ({
  auth: {
    email: "",
  },
  setEmail: (eml) => set((state) => ({ auth: { ...state.auth, email: eml } })),
}));
