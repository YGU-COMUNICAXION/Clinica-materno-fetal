import type { Doctor } from "../../types/doctors";

type DoctorCardProps = {
  doctor: Doctor;
  onSelect?: (doctor: Doctor) => void;
};

export default function DoctorCard({ doctor, onSelect }: DoctorCardProps) {
  const { name, image } = doctor;
  const isInteractive = typeof onSelect === "function";

  const cardBaseClass =
    "group relative flex h-full flex-col items-center gap-6 p-6 text-center transition";
  const cardInteractiveClass =
    "focus:outline-none focus-visible:ring focus-visible:ring-primary-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

  const content = (
    <>
      <div className="relative flex size-[240px] items-center justify-center overflow-hidden rounded-full">
        <img
          src={image.src}
          alt={name}
          loading="lazy"
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      <p className="text-center text-[18px] font-normal text-primary-grey">{name}</p>
    </>
  );

  if (isInteractive) {
    return (
      <button
        type="button"
        onClick={() => onSelect?.(doctor)}
        className={`${cardBaseClass} ${cardInteractiveClass}`}
      >
        {content}
      </button>
    );
  }

  return <div className={`${cardBaseClass} cursor-default`}>{content}</div>;
}
