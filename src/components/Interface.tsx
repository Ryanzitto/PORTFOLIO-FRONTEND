import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";

import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";
import {
  SiTestinglibrary,
  SiRedux,
  SiAxios,
  SiExpress,
  SiFramer,
} from "react-icons/si";

interface CardProps {
  projectName: string;
  link: string;
  desc: string;
  year: string;
  bg: string;
}

const projects = [
  {
    name: "R&M Website",
    desc: "Rick and Morty themed website, made for fans, This project allows the user to search for information about the series such as characters, dimensions and locations shown in the series and also information about the episodes.",
    link: "https://rickandmorty-five-pi.vercel.app/",
    year: "2023",
    bg: "bg-RM",
  },
  {
    name: "IDK GAME",
    desc: "IDK GAME is a game made from 3D models, the game mechanics are simple, just survive on the platform and collect as much gold as possible while avoiding some events that will try to knock you down!",
    link: "https://ryanzitto.github.io/THREE-IDK/",
    year: "2023",
    bg: "bg-IDK",
  },
  {
    name: "POSTAGRAM",
    desc: "Website where it is possible to create interactive posts by adding a title, subtitle and an image, it is possible to interact with posts from other users with actions such as commenting and liking.",
    link: "https://postagram-frontend.vercel.app/",
    year: "2023 - 2024",
    bg: "bg-Post",
  },
];

const skills = [
  {
    title: "Threejs / React Three Fiber",
    level: 75,
    desc: "Tenho conhecimento suficiente para criar aplicações parcial ou completamente baseada em modelos 3D, além de compor cenários com diferentes modelos, criar a interação do usuário com os modelos 3D e habilitar customizações.",
  },
  {
    title: "React",
    level: 80,
    desc: "Tenho conhecimento dos fundamentos do React e estou familiarizado com o funcionamente desse framework incrível! tenho experiência em manejar os diversos hooks que a ferramenta disponibiliza e com isso eu consigo criar projetos incríveis.",
  },
  {
    title: "Typescript",
    level: 60,
    desc: "O Typescript é uma ferramenta poderosa, com os tipos é possível criar um software robusto e garantir a qualidade e escalabilidade do código, apesar de ainda estar aprimorando meu conhecimento nessa ferramenta, já me sinto seguro em utilizá-la.",
  },
  {
    title: "Nodejs",
    level: 55,
    desc: "O NodeJS é uma ferramenta indispensável de se ter domínio, estou trabalhando para aprimorar minhas habilidades com essa tecnologia, porém já tenho conhecimento suficiente para criar APIS simples no back-end usando NodeJS.",
  },
];

const Section = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <motion.section
      className="h-screen w-screen max-w-screen-2xl mx-auto flex flex-col items-center justify-center"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

