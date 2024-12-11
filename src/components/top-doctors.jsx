import { doctors } from "../assets/assets";
const TopDoctors = () => {
  return (
    <div>
      <h1>Top Doctors to Book</h1>
      <p>Simply browse through our extensive list of trusted doctors.</p>
      <div>
        {doctors.slice(0,10).map((doctor) => (
          <div key={doctor._id}>
                <img src={doctor.image} alt={doctor.name} />
                <div>
                    <div>
                        <p></p>
                        <p>Available</p>
                    </div>
                    <p>{doctor.name}</p>
                    <p>{doctor.speciality}</p>
                </div>
          </div>
        ))}
      </div>
      <div>more</div>
    </div>
  );
};

export default TopDoctors;
