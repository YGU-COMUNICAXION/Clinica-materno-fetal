import { useState } from "react";

import type { Service } from "../../types/services";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";

type ServicesGridProps = {
  services: Service[];
};

export default function ServicesGrid({ services }: ServicesGridProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section className="space-y-10 px-4 md:px-0">
      <div className="grid gap-6 lg:gap-10 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onSelect={setSelectedService}
          />
        ))}
      </div>

      <ServiceModal
        service={selectedService}
        open={selectedService !== null}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
