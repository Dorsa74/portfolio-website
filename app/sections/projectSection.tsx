interface Project {
    id: number;
    institute: string;
    degree: string;
    year: string;
    image: string;
  }
  
  const educationData: Project[] = [
    { id: 1, institute: "Harvard University", degree: "BSc Computer Science", year: "2018-2022", image: "/images/harvard.jpg" },
    { id: 2, institute: "MIT", degree: "MSc Artificial Intelligence", year: "2022-2024", image: "/images/mit.jpg" },
  ];
  
  export default function ProjcetSection() {
    return (
      <div className="w-full p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <table className="w-full border-collapse">
          <tbody>
            {educationData.map((edu) => (
              <tr key={edu.id} className="border-b">
                <td className="p-4">
                  <img src={edu.image} alt={edu.institute} className="w-16 h-16 rounded-full object-cover shadow-md" />
                </td>
                <td className="p-4 text-lg">{edu.degree} - {edu.institute}</td>
                <td className="p-4 text-gray-500">{edu.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  