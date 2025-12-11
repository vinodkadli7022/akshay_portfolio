import { Github, Linkedin, Mail, Phone, Code2, Database, Smartphone, BookOpen } from 'lucide-react';

export const profileData = {
  name: "kadli_vinod",
  role: "Flutter Developer",
  contact: {
    phone: "+91 8073074026",
    email: "gbakshay.2005@gmail.com",
    linkedin: "https://www.linkedin.com/in/akshay-gb-25622329a",
    github: "https://github.com/Akshaygb2005"
  },
  education: [
    {
      institution: "M.S Ramaiah University of Applied Sciences",
      degree: "B.Tech in Computer Sciences and Engineering",
      year: "2023 - 2027"
    },
    {
      institution: "Vijjaya Vittala Composite PU College",
      degree: "12th Grade",
      year: "2021 - 2023"
    }
  ],
  experience: [
    {
      company: "CODTECH IT SOLUTIONS",
      role: "Java Developer Intern", // Updated per user request
      duration: "45 Days",
      description: [
        "Developed a Student Grade Manager project, implementing Java and OOPS concepts.",
        "Strengthened skills in problem-solving, modular code design, and application development."
      ]
    }
  ],
  projects: [
    {
      title: "Trip Mate - Flutter Application",
      description: "A user-friendly Flutter app to help users log and manage travel expenses efficiently.",
      tech: ["Flutter", "Firebase Auth", "Cloud Firestore"],
      details: "Integrated Firebase Authentication for secure login, used Cloud Firestore for real-time data storage, and implemented smooth navigation using Flutter's Navigator.",
      icon: Smartphone
    },
    {
      title: "Trip Mate - Core Java Project",
      description: "Java-based fare-sharing application using SQL and JDBC.",
      tech: ["Java", "SQL", "JDBC"],
      details: "Ensure reliable data storage through robust database integration and modular code organization. Includes automated expense-splitting logic.",
      icon: Database
    }
  ],
  skills: [
    { name: "Flutter Development", icon: Smartphone, level: 90 },
    { name: "Firebase Authentication", icon: Database, level: 85 },
    { name: "Firestore Database", icon: Database, level: 85 },
    { name: "Core Java", icon: Code2, level: 80 },
    { name: "MySQL", icon: Database, level: 75 },
    { name: "JDBC", icon: Database, level: 70 },
    { name: "OOPS", icon: Code2, level: 85 }
  ],
  softSkills: [
    { name: "Reading Books", icon: BookOpen }
  ],
  languages: ["English", "Kannada", "Hindi"]
};