const FirstSection = () => {
  const [nameIsHovered, setNameIsHovered] = useState<boolean>(false);

  return (
    <Section>
      <div className="flex w-screen h-screen justify-start items-start lg:items-center lg:justify-center pt-20 lg:p-10 bg-white relative p-10 lg:pl-20">
        <main className="h-fit w-full flex flex-col lg:flex-row justify-center items-center">
          <div className="flex justify-center items-center h-1/2 w-full lg:w-1/2 lg:h-full">
            <div className="flex flex-col">
              <span
                onMouseEnter={() => setNameIsHovered(true)}
                onMouseLeave={() => setNameIsHovered(false)}
                className="tracking-[3px] text-zinc-400 font-light font-nunito w-fit"
              >
                RYAN HENRIQUE
              </span>
              <div className="flex flex-col gap-2 pt-4">
                <span className="text-5xl sm:text-8xl text-zinc-800 font-nunito font-black">
                  Full Stack
                </span>
                <div className="flex h-fit items-end">
                  <span className="text-5xl sm:text-8xl background-animate bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-nunito font-black">
                    Developer
                  </span>
                </div>
                <p className="font-nunito font-medium text-zinc-400 w-[200px] sm:w-[380px] md:w-[600px] text-lg md:text-xl pt-4">
                  Over the last two years I have dedicated myself to learning
                  programming and developing my skills as a FullStack developer
                  <br />
                  with a focus on frontend.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row h-fit w-full items-start gap-4 pt-10 md:pt-8">
                <span className="cursor-pointer text-md md:text-xl text-zinc-800 font-nunito font-bold  duration-[1500ms] hover:underline hover:opacity-50">
                  View Projects
                </span>
                <div className="hidden sm:flex h-6 w-[0.5px] bg-zinc-800"></div>
                <span className="cursor-pointer text-md md:text-xl text-zinc-800 font-nunito font-bold  duration-[1500ms] hover:underline hover:opacity-50">
                  About Me
                </span>
                <div className="hidden sm:flex h-6 w-[0.5px] bg-zinc-800"></div>
                <span className="cursor-pointer text-md md:text-xl text-zinc-800 font-nunito font-bold  duration-[1500ms] hover:underline hover:opacity-50">
                  Contact
                </span>
              </div>
            </div>
          </div>
          <div className="hidden xl:flex h-1/2 w-full xl:w-1/2 xl:h-full flex-col justify-center items-start relative">
            <AnimatePresence>
              {nameIsHovered ? (
                <>
                  <motion.span
                    initial={{
                      x: -200,
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    exit={{
                      x: -200,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      delay: 0.8,
                      type: "spring",
                      damping: 10,
                      stiffness: 100,
                    }}
                    className="pl-20 hidden lg:flex h-[80px] xl:h-[140px] text-[60px] xl:text-[100px] font-nunito font-black drop-shadow-[10px_5px_15px_rgba(0,0,0,0.045)] text-white"
                  >
                    SOFTWARE
                  </motion.span>
                  <motion.span
                    initial={{
                      x: -200,
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    exit={{
                      x: -200,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      delay: 0.9,
                      type: "spring",
                      damping: 10,
                      stiffness: 100,
                    }}
                    className="pl-20 hidden lg:flex h-[80px] xl:h-[140px] text-[60px] xl:text-[100px] font-nunito font-black drop-shadow-[10px_5px_15px_rgba(0,0,0,0.045)] text-white"
                  >
                    DEVELOPMENT
                  </motion.span>
                </>
              ) : null}
            </AnimatePresence>
            <div className="absolute w-full h-full flex justify-end items-center">
              <AnimatePresence>
                {nameIsHovered && (
                  <motion.img
                    initial={{
                      opacity: 0,
                      y: 50,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                    }}
                    className="w-[500px] hidden lg:flex z-10"
                    src="images/image_example.png"
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </main>
      </div>
    </Section>
  );
};

const SecondSection = () => {
  return (
    <div className="w-screen h-screen-2xl justify-start items-start flex bg-white">
      <div className="w-full h-full p-10 flex flex-col items-start justify-center">
        <span className="pl-16 tracking-[3px] text-zinc-400 font-light font-nunito w-fit">
          PERSONAL PROJECTS
        </span>
        <div className="w-full h-fit p-10 flex justify-center items-center gap-10 flex-wrap">
          {projects.map((item) => {
            return (
              <Card
                key={item.name}
                projectName={item.name}
                desc={item.desc}
                link={item.link}
                year={item.year}
                bg={item.bg}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ThirdSection = () => {
  return (
    <div className="w-screen h-screen-2xl justify-center items-center flex bg-white flex flex-col ">
      <div className="w-[50%] h-[1px] bg-zinc-200"></div>
      <div className="flex flex-col w-full h-full justify-center items-center pt-12">
        <span className="tracking-[3px] text-zinc-400 font-light font-nunito w-fit">
          ABOUT ME
        </span>
        <span className="font-nunito text-5xl font-extrabold text-zinc-800 w-[75%] text-center pt-6">
          I'm Ryan Henrique, I'm a FullStack developer focused on the{" "}
          <strong className="background-animate bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Frontend
          </strong>{" "}
          and I use the MERN stack to develop incredible, performant and
          responsive projects.
        </span>
        <span className="font-nunito text-2xl font-medium text-zinc-400 w-[65%] text-center pt-6">
          I have dedicated myself to studying web development for almost 2
          years, creating, experimenting, failing but always evolving as a
          developer. and here I am.
        </span>
        <div className="w-full flex h-fit mt-10">
          <motion.div
            whileInView={"visible"}
            initial={{
              opacity: 0,
            }}
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 0,
                },
              },
            }}
            className="w-1/2 flex flex-col justify-start items-center py-10"
          >
            <span className="w-fit pl-36 tracking-[3px] text-zinc-400 font-light font-nunito">
              SKILLS
            </span>
            <div className="pl-36 mt-10 space-y-4 flex flex-col justify-center items-center">
              {skills.map((skill, index) => (
                <div className="w-64" key={index}>
                  <motion.h3
                    className="text-xl font-nunito font-bold text-zinc-500"
                    initial={{
                      opacity: 0,
                    }}
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 1,
                          delay: 0.2,
                        },
                      },
                    }}
                  >
                    {skill.title}
                  </motion.h3>
                  <div className="h-2 w-full bg-gray-300 rounded-full mt-2 flex justify-start">
                    <motion.div
                      className="h-full rounded-full bg-zinc-800"
                      style={{ width: `${skill.level}%` }}
                      initial={{
                        scaleX: 0,
                        originX: 0,
                      }}
                      variants={{
                        visible: {
                          scaleX: 1,
                          transition: {
                            duration: 1,
                            delay: 0.2,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            whileInView={"visible"}
            initial={{
              opacity: 0,
            }}
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 0,
                },
              },
            }}
            className="w-1/2 flex flex-col justify-start items-center py-10"
          >
            <span className="w-fit pr-36 tracking-[3px] text-zinc-400 font-light font-nunito">
              TECH STACK
            </span>
            <div className="mr-36 mt-10 flex w-1/2 h-fit justify-center items-center gap-2 flex-wrap">
              <span className="font-nunito text-zinc-500 text-xl font-bold">
                REACT
              </span>
              <span className="font-nunito text-zinc-500 text-xl font-bold">
                NEXTJS
              </span>
              <span className="font-nunito text-zinc-500 text-xl font-bold">
                THREEJS
              </span>
              <span className="font-nunito text-zinc-500 text-xl font-bold">
                REDUX
              </span>
              <span className="font-nunito text-zinc-500 text-xl font-bold">
                ZUSTAND
              </span>
              <span className="font-nunito text-zinc-500 text-xl font-bold">
                NODEJS
              </span>
              <span className="font-nunito text-zinc-500 text-xl font-bold">
                EXPRESS
              </span>
              <span className="font-nunito text-zinc-500 text-xl font-bold">
                MONGODB
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Card = (props: CardProps) => {
  const { projectName, link, desc, year, bg } = props;
  const [cardIsHovered, setCardIsHovered] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setCardIsHovered(true)}
      onMouseLeave={() => setCardIsHovered(false)}
      className={`${bg} flex flex-col gap-2 justify-center items-center relative`}
    >
      <div
        className={`${
          cardIsHovered
            ? "bg-zinc-800/95 backdrop-blur-sm"
            : "bg-zinc-800 backdrop-blur-sm"
        } w-[500px] p-8 h-[400px]  flex flex-col items-center justify-center transition-all duration-[1500ms]`}
      >
        <AnimatePresence>
          {cardIsHovered ? null : (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.3,
                  type: "spring",
                  damping: 10,
                  duration: 0.2,
                  stiffness: 100,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  delay: 0.3,
                  type: "spring",
                  damping: 10,
                  duration: 0.2,
                  stiffness: 100,
                },
              }}
              className={`flex flex-col gap-2 justify-center items-center absolute`}
            >
              <span className="tracking-[3px] text-white font-light font-nunito w-fit">
                {year}
              </span>
              <span className="font-nunito text-4xl font-bold text-white">
                {projectName}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {cardIsHovered ? (
            <motion.div
              initial={{
                y: -200,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  type: "spring",
                  damping: 10,
                  duration: 0.2,
                  stiffness: 100,
                },
              }}
              exit={{
                y: -200,
                opacity: 0,
                transition: {
                  delay: 0.3,
                  type: "spring",
                  damping: 10,
                  duration: 0.2,
                  stiffness: 100,
                },
              }}
              className="flex flex-col justify-center items-center"
            >
              {projectName === "R&M Website" && (
                <div className="w-full h-10 flex gap-2 text-white justify-center items-center">
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <FaReact className="text-2xl" />
                  </motion.div>
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <TbBrandNextjs className="text-2xl" />
                  </motion.div>
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <BiLogoTypescript className="text-2xl" />
                  </motion.div>
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <SiTestinglibrary className="text-2xl" />
                  </motion.div>
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <SiTailwindcss className="text-2xl" />
                  </motion.div>
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <SiRedux className="text-2xl" />
                  </motion.div>
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <SiAxios className="text-2xl" />
                  </motion.div>
                </div>
              )}
              {projectName === "IDK GAME" && (
                <div className="w-full h-10 flex gap-2 text-white justify-center items-center">
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <FaReact className="text-2xl" />
                  </motion.div>
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <TbBrandThreejs className="text-2xl" />
                  </motion.div>
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <BiLogoTypescript className="text-2xl" />
                  </motion.div>
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <SiTailwindcss className="text-2xl" />
                  </motion.div>
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <SiFramer className="text-2xl" />
                  </motion.div>
                </div>
              )}
              {projectName === "POSTAGRAM" && (
                <div className="w-full h-10 flex gap-2 text-white justify-center items-center">
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <FaReact className="text-2xl" />
                  </motion.div>
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <BiLogoTypescript className="text-2xl" />
                  </motion.div>
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <SiFramer className="text-2xl" />
                  </motion.div>
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <SiTailwindcss className="text-2xl" />
                  </motion.div>
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <SiAxios className="text-2xl" />
                  </motion.div>
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <FaNodeJs className="text-2xl" />
                  </motion.div>
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <SiExpress className="text-2xl" />
                  </motion.div>
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <BiLogoMongodb className="text-2xl" />
                  </motion.div>
                </div>
              )}
              <p className="font-nunito w-[90%] text-white font-medium pt-4">
                {desc}
              </p>
              <div className="w-fit transition-all duration-[1500ms] hover:opacity-50 flex items-center gap-4">
                <a
                  href={link}
                  target="blank"
                  className="pt-4 cursor-pointer text-white font-nunito font-bold text-2xl"
                >
                  View Project
                </a>
                <img src="images/seta.png" className="w-6 h-fit pt-4" />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};
export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};
