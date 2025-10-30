import type { Doctor } from "../../types/doctors";

type DoctorCardProps = {
  doctor: Doctor;
  onSelect?: (doctor: Doctor) => void;
};

export default function DoctorCard({ doctor, onSelect }: DoctorCardProps) {
  const { name, image } = doctor;
  const isInteractive = typeof onSelect === "function";

  const cardBaseClass =
    "group relative flex h-full flex-col items-center gap-6 text-center transition";
  const cardInteractiveClass =
    "focus:outline-none focus-visible:ring focus-visible:ring-primary-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

  const content = (
    <article className="flex max-w-40 flex-col items-center lg:max-w-52 hover:cursor-pointer group">
      <div className="relative mb-4 flex size-40 items-center justify-center overflow-hidden rounded-full lg:size-48">
        <img
          src={image.src}
          alt={name}
          loading="lazy"
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      <p className="text-center text-base font-normal text-primary-grey lg:text-lg group-hover:underline">
        {name}
      </p>
    </article>
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
