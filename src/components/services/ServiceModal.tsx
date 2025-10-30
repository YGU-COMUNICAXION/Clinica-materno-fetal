import type { Service } from "../../types/services";
import { WHATSAPP_URL } from "@utils/whatsapp";
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

  const renderHtml = (html: string) => ({ __html: html });

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
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
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
      <div className="flex flex-col gap-8 py-2">
        {generalDescription?.trim() ? (
          <section className="">
            <div
              className="text-sm leading-relaxed text-primary-grey-800 md:text-base [&>*]:mb-4 [&>*:last-child]:mb-0 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-3 [&_li]:marker:text-primary-blue"
              dangerouslySetInnerHTML={renderHtml(generalDescription)}
              suppressHydrationWarning
            />
          </section>
        ) : null}

        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((section) => {
            const htmlContent = section.content?.trim();
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
                {htmlContent ? (
                  <div
                    className="space-y-4 text-sm leading-relaxed text-primary-grey-800 md:text-base [&>*]:leading-relaxed [&_ul]:space-y-3 [&_ul]:pl-6 [&_ul]:list-disc [&_li]:marker:text-primary-blue"
                    dangerouslySetInnerHTML={renderHtml(htmlContent)}
                    suppressHydrationWarning
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
