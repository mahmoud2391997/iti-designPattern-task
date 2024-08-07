import { useEffect, useState } from "react";
import { Button } from "./componnts/Button";
import ToastContainer from "./componnts/ToastContainer";
import { observable, toast } from "./componnts/utils";
import { ToastProps } from "./componnts/Toast";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function App() {
  const [toasts, setToasts] = useState<
    Pick<ToastProps, "id" | "message" | "variant">[]
  >([]);
  const [parent] = useAutoAnimate();
  const onClose = (toast: Pick<ToastProps, "id" | "message" | "variant">) =>
    setToasts((prevToasts) => prevToasts.filter((t) => t.id !== toast.id));
  useEffect(() => {
    return observable.subscribe((toast) => {
      setToasts((prevToasts) => [...prevToasts, toast]);
    });
  }, []);
  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="text-7xl font-bold text-center">Hello, World</h1>

      <div className="space-x-2">
        <Button onClick={() => toast("Toast with Default message")}>
          Default
        </Button>
        <Button onClick={() => toast.success("Toast with Success message")}>
          Success ✅
        </Button>
        <Button onClick={() => toast.error("Toast with Error message")}>
          Error ❌
        </Button>
        <Button onClick={() => setToasts([])}>Clear</Button>
      </div>
      <ToastContainer toasts={toasts} onClose={onClose} />
    </div>
  );
}

export default App;
