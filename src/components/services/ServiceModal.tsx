import type { Service } from "../../types/services";
import Modal from "../ui/Modal";

type ServiceModalProps = {
  service: Service | null;
  open: boolean;
  onClose: () => void;
};

export default function ServiceModal({
  service,
  open,
  onClose,
}: ServiceModalProps) {
  if (!service) {
    return null;
  }

  const { title, subtitle, image, modal } = service;

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      description={subtitle}
      footer={
        <div className="flex flex-col gap-3 text-sm text-primary-grey-800 md:flex-row md:items-center md:justify-end">
          <a
            href="/contacto"
            className="inline-flex items-center justify-center rounded-full text-center font-light uppercase
            bg-primary-blue px-6 py-3 text-sm text-white transition
            hover:bg-primary-blue-800 focus:outline-none focus-visible:ring
            focus-visible:ring-primary-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            {modal.ctaLabel}
          </a>
        </div>
      }
    >
      <div className="flex flex-col">
        <div className="space-y-2">
          {modal.sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h3 className="text-lg font-semibold text-primary-blue-800">
                {section.title}
              </h3>
              {section.description?.map((paragraph, index) => (
                <p
                  key={`${section.title}-paragraph-${index}`}
                  className="text-sm leading-relaxed text-primary-grey-800"
                >
                  {paragraph}
                </p>
              ))}
              {section.items ? (
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-primary-grey-800">
                  {section.items.map((item, index) => (
                    <li key={`${section.title}-item-${index}`}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </Modal>
  );
}
