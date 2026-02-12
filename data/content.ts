export interface Project {
  title: string;
  slug: string;
  category: "project" | "work";
  subtitle?: string;
  description?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    title: "Dropped Apple Collection Device",
    slug: "autonomous-apple-ground-collection-device",
    category: "project",
    subtitle: "Autonomous Ground Collection",
    description:
      "Designed and built an autonomous device for collecting dropped apples from orchard floors, combining mechanical design with embedded control systems.",
    tags: ["Mechanical Design", "Automation", "Embedded Systems"],
  },
  {
    title: "Swing Bot",
    slug: "swing-bot",
    category: "project",
    subtitle: "2.74 Bio-Inspired Robotics",
    description:
      "A bio-inspired robotic system exploring dynamic swing locomotion, built as part of MIT's 2.74 course.",
    tags: ["Robotics", "Bio-Inspired", "Dynamics"],
  },
  {
    title: "Crutching the Numbers",
    slug: "crutching-the-numbers",
    category: "project",
    subtitle: "2.671 Measurement & Instrumentation",
    description:
      "An instrumentation project analyzing the biomechanics of crutch usage through precision measurement and data analysis.",
    tags: ["Instrumentation", "Data Analysis", "Biomechanics"],
  },
  {
    title: "Autonomous Racecar",
    slug: "autonomous-racecar",
    category: "project",
    subtitle: "6.4200 Robotics: Science & Systems",
    description:
      "Developed autonomous racing algorithms for a 1/10th scale racecar, including path planning, localization, and real-time control.",
    tags: ["Autonomous Vehicles", "Path Planning", "ROS"],
  },
  {
    title: "Compliant Mechanisms",
    slug: "compliant-mechanisms",
    category: "project",
    subtitle: "2.145 Compliant Mechanisms",
    description:
      "Explored the design and analysis of compliant mechanisms — flexible structures that achieve motion through elastic deformation.",
    tags: ["Compliant Design", "FEA", "Mechanisms"],
  },
  {
    title: "Fuel Composition Effect on Combustion",
    slug: "fuel-composition-combustion",
    category: "project",
    subtitle: "2.086 Numerical Computation",
    description:
      "Numerically modeled the effects of varying fuel compositions on combustion performance using MATLAB-based simulations.",
    tags: ["Numerical Methods", "MATLAB", "Combustion"],
  },
  {
    title: "2.S007 Robot Competition",
    slug: "2s007-robot-competition",
    category: "project",
    subtitle: "Design & Manufacturing",
    description:
      "Designed, manufactured, and competed with a robot in MIT's legendary 2.007 design competition.",
    tags: ["Design", "Manufacturing", "Competition"],
  },
];

export const workExperience: Project[] = [
  {
    title: "MIT Driverless",
    slug: "mit-driverless",
    category: "work",
    subtitle: "Autonomous Racing Team",
    description:
      "Contributed to MIT Driverless, developing perception and control systems for a fully autonomous Formula-style racecar.",
    tags: ["Autonomous Vehicles", "Perception", "Controls"],
  },
  {
    title: "Biomimetic Robotics Lab",
    slug: "biomimetic-robotics-lab",
    category: "work",
    subtitle: "Research — MIT",
    description:
      "Conducted research on legged locomotion and bio-inspired robotic systems in MIT's Biomimetic Robotics Lab.",
    tags: ["Research", "Legged Robots", "Bio-Inspired"],
  },
  {
    title: "Walking Oligomeric Robotic Mobility System",
    slug: "walking-oligomeric-robotic-mobility-system",
    category: "work",
    subtitle: "WORMS — Multi-Agent Robotics",
    description:
      "Developed modular robotic systems capable of reconfigurable locomotion through oligomeric assembly.",
    tags: ["Multi-Agent", "Modular Robotics", "Locomotion"],
  },
  {
    title: "Anduril Industries",
    slug: "anduril-industries",
    category: "work",
    subtitle: "Internship — Defense Technology",
    description:
      "Engineering internship focused on advanced defense technology systems at Anduril Industries.",
    tags: ["Defense Tech", "Engineering", "Internship"],
  },
  {
    title: "Embraer",
    slug: "embraer",
    category: "work",
    subtitle: "Internship — eVTOL / Aerospace",
    description:
      "Worked on eVTOL aircraft development at Embraer's Eve division, contributing to next-generation urban air mobility.",
    tags: ["Aerospace", "eVTOL", "Internship"],
  },
  {
    title: "CoNeCt Lab",
    slug: "conect-lab",
    category: "work",
    subtitle: "Research — Technion",
    description:
      "Research position at the Technion's Control and Networking Lab, working on control theory applications.",
    tags: ["Control Theory", "Research", "Networking"],
  },
];

export const aboutContent = {
  name: "AZ Krebs",
  headline: "Mechanical Engineer & Roboticist",
  bio: "I'm a mechanical engineering student at MIT passionate about robotics, autonomous systems, and the intersection of hardware and software. My work spans from bio-inspired robotics research to autonomous vehicle development, with hands-on experience at leading companies in defense tech and aerospace.",
  resumeLink:
    "https://drive.google.com/file/d/1pTf9v6sX2tbM85DxfiQm--7MO05GuBiV/view?usp=sharing",
  email: "azkrebs@mit.edu",
};
