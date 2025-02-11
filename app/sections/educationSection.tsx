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
      description:`I learned about signal measurement, processing, and transmission in telecommunications, audio/video, and medical imaging,  
      space technology, and music technology. \newline Thesis: On the cell-to-cell extracellular vesicle transmission within the brain,
      case study: Alzheimer's disease. I mathematically described and numerically simulated (MATLAB) an end-to-end communication model 
      within the brainusing molecular communication methodology.`},

    { id: 2, institute: "NTNU, Trondheim", degree: "Innovative Sustainable Energy Engineering: System Integration of Wind Power", year: "2020-2021", image: "/images/NTNU.jpg",
      description:
      `Doing one year of this master’s program, I learned about power system analysis, energy mar-
      kets, and wind turbine design (mechanical and electrical aspects). I also gained knowledge in
      environmental impact analysis and Life Cycle Assessment`},

    { id: 3, institute: "Amirkabir University of Techonlogy (Tehran's Polytechnic), Tehran", degree: "B.Sc. Electrical Engineering - Communication", year: "2014-2019", image: "/images/aut.jpg" , 
      description: `Thesis: Simulation of Connections and Absorber in Electromagnetic Anechoic Box. 
      I designed and simulated an electromagnetic anechoic box using CST Studio and Altair FEKO. 
      I explored methods to improve its shielding effectiveness and evaluated the model using MATLAB.`},
  ];
  
  export default function EducationSection() {
    return (
      <div className="w-full p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <table className="w-full border-collapse">
          <tbody>
            {educationData.map((edu) => (
              <tr key={edu.id} className="border-b">
                <td className="pt-4 pb-4 p-1 w-1/6">
                  <img src={edu.image} alt={edu.institute} className="w-40 h-40 rounded-full" />
                </td>
                <td className="p-4 text-lg">
                  <p>{edu.degree}</p> 
                  <p className="text-base">{edu.institute}</p>
                  <p className="mt-2 text-sm text-gray-500">
                    {edu.description}
                  </p>
                </td>
                <td className="p-4 text-gray-500">{edu.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  