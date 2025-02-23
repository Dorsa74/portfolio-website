interface Education {
    id: number;
    institute: string;
    degree: string;
    year: string;
    image: string;
    description: string;
  }
  
  const educationData: Education[] = [
    { id: 1, institute: "NTNU, Trondheim", degree: "M.Sc. Electronic Systems Desgin - Signal Processing & Communciations", year: "2021-2023", image: "/images/NTNU.jpg",
      description:`I learned about signal measurement, processing, and transmission in telecommunications, audio\/video, and medical imaging,  
      space technology, and music technology. \n Thesis\: On the cell-to-cell extracellular vesicle transmission within the brain,
      case study: Alzheimer\'s disease. I mathematically described and numerically simulated (MATLAB) an end-to-end communication model 
      within the brainusing molecular communication methodology.`},

    { id: 2, institute: "NTNU, Trondheim", degree: "Innovative Sustainable Energy Engineering: System Integration of Wind Power", year: "2020-2021", image: "/images/NTNU.jpg",
      description:
      `Doing one year of this master\’s program, I learned about power system analysis, energy mar-
      kets, and wind turbine design (mechanical and electrical aspects). I also gained knowledge in
      environmental impact analysis and Life Cycle Assessment.`},

    { id: 3, institute: "Amirkabir University of Techonlogy (Tehran\'s Polytechnic), Tehran", degree: "B.Sc. Electrical Engineering - Communication", year: "2014-2019", image: "/images/aut.jpg" , 
      description: `Thesis\: Simulation of Connections and Absorber in Electromagnetic Anechoic Box. 
      I designed and simulated an electromagnetic anechoic box using CST Studio and Altair FEKO. 
      I explored methods to improve its shielding effectiveness and evaluated the model using MATLAB.`},
  ];
  
  export default function EducationSection() {
    return (
      <div className="w-full p-6 rounded-lg">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Education</h2>
        <div className="space-y-6">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="flex flex-col sm:flex-row items-center sm:items-start border-b pb-6 sm:pb-0 sm:space-x-6"
            >
              {/* Image */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 mb-4 sm:mb-0">
                <img
                  src={edu.image}
                  alt={edu.institute}
                  className="w-full h-full rounded-full object-cover shadow-md"
                />
              </div>
  
              {/* Education Info */}
              <div className="flex flex-col sm:flex-grow">
                <p className="text-lg sm:text-xl font-semibold">{edu.degree}</p>
                <p className="text-sm sm:text-base text-gray-700 mt-2">{edu.institute}</p>
                <p className="text-sm sm:text-base text-gray-500 mt-2">{edu.year}</p>
                <p className="text-sm sm:text-base text-gray-600 mt-4">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }