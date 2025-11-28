import optimisticUiSandbox from "../assets/optimistic-ui-sandbox.png";
import chatApp from "../assets/chatapp.png";
import reactLabMonoStorybook from "../assets/storybook.png";
import authGuardedHub from "../assets/auth-guarded-hub.png";

type Project = {
  title: string;
  desc: string;
  thumbnailImg: string;
  github: string;
  liveLink: string;
  id: number;
  year: number;
};

export const projects: Project[] = [
  {
    title: "Optimistic UI Sandbox",
    desc: "Testing API's failures and latency",
    thumbnailImg: optimisticUiSandbox,
    github:
      "https://github.com/giuseppe-messi/optimistic-ui-sandbox?tab=readme-ov-file",
    liveLink: "https://optimistic-ui-sandbox.netlify.app/",
    id: 1,
    year: 2024
  },
  {
    title: "Chat App",
    desc: "A full-stack, real-time chat platform",
    thumbnailImg: chatApp,
    github: "https://github.com/giuseppe-messi/chatapp?tab=readme-ov-file",
    liveLink: "https://chat-appi.netlify.app/",
    id: 2,
    year: 2025
  },
  {
    title: "React Lab Mono",
    desc: "A design system",
    thumbnailImg: reactLabMonoStorybook,
    github:
      "https://github.com/giuseppe-messi/react-lab-mono?tab=readme-ov-file",
    liveLink:
      "https://storybook-package-ui.netlify.app/?path=/docs/button--docs",
    id: 3,
    year: 2025
  },
  {
    title: "Auth-Guarded Hub",
    desc: "A full-stack, real-time chat platform",
    thumbnailImg: authGuardedHub,
    github:
      "https://github.com/giuseppe-messi/auth-guarded-hub?tab=readme-ov-file",
    liveLink: "https://auth-guarded-hub.netlify.app/login",
    id: 4,
    year: 2025
  }
];
