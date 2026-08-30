export type TechnicalIndexEntry = {
  label: string;
  projects: string[]; // project index numbers, e.g. ["01", "04"]
};

export type TechnicalIndexGroup = {
  label: string;
  entries: TechnicalIndexEntry[];
};

export const technicalIndex: TechnicalIndexGroup[] = [
  {
    label: "Software",
    entries: [
      { label: "Python", projects: ["07"] },
      { label: "Swift · SwiftUI", projects: ["01", "04"] },
      { label: "TypeScript · React · Next.js", projects: ["03"] },
      { label: "Java", projects: ["06"] },
    ],
  },
  {
    label: "Hardware",
    entries: [
      { label: "Soldering · Integration", projects: ["02", "05"] },
      { label: "Embedded · UART · DShot", projects: ["02"] },
      { label: "RF systems · FPV", projects: ["02"] },
      { label: "Rotary encoders", projects: ["05"] },
    ],
  },
  {
    label: "Data",
    entries: [
      { label: "NumPy · Matplotlib · scikit-learn", projects: ["07"] },
      { label: "Machine learning · data analysis", projects: ["07"] },
    ],
  },
  {
    label: "Sustainable Engineering",
    entries: [
      { label: "Eco-design · LCA · openLCA", projects: ["01"] },
      { label: "Brezet Wheel · 3D Modeling", projects: ["01"] },
    ],
  },
];
