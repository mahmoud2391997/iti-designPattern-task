import { useEffect, useState } from "react";
import { Toast, ToastProps } from "./Toast";
import { observable, toast } from "./utils";
import { useAutoAnimate } from "@formkit/auto-animate/react";
type Callback = () => void;
interface ToastListProps {
  toasts: Pick<ToastProps, "id" | "message" | "variant">[];
  onClose: (toast: Pick<ToastProps, "id" | "variant" | "message">) => void;
}
const ToastContainer: React.FC<ToastListProps> = ({ toasts, onClose }) => {
  const [parent] = useAutoAnimate();

  return (
    <div
      ref={parent}
      className="absolute bottom-0 end-0 p-4 space-y-2 w-full h-full justify-end pointer-events-none flex flex-col max-w-xs "
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          variant={toast.variant}
          message={toast.message}
          onClose={() => {
            onClose(toast);
          }}
        />
      ))}
    </div>
  );
};
export default ToastContainer;
