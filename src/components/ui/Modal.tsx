import type { ReactNode, MouseEvent } from "react";
import { useEffect, useId, useRef } from "react";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
};

export default function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
}: ModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElement = useRef<Element | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    previouslyFocusedElement.current = document.activeElement;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      if (previouslyFocusedElement.current instanceof HTMLElement) {
        previouslyFocusedElement.current.focus();
      }
    };
  }, [open, onClose]);

  const headingId = useId();
  const descriptionId = useId();

  if (!open) {
    return null;
  }

  const onOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 px-4 py-10"
      role="presentation"
      onClick={onOverlayClick}
    >
      <div
        className="relative w-full max-w-3xl lg:max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? headingId : undefined}
        aria-describedby={description ? descriptionId : undefined}
      >
        <div className="flex items-start justify-between gap-6 border-b border-slate-100 px-8 py-6">
          <div className="flex-1">
            {title ? (
              <h2
                id={headingId}
                className="text-xl font-semibold text-primary-blue-800"
              >
                {title}
              </h2>
            ) : null}
            {description ? (
              <p
                id={descriptionId}
                className="mt-2 text-base font-light text-primary-blue-600"
              >
                {description}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            ref={closeButtonRef}
            className="rounded-full border border-slate-200 p-2 text-primary-blue-600 transition
            hover:border-slate-300 hover:text-primary-blue-800 focus:outline-none focus-visible:ring
            focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            aria-label="Cerrar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 6 6 18M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-8 py-0">{children}</div>

        {footer ? (
          <div className="border-t border-slate-100 px-8 py-6">{footer}</div>
        ) : null}
      </div>
    </div>
  );
}
