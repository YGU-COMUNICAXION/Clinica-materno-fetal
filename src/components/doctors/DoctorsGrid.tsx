import { useState } from "react";

import type { Doctor } from "../../types/doctors";
import DoctorCard from "./DoctorCard";
import DoctorInfoModal from "./DoctorInfoModal";

type DoctorsGridProps = {
  doctors: Doctor[];
};

export default function DoctorsGrid({ doctors }: DoctorsGridProps) {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [open, setOpen] = useState(false);

  const handleSelectDoctor = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-x-8 lg:gap-y-12">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            onSelect={handleSelectDoctor}
          />
        ))}
      </div>

      <DoctorInfoModal doctor={selectedDoctor} open={open} onClose={handleCloseModal} />
    </>
  );
}
