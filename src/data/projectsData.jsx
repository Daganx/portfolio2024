import ParisArt from "../assets/images/artparis/artparis.webp";
import SportSee from "../assets/images/sportsee/sportsee.webp";
import LesPetitsPlats from "../assets/images/lespetitsplats/lespetitsplats.webp";
import PomodoroApp from "../assets/images/pomodoro/pomodoro.webp";
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
    src: PomodoroApp,
    title: "Pomodoro",
    description:
      "A Pomodoro app designed to boost productivity by using the Pomodoro technique. It features customizable timers for work and break sessions, helping users stay focused and manage their time effectively. The simple and intuitive interface makes it easy to track progress and maintain a healthy work-life balance.",
    technologies: ["REACT"],
    link: "https://github.com/daganx/pomodoro-app",
  },
  {
    src: SportSee,
    title: "SportSee",
    description:
      "A sports coaching analytics dashboard built with React, designed to provide coaches with insightful performance data through interactive charts and diagrams. The interface allows users to easily visualize key metrics, with data fetched via API integration using libraries like Recharts or D3.n",
    technologies: ["REACT", "RECHARTS", "NODEJS"],
    link: "https://github.com/daganx/sportsee",
  },
  {
    src: Kasa,
    title: "Kasa",
    description:
      "A modern front-end application developed with React and React Router, designed to create a smooth and responsive user experience. The project features dynamic React components, CSS animations, and SASS for enhanced visuals. With efficient routing and data handling from a JSON file, this project highlights clean front-end development based on provided mockups. It was built using Create React App for easy setup, with Node.js running the code outside the browser.",
    technologies: ["REACT"],
    link: "https://github.com/daganx/kasa",
  },
  {
    src: LesPetitsPlats,
    title: "Les Petits Plats",
    description:
      "A recipe search platform project that challenges you to develop an efficient search algorithm using advanced JavaScript techniques. The front-end interface is built with Bootstrap, providing a user-friendly and responsive design for searching recipes",
    technologies: ["JS", "CSS"],
    link: "https://github.com/daganx/les_petits_plats",
  },
  {
    src: ToDoListApp,
    title: "ToDoList",
    description:
      "IN BUILDING. A TodoList app with a Node.js backend for managing CRUD operations. It allows users to easily create, update, and delete tasks, helping them stay organized. With a clean, user-friendly interface, the app provides seamless task management, while the Node.js server ensures efficient data handling and smooth performance.",
    technologies: ["REACT", "REDUX", "NODEJS"],
    link: "https://github.com/daganx/daganx-todolist",
  },
];

export default projectData;
