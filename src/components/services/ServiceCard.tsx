import type { Service } from '../../types/services';

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
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={image.src}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 px-6 py-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          {subtitle ? <p className="text-sm font-medium text-primary-blue-600">{subtitle}</p> : null}
        </div>
        <p className="text-sm text-slate-600">{description}</p>
        <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary-blue">
          Ver más detalles
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-4 w-4 transition group-hover:translate-x-1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6 19.5 12 13.5 18" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
          </svg>
        </span>
      </div>
    </button>
  );
}
