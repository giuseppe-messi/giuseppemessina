import optimisticUiSandbox from "../assets/optimistic-ui-sandbox.png";
import chatApp from "../assets/chatapp.png";

type Project = {
  title: string;
  desc: string;
  thumbnailImg: string;
  id: number;
  year: number;
};

export const projects: Project[] = [
  {
    title: "Optimistic UI Sandbox",
    desc: "Testing API's failures and latency",
    thumbnailImg: optimisticUiSandbox,
    id: 1,
    year: 2024
  },
  {
    title: "Chat App",
    desc: "A full-stack, real-time chat platform",
    thumbnailImg: chatApp,
    id: 2,
    year: 2025
  },
  {
    title: "React Lab Mono",
    desc: "A design system",
    thumbnailImg: chatApp,
    id: 3,
    year: 2025
  },
  {
    title: "Auth-Guarded Hub",
    desc: "A full-stack, real-time chat platform",
    thumbnailImg: chatApp,
    id: 4,
    year: 2025
  }
];
