import { useState } from 'react';

import type { Service } from '../../types/services';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';

type ServicesGridProps = {
  services: Service[];
};

export default function ServicesGrid({ services }: ServicesGridProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="space-y-10">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} onSelect={setSelectedService} />
        ))}
      </div>

      <ServiceModal service={selectedService} open={selectedService !== null} onClose={() => setSelectedService(null)} />
    </div>
  );
}
