"use client";

import { createContext, useContext, useState } from "react";

type DemoModalCtx = { open: boolean; openModal: () => void; closeModal: () => void };

const Ctx = createContext<DemoModalCtx>({ open: false, openModal: () => {}, closeModal: () => {} });

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <Ctx.Provider value={{ open, openModal: () => setOpen(true), closeModal: () => setOpen(false) }}>
      {children}
    </Ctx.Provider>
  );
}

export function useDemoModal() {
  return useContext(Ctx);
}
