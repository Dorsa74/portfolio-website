interface Work {
    id: number;
    institute: string;
    degree: string;
    year: string;
    image: string;
    description: string;
  }
  
  const educationData: Work[] = [
    { id: 1, institute: "NOV, Stavanger", degree: "Associate Software Engineer, Pathway ", year: "Aug.2024-present", image: "/images/nov.png" , 
      description: `At NOV (National Oilwell Varco), I am part of the NOVOS team, focused on drilling process automation.
       I prepare and install software packages for delivery to customers and create and update software documentation. 
      This role also involves receiving training on relevant topics, such as drilling operations and PLC controllers`
    },
    { id: 2, institute: "Volue, Trondheim", degree: "MSc Artificial Intelligence", year: "Jun. 2024- Aug. 2024", image: "/images/volue.png", 
      description: `During my summer internship at Volue, I worked with other interns on automation projects in
      the Energy Team. We developed a Python framework to automate power plant data manage-
      ment, validation, and visualization. This experience helped me understand power plant data,
      work with Git in a team, and improve my Python skills`
     },
     { id: 3, institute: "Sit, Trondheim", degree: "Leader and Contact Person of Student Organization-Part time ", year: "Feb. 2023- Aug. 2024", image: "/images/sit.png", 
      description: `As the leader and board chair of ReStore, my role involved leading and developing the organization, 
      seeking new collaborations, keeping an overview of the tasks and plans, communicating with partners, and moderating board meetings.`
     },
     { id: 4, institute: "Piscada, Trondheim", degree: "Student Researcher-Part", year: "Oct. 2021- Apr. 2024", image: "/images/piscada.jpg", 
      description: `Piscada develops software for process control, analytics, and industrial IT. As a part-time
      worker, I have done projects such as distributed systems for the industrial IoT, building automation systems, 
      image object detection, and continuous integration (CI) implementation`
     },
     { id: 5, institute: "InPhase Solutions, Trondheim", degree: "Summer job - Electrical Engineering InPhase Solutions", year: "May 2022-Aug. 2022 ", image: "/images/inphase.jpg", 
      description: `
      InPhase Solutions offers technology development and consultancy in ultrasound, acoustics, al-
      gorithms, and signal processing. During my summer job, I worked on the Acoustic Wire project,
      a project in collaboration with Innovation Norway. I mainly worked on the circuit design and
      simulation, modulation, and demodulation of the data signal`
     },
     { id: 6, institute: "NTNU, Trondheim", degree: "Student Assistant", year: "Aug. 2021-Dec.2021", image: "/images/ntnu.png", 
      description: `
      TEP4223 Life Cycle Assessment (LCA), TEP4175 Design of the wind turbine
      I assisted the course instructors with various tasks such as grading assignments, helping in lab
      experiments, and answering student questions on weekly TA sessions.`
     },
  ];
  
  export default function WorkSection() {
    return (
      <div className="w-full p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Work</h2>
        <table className="w-full border-collapse">
          <tbody>
            {educationData.map((edu) => (
              <tr key={edu.id} className="border-b">
                <td className="pt-4 pb-4 p-1 w-1/8">
                  <img src={edu.image} alt={edu.institute} className="w-30 h-30 rounded-full" />
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
  