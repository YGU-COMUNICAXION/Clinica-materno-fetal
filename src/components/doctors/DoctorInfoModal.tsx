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

  const { name, image, achievements } = doctor;

  const hasAchievements = Boolean(achievements && achievements.length > 0);

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={name}
      titleHidden
      hideHeaderBorder
    >
      <div className="flex flex-col gap-8 px-4 pb-12">
        <header className="flex flex-col items-center gap-6 rounded-3xl bg-primary-blue-50 md:flex-row md:items-center md:gap-8">
          <div className="h-28 w-28 overflow-hidden rounded-full bg-white p-1 md:h-32 md:w-32 lg:h-36 lg:w-36">
            <img
              src={image.src}
              alt={name}
              loading="lazy"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-primary-blue-800 md:text-xl lg:text-2xl">
              {name}
            </p>
          </div>
        </header>

        {hasAchievements ? (
          <ul className="space-y-4 text-sm leading-relaxed text-primary-grey-800 md:text-base">
            {achievements!.map((achievement, index) => (
              <li
                key={`${doctor.id}-achievement-${index}`}
                className="flex gap-3"
              >
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary-blue"></span>
                <span className="flex-1">{achievement}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-sm leading-relaxed text-primary-grey-700 md:text-base">
            Estamos preparando la información de este especialista. Pronto
            podrás conocer más detalles sobre su trayectoria y áreas de
            experiencia.
          </p>
        )}
      </div>
    </Modal>
  );
}
