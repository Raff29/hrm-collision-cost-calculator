"use client";

import type React from "react";
import { createContext, useContext, useState } from "react";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast";
import { AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

type ToastType = "error" | "success" | "info" | "warning";

type ToastProps = {
  id: string;
  title?: string;
  description?: string;
  type: ToastType;
  duration?: number;
};

type ToastContextType = {
  toasts: ToastProps[];
  addToast: (toast: Omit<ToastProps, "id">) => void;
  removeToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (toast: Omit<ToastProps, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      <ToastProvider>
        {children}
        {toasts.map(({ id, title, description, type, duration = 5000 }) => {
          const variant =
            type === "error"
              ? "destructive"
              : type === "success"
              ? "success"
              : type === "warning"
              ? "warning"
              : "info";

          const Icon =
            type === "error"
              ? AlertCircle
              : type === "success"
              ? CheckCircle
              : type === "warning"
              ? AlertTriangle
              : Info;

          return (
            <Toast
              key={id}
              variant={variant}
              onOpenChange={(open: boolean) => {
                if (!open) removeToast(id);
              }}
              duration={duration}
            >
              <div className="flex items-start gap-3">
                <Icon className="h-5 w-5" />
                <div className="grid gap-1">
                  {title && <ToastTitle>{title}</ToastTitle>}
                  {description && (
                    <ToastDescription>{description}</ToastDescription>
                  )}
                </div>
              </div>
              <ToastClose />
            </Toast>
          );
        })}
        <ToastViewport />
      </ToastProvider>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastContextProvider");
  }
  return context;
}
