import { Toaster } from "sonner";

export default function AppToaster() {
  return (
    <Toaster
      closeButton
      position="top-center"
      offset="5.5rem"
      gap={10}
      visibleToasts={3}
      toastOptions={{
        duration: 2800,
        classNames: {
          toast:
            "!rounded-xl !border !shadow-lg [font-family:inherit] !transition-all !duration-300",
          title: "!text-sm !font-semibold",
          description: "!text-sm",
          closeButton:
            "!absolute !right-2 !top-2 !left-auto !transform-none !border-slate-200 !bg-white !text-slate-500 hover:!text-slate-800",
          error:
            "!border-red-200 !bg-red-50 !text-red-800 [&_[data-title]]:!text-red-800",
          warning:
            "!border-amber-200 !bg-amber-50 !text-amber-900 [&_[data-title]]:!text-amber-900",
          success:
            "!border-emerald-200 !bg-emerald-50 !text-emerald-800 [&_[data-title]]:!text-emerald-800",
          info: "!border-sky-200 !bg-sky-50 !text-sky-800",
        },
      }}
    />
  );
}
