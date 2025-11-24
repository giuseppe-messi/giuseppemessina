import optimisticUiSandbox from "../assets/optimistic-ui-sandbox.png";
import chatApp from "../assets/chatapp.png";

type Project = {
  title: string;
  desc: string;
  thumbnailImg: string;
};

export const projects: Project[] = [
  {
    title: "Optimistic UI Sandbox",
    desc: "Testing API's failures and latency",
    thumbnailImg: optimisticUiSandbox
  },
  {
    title: "Chat App",
    desc: "A full-stack, real-time chat platform",
    thumbnailImg: chatApp
  }
];
