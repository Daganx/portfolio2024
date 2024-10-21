import ParisArt from "../assets/images/artparis/artparis.webp";
import SportSee from "../assets/images/sportsee/sportsee.webp";
import LesPetitsPlats from "../assets/images/lespetitsplats/lespetitsplats.webp";
import PomodoroApp from "../assets/images/pomodoro/pomodoro.jpg";
import ToDoListApp from "../assets/images/todolist/todolist.jpg";
import Kasa from "../assets/images/kasa/kasa.webp";

const projectData = [
  {
    src: ParisArt,
    title: "Paris Art",
    description:
      "A sleek, PHP Symfony-powered platform for our art gallery. It offers full CRUD capabilities, allowing the gallery to effortlessly publish, update, and manage its artwork collection. This user-friendly system makes it easy to showcase new paintings and maintain a stunning online gallery.",
    technologies: ["PHP", "SYMFONY"],
    link: "https://github.com/daganx/gallery__symfony",
  },
  {
    src: SportSee,
    title: "SportSee",
    description: "SportSee Description",
    technologies: ["REACT", "RECHARTS"],
    link: "https://github.com/daganx/sportsee",
  },
  {
    src: Kasa,
    title: "Kasa",
    description: "Kasa Description",
    technologies: ["REACT"],
    link: "https://github.com/daganx/kasa",
  },
  {
    src: LesPetitsPlats,
    title: "Les Petits Plats",
    description: "Les Petits Plats Description",
    technologies: ["JS", "CSS"],
    link: "https://github.com/daganx/lespetitsplats",
  },
  {
    src: PomodoroApp,
    title: "Pomodoro",
    description: "Pomodoro Description",
    technologies: ["REACT"],
    link: "https://github.com/daganx/pomodoro-app",
  },
  {
    src: ToDoListApp,
    title: "ToDoList",
    description: "ToDoList Currently in progress",
    technologies: ["REACT", "REDUX", "NODEJS"],
  },
];

export default projectData;
