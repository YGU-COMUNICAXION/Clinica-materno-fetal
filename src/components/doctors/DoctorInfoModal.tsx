import type { Doctor } from "../../types/doctors";
import Modal from "../ui/Modal";

type DoctorInfoModalProps = {
  doctor: Doctor | null;
  open: boolean;
  onClose: () => void;
};

export default function DoctorInfoModal({
  doctor,
  open,
  onClose,
}: DoctorInfoModalProps) {
  if (!doctor) {
    return null;
  }

  const { name, image, specialties, summary } = doctor;

  return (
    <Modal open={open} onClose={onClose} title={name}>
      <div className="flex flex-col items-center gap-6 px-4 py-10">
        <div className="h-36 w-36 overflow-hidden rounded-full border-4 border-primary-blue-200 bg-white p-1 md:h-40 md:w-40">
          <img
            src={image.src}
            alt={name}
            loading="lazy"
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        {specialties && specialties.length > 0 ? (
          <ul className="flex flex-wrap items-center justify-center gap-3 text-center text-sm font-medium uppercase text-primary-blue-700">
            {specialties.map((specialty, index) => (
              <li
                key={`${doctor.id}-specialty-${index}`}
                className="rounded-full bg-primary-blue-100 px-4 py-1"
              >
                {specialty}
              </li>
            ))}
          </ul>
        ) : null}

        {summary && summary.length > 0 ? (
          <div className="space-y-4 text-sm leading-relaxed text-primary-grey-800">
            {summary.map((paragraph, index) => (
              <p key={`${doctor.id}-summary-${index}`}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <p className="text-center text-sm leading-relaxed text-primary-grey-700">
            Estamos preparando la información de este especialista. Pronto podrás
            conocer más detalles sobre su trayectoria y áreas de experiencia.
          </p>
        )}
      </div>
    </Modal>
  );
}
