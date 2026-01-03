/**
 * Team Members Data
 * Contains information about all DEMA team members including name, role, and image
 */

// Import team member images
import syedaImg from "../assets/DEMA Team Page/team_syeda_2025_1.jpeg";
import yasminImg from "../assets/DEMA Team Page/team_yasmine_2025_1.jpg";
import daanishImg from "../assets/DEMA Team Page/team_daanish_2025_1.jpeg";
import machelImg from "../assets/DEMA Team Page/team_machel_2025_1.png";
import emmadImg from "../assets/DEMA Team Page/team_emmad_2025_1.jpeg";
import braydenImg from "../assets/DEMA Team Page/team_brayden_2025_1.jpeg";
import allinaImg from "../assets/DEMA Team Page/team_allina_2025_1.jpeg";
import vaibhavImg from "../assets/DEMA Team Page/team_vaibhav_2025_1.jpeg";
import jannineImg from "../assets/DEMA Team Page/team_jannine_2025_1.jpeg";
import noorImg from "../assets/DEMA Team Page/team_noor_2025_1.jpeg";
import terenceImg from "../assets/DEMA Team Page/team_terence_2025_1.png";
import zaydImg from "../assets/DEMA Team Page/team_zayd_2025_1.png";
import mahathirImg from "../assets/DEMA Team Page/team_mahathir_2025_1.png";
import farheenImg from "../assets/DEMA Team Page/team_farheen_2025_1.png";

export const teamMembers = [
  {
    id: 1,
    name: "Syeda Rizvi",
    role: "President",
    image: syedaImg,
  },
  {
    id: 2,
    name: "Yasmine Daaboul",
    role: "VP Internal",
    image: yasminImg,
  },
  {
    id: 3,
    name: "Daanish Hussain",
    role: "VP External",
    image: daanishImg,
  },
  {
    id: 4,
    name: "Machel Chalmers Stewart",
    role: "Head of Marketing",
    image: machelImg,
  },
  {
    id: 5,
    name: "Emmad Gilani",
    role: "Graphic Design Director",
    image: emmadImg,
  },
  {
    id: 6,
    name: "Brayden Messier",
    role: "Finance & Logistics Director",
    image: braydenImg,
  },
  {
    id: 7,
    name: "Allina Malik",
    role: "Internal Events Director",
    image: allinaImg,
  },
  {
    id: 8,
    name: "Vaibhav Kaushal",
    role: "External Events Director",
    image: vaibhavImg,
  },
  {
    id: 9,
    name: "Jannine Uy",
    role: "YEC Co-Chair",
    image: jannineImg,
  },
  {
    id: 10,
    name: "Noor Mohamed",
    role: "YEC Co-Chair",
    image: noorImg,
  },
  {
    id: 11,
    name: "Terence Cheng",
    role: "Web Development Director",
    image: terenceImg,
  },
  {
    id: 12,
    name: "Zayd Tauqeer",
    role: "Human Resource Director",
    image: zaydImg,
  },
  {
    id: 13,
    name: "Mahathir Sadat",
    role: "PR & Outreach Director",
    image: mahathirImg,
  },
  {
    id: 14,
    name: "Farheen Babar",
    role: "Research & Innovation Director",
    image: farheenImg,
  },
];

export const getTeamMemberImage = (image) => {
  if (image) {
    return image;
  }
  // Default placeholder image
  return "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop";
};
