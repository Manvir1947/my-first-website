import CrimeAndPunishment from "./AllCategorieslist/philosophyPages/crimeAndPunishment";
import AiAndJobs from "./technologyBlogs/aiAndJobs";
import FutureOfWebDevelopment from "./technologyBlogs/futureOfWebDevelopment";
import HowToBecomeBlogger from "./technologyBlogs/howToBecomeBlogger";
import WholeJorneyCs from "./technologyBlogs/wholeJorneyCs";

export default [
  {
    sequence: 1,
    id: 5632646,
    genere: "philosophy",
    date: "Tuesday, May 23, 2023",
    name: "crimeAndPunishment",
    title:
      "Unveiling the Depths of Crime and Punishment: A Journey into Philosophy and Psychology",
    iconImg:
      "https://scrapsfromtheloft.com/wp-content/uploads/2018/04/Crime-and-Punishement-Illustration-by-Stanley-Wyatt.jpg",

    smallDescription:
      "Welcome to our immersive exploration of the intricate relationship between crime and punishment, where the realms of philosophy and psychology intersect to shed light on the complexities of human behavior and societal justice. Crime, as a pervasive element of our collective existence...",
    blog: <CrimeAndPunishment />,
  },
  {
    sequence: 2,
    id: 46324565,
    genere: "technology",
    date: "Tuesday May 23, 2023",
    title:
      "The Rise of AI: How Artificial Intelligence Will Transform Job Opportunities",
    iconImg:
      "https://www.aljazeera.com/wp-content/uploads/2023/03/story_15_final.jpg?resize=1620%2C1080",

    smallDescription:
      "The rapid advancements in Artificial Intelligence (AI) have sparked both excitement and concerns about its impact on the job market. As AI continues to evolve, there is a growing fear that it will replace...",
    blog: <AiAndJobs />,
  },
  {
    sequence: 3,
    id: 7847284,
    genere: "technology",
    date: "Wednesday, May 24, 2023",
    title: "The Future of Web Development: Embracing Innovation",
    iconImg:
      "https://images.unsplash.com/photo-1514428631868-a400b561ff44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",

    smallDescription:
      " Web development has come a long way since the inception of the World Wide Web. As technology continues to evolve at a rapid pace, so does the field of web development. In this blog, we will explore the exciting possibilities and innovations that await the future of web development...",
    blog: <FutureOfWebDevelopment />,
  },
  {
    sequence: 4,
    id: 5682756,
    genere: "technology",

    date: "Wednesday, May 24, 2023",
    title:
      "The Journey of Computer Science and Programming: Exploring the World of Technology",
    iconImg:
      "https://engineering.osu.edu/sites/default/files/styles/coe_large/public/media/1988_students_in_computer_lab_2_3.jpg?itok=3d9TY6aO",
    smallDescription:
      "Computer science and programming have become integral parts of our modern world, shaping the way we communicate, work, and live. This blog takes you on a journey through the fascinating realm of computer science and programming, exploring its history, key concepts, and the impact it has on society...",
    blog: <WholeJorneyCs />,
  },

  {
    sequence: 5,
    id: 465474,
    genere: "technology",
    date: "Thursday, May 25, 2023",
    title: "How to Become a Programmer in 2023: A Comprehensive Guider",
    iconImg:
      "https://eduauraapublic.s3.ap-south-1.amazonaws.com/webassets/images/blogs/how-to-become-a-programmer-in-india.jpg",

    smallDescription:
      "In today's digital age, programming has become an essential skill with vast opportunities for career growth. Whether you're a tech enthusiast or someone looking to switch careers, becoming a programmer can open doors to exciting challenges and lucrative job prospects...",
    blog: <HowToBecomeBlogger />,
  },
];
