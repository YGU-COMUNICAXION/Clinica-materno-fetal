import type { Service } from "../../types/services";

type ServiceCardProps = {
  service: Service;
  onSelect: (service: Service) => void;
};

export default function ServiceCard({ service, onSelect }: ServiceCardProps) {
  const { title, subtitle, description, image } = service;

  return (
    <button
      type="button"
      onClick={() => onSelect(service)}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border
      border-slate-200 bg-primary-blue-200 text-left shadow-sm transition
       hover:-translate-y-1 hover:shadow-lg hover:cursor-pointer
       focus:outline-none focus-visible:ring focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={image.src}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col items-center text-center gap-3 px-6 py-6">
        <div>
          <h3 className="text-lg lg:text-xl font-bold text-primary-blue-800 mb-1">
            {title}
          </h3>
          {subtitle ? (
            <p className="text-sm  font-medium text-primary-blue-600">
              {subtitle}
            </p>
          ) : null}
        </div>
        <p className="text-sm md:text-base lg:text-lg text-primary-blue-800">
          {description}
        </p>
      </div>
    </button>
  );
}
