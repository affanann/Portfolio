import React from "react";

const education = [
    {
      school: "SRIWIJAYA UNIVERSITY",
      title: "Bachelor of Computer System",
      year: "2024 - Present",
      description: "Learning advanced computer systems and building skills in software development, critical thinking, and teamwork.",
      icon: "🎓",
    },
    {
      school: "SMAN 1 PRABUMULIH",
      title: "MIPA",
      year: "2021 - 2024",
      description: "Gained a strong foundation in science and mathematics while enhancing problem-solving and leadership skills.",
      icon: "🎓",
    },
  ];

  const experience = [
    {
      role: "Vice Head Divition Scrabble of English Club ",
      place: "SMAN 1 Prabumulih",
      year: "2022 - 2023",
      description: "Developed teamwork and communication skills while mentoring members and organizing engaging activities.",
      icon: "🧠",
    },
    {
      role: "Head of Rumah Tahfidz",
      place: "SMAN 1 Prabumulih",
      year: "2022 - 2023",
      description: "Strengthened leadership abilities by managing teams and successfully organizing impactful programs and events.",
      icon: "⭐",
    },
  ];

const Education = () => {
  return (
    <section id='education' className='bg-gradient-to-r bg-gray-950 py-16 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Education & Experience</h2>
        <div className='grid md:grid-cols-2 gap-12'>
            
            {/* Education section */}
            <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Education</h3>
                {education.map((edu, index) => (
                    <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                        <div className='text-4xl mr-6 text-blue-500'>{edu.icon}</div>
                        <div>
                            <h4 className='text-xl font-bold text-gray-200'>{edu.school}</h4>
                            <p className='text-gray-300'>{edu.title}</p>
                            <p className='text-gray-300 text-sm italic'>{edu.year}</p>
                            <p className='text-gray-300 mt-2'>{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Experience Section */}
            <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Experience</h3>
                {experience.map((exp, index) => (
                    <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                        <div className='text-4xl mr-6 text-blue-500'>{exp.icon}</div>
                        <div>
                            <h4 className='text-xl font-bold text-gray-200'>{exp.role}</h4>
                            <p className='text-gray-300'>{exp.place}</p>
                            <p className='text-gray-300 text-sm italic'>{exp.year}</p>
                            <p className='text-gray-300 mt-2'>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Education
