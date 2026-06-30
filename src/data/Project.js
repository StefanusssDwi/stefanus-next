import AntrianPoliklinik from "../assets/Antrian-Poliklinik.png"
import TaskManagement from "../assets/Task-Management.png"
import AbcSchool from "../assets/ABC-School.png"
import Haka from "../assets/Haka.png"
import StJudes from "../assets/St-Judes-Academy.png"

export const projects = [
  {
    id: 1,
    title: "Antrian Poliklinik",
    windowName: "Antrian_Poliklinik.EXE",
    tech: ["React", "JavaScript", "Tailwind", "Express", "SQL Server"],
    shortDesc: "A real-time patient queue system for RSK Ngesti Waluyo",
    longDesc: "Designed to handle high hospital queue volumes, the system integrates a responsive React frontend with an Express backend and SQL Server database. It ensures real-time data synchronization, reduces patient waiting times, and improves overall operational efficiency in production environments.",
    bgColor: "bg-white",
    textColor: "text-gray-800",
    image: AntrianPoliklinik
  },
  {
    id: 2,
    title: "Task Management",
    windowName: "Task_Management.EXE",
    tech: ["React", "Tailwind", "TypeScript", "AWS"],
    shortDesc: "A scalable cloud-based web application for task management, designed for reliability and growth.",
    longDesc: "Designed for maximum productivity, this application leverages TypeScript’s strict type system to minimize runtime errors, combined with a lightweight, minimal UI built with Tailwind CSS. The infrastructure is deployed on AWS to ensure scalability and consistent data availability for users.",
    bgColor: "bg-red-500", 
    textColor: "text-white",
    image: TaskManagement
  },
  {
    id: 3,
    title: "HAKA FOTOCOPY",
    windowName: "Haka_Fotocopy.HTML",
    tech: ["React", "JavaScript", "Tailwind", "Google Analytics"],
    shortDesc: "A dynamic landing page optimized for data-driven digital marketing performance.",
    longDesc: "Not just a visual showcase, this project combines frontend development with digital marketing analytics. Over a four-week period, Google Analytics data was continuously monitored to evaluate and refine the UI/UX structure and layout, aiming to improve visitor-to-customer conversion and achieve measurable gains in conversion rate.",
    bgColor: "bg-yellow-400",
    textColor: "text-black",
    image: Haka
  },
  {
    id: 4,
    title: "ABC School",
    windowName: "ABC_School.HTML",
    tech: ["React", "JavaScript", "Tailwind"],
    shortDesc: "A digital presence for an educational institution, designed with intuitive navigation and a clear user experience.",
    longDesc: "The main focus of this project is to create a strong and trustworthy first impression for prospective students and parents. Built using the React ecosystem and Tailwind CSS, it delivers an accessible academic information structure, fully responsive mobile experience, and optimized load times.",
    bgColor: "bg-blue-400", // Diubah agar variatif
    textColor: "text-black",
    image: AbcSchool
  },
  {
    id: 5,
    title: "St. Jude's Academy",
    windowName: "St_Judes_Admin.EXE", // Disesuaikan agar penulisan aman
    tech: ["React", "JavaScript", "Tailwind", "Express", "Supabase"],
    shortDesc: "An integrated school management platform with a self-managed CMS for streamlined content and administrative control.",
    longDesc: "An end-to-end solution for academic administration. Beyond serving as a school information portal, the system includes a secure admin dashboard. Built with Express and Supabase as the core data architecture, it enables school staff to independently manage content, announcements, and operational data without developer intervention.",
    bgColor: "bg-green-400", // Diubah agar variatif
    textColor: "text-black",
    image: StJudes
  }
];