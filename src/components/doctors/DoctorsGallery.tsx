import doctors from "../../data/doctors";
import DoctorCard from "./DoctorCard";

export default function DoctorsGallery() {
  return (
    <div className="grid justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
}
