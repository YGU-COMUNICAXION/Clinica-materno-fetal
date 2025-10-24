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

  const { title, subtitle, modal } = service;
  const { ctaLabel, generalDescription, sections } = modal;

  const hasHowWeDoItSection = sections.some((section) =>
    section.title.toLowerCase().includes("cómo lo realizamos")
  );

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
            {ctaLabel}
          </a>
        </div>
      }
    >
      <div className="flex flex-col gap-8 py-8">
        {generalDescription ? (
          <div
            className="text-sm leading-relaxed text-primary-grey-800 md:text-base [&>p]:mb-4 [&>p:last-child]:mb-0 [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:marker:text-primary-blue"
            dangerouslySetInnerHTML={{ __html: generalDescription }}
          />
        ) : null}

        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((section) => {
            const isWhatItConsistsSection = section.title
              .toLowerCase()
              .includes("en qué consiste");
            const spanFullWidth =
              section.layout === "full" ||
              (!hasHowWeDoItSection && isWhatItConsistsSection);

            return (
              <section
                key={section.title}
                className={`space-y-4 ${spanFullWidth ? "md:col-span-2" : ""}`}
              >
                <h3 className="text-lg font-semibold text-primary-blue-800">
                  {section.title}
                </h3>
                {section.content ? (
                  <div
                    className="space-y-4 text-sm leading-relaxed text-primary-grey-800 md:text-base [&>p]:leading-relaxed [&>ul]:space-y-3 [&>ul]:pl-6 [&>ul]:list-disc [&>ul>li]:marker:text-primary-blue"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                ) : (
                  <>
                    {section.description?.map((paragraph, index) => (
                      <p
                        key={`${section.title}-paragraph-${index}`}
                        className="text-sm leading-relaxed text-primary-grey-800 md:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.items ? (
                      <ul className="space-y-3 pl-1 text-sm leading-relaxed text-primary-grey-800 md:text-base">
                        {section.items.map((item, index) => (
                          <li
                            key={`${section.title}-item-${index}`}
                            className="flex gap-3"
                          >
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-blue"></span>
                            <span className="flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}
