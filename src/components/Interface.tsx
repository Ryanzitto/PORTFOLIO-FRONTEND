import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useStoreApp } from "../store";
import axios from "axios";

interface CardProps {
  linkGithub: string;
  linkDeploy: string;
  desc: string;
  url: string;
  name: string;
}

interface ButtonProps {
  text: string;
  url: string;
  link?: string;
}

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
    level: 30,
    desc: "O NodeJS é uma ferramenta indispensável de se ter domínio, estou trabalhando para aprimorar minhas habilidades com essa tecnologia, porém já tenho conhecimento suficiente para criar APIS simples no back-end usando NodeJS.",
  },
];

const languages = [
  {
    title: "Português",
    level: 95,
  },
  {
    title: "Inglês",
    level: 35,
  },
  {
    title: "Mineirês",
    level: 100,
  },
];

const projetos = [
  {
    url: "images/projeto1.png",
    desc: "Este projeto se trata de um jogo criado com o ecosistema ThreeJS, o objetivo é coletar as moedas e acumular pontos enquanto se desvia dos obstáculos que te jogam pra fora da plataforma!",
    linkGithub: "https://github.com/Ryanzitto/THREE-IDK",
    linkDeploy: "https://ryanzitto.github.io/THREE-IDK/",
    techs: "THREEJS - R3F - REACT - TAILWIND - ZUSTAND - TYPESCRIPT - JEST",
    id: 1,
    name: "IDK GAME",
  },
  {
    url: "images/projeto2.png",
    desc: "Este projeto se trata um site feito para fãs de rick and morty para revisitar conteúdos relacionados a série, podendo-se obter informações relacionada a personagens, locais, e epsódios.",
    linkGithub: "https://github.com/Ryanzitto/Rickandmorty",
    linkDeploy: "https://rickandmorty-7gm6b9xrx-ryanzitto.vercel.app/",
    techs: "REACT - NEXTJS - TAILWIND - REDUX - TYPESCRIPT - JEST",
    id: 2,
    name: "R-AND-M",
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

const AboutSection = () => {
  const { color } = useStoreApp();

  const colorRef = useRef<HTMLDivElement | null>(null);

  const techs = [
    "REACT",
    "NEXTJS",
    "TYPESCRIPT",
    "R3F",
    "REDUX",
    "ZUSTAND",
    "AXIOS",
    "TAILWIND",
    "STYLED-COMPONENTS",
    "JEST",
    "RTL",
  ];

  const colorRefTechs = techs.map(() => useRef<HTMLDivElement | null>(null));

  useEffect(() => {
    if (colorRef.current) {
      colorRef.current.style.backgroundImage = `linear-gradient(120deg, ${color}, #1b1b1b)`;
      colorRef.current.style.webkitBackgroundClip = "text";
      colorRef.current.style.color = "transparent";
    }
    colorRefTechs.forEach((ref) => {
      if (ref.current) {
        ref.current.style.color = color;
      }
    });
  }, [color, colorRefTechs]);

  return (
    <Section>
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <div className="flex lg:flex-row flex-col w-full h-full justify-center items-center">
          <div
            className={`lg:w-1/2 w-full lg:h-full h-1/2 flex justify-center items-center lg:pl-10 text-zinc-800`}
          >
            <motion.div
              data-testid={"div"}
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
              className="w-full h-full flex justify-center items-center lg:items-start flex-col gap-2"
            >
              <motion.header
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{
                  duration: 1,
                  delay: 0,
                }}
                className=""
              >
                <div className="flex flex-col justify-center text-sm font-black md:text-xl font-sofia ">
                  <span>👋 OLÁ, EU SOU</span>
                  <span>RYAN HENRIQUE</span>
                </div>
              </motion.header>
              <div className="w-full flex flex-col justify-center items-center lg:items-start text-center">
                <motion.div
                  initial={{ x: -100 }}
                  whileInView={{ x: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0,
                  }}
                  className="w-full flex flex-col justify-center items-center lg:items-start text-4xl md:text-5xl font-black lg:mt-4 min-[1350px]:text-6xl"
                >
                  <div className="italic">
                    <h1 className="">DESENVOLVEDOR</h1>
                  </div>
                  <div className="flex gap-2 md:gap-3 2xl:gap-6">
                    <div className="italic">
                      <h1 className="">WEB</h1>
                    </div>
                    <div>
                      <h1 ref={colorRef} className="">
                        FRONT-END
                      </h1>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  data-testid={"about1"}
                  initial={{ x: -100 }}
                  whileInView={{ x: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0,
                  }}
                  className="backdrop-blur-none flex font-sofia flex-col lg:gap-4 overflow-auto w-[80%] min-[1350px]:w-[90%] text-md min-[400px]:text-md min-[450px]:mt-4 md:text-lg lg:text-left font-bold min-[1350px]:text-lg"
                >
                  <p>
                    Sou um jovem desenvolvedor muito criativo, interessado em
                    criar experiências de usuario incríveis, agradáveis,
                    escaláveis <br />e performáticas. Busco o crescimento
                    profissional e pessoal.
                  </p>
                  <p>
                    Possuo habilidade de adaptabilidade, comunicação clara,
                    <br /> e uma intensa vontade de aprender.
                  </p>
                  <p className="lg:text-left">
                    Que tal trabalharmos juntos? 😄
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-1/2 w-full lg:h-full h-1/2 flex justify-center items-center lg:pr-14">
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
              className="w-full h-full flex flex-col items-center justify-start lg:justify-center"
            >
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  delay: 0,
                }}
                className="text-zinc-800 font-bold text-center md:text-center text-md flex flex-col items-center gap-6 lg:gap-0 lg:items-end"
              >
                <p
                  data-testid={"about2"}
                  className="w-[80%] font-sofia min-[1350px]:w-[90%] text-md min-[400px]:text-md  md:text-lg lg:text-right min-[1350px]:text-lg"
                >
                  Há cerca de 10 meses eu venho me dedicando aos estudos de
                  programação 🧑‍💻, sempre aplicando em projetos pessoais os
                  conceitos aprendidos. possuo habilidades no Frontend e
                  conhecimentos básicos de Backend.
                </p>
                <p className="font-sofia mt-4 w-[80%] min-[1350px]:w-[90%] text-md min-[400px]:text-md  md:text-lg lg:text-right min-[1350px]:text-lg">
                  Minha Stack é baseada no React então uso tecnologias como:
                </p>
                <div className="max-w-[500px] flex justify-center lg:justify-end items-center gap-2 flex-wrap break-words font-sofia mt-4 w-[80%] min-[1350px]:w-[90%] text-md min-[400px]:text-md  md:text-lg lg:text-right min-[1350px]:text-lg">
                  {techs.map((tech, index) => {
                    return (
                      <span
                        key={index}
                        className="font-black hover:opacity-60"
                        ref={colorRefTechs[index]}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const SkillSection = () => {
  const { color, skillDisplayed, setSkillDisplayed } = useStoreApp();
  const colorRefsSkills = skills.map(() => useRef<HTMLDivElement | null>(null));
  const colorRefsLangs = languages.map(() =>
    useRef<HTMLDivElement | null>(null)
  );

  const handleClick = (skill: string) => {
    if (skillDisplayed === skill) {
      setSkillDisplayed("");
    } else {
      setSkillDisplayed(skill);
    }
  };

  useEffect(() => {
    colorRefsSkills.forEach((ref) => {
      if (ref.current) {
        ref.current.style.backgroundColor = color;
      }
    });
    colorRefsLangs.forEach((ref) => {
      if (ref.current) {
        ref.current.style.backgroundColor = color;
      }
    });
  }, [color, colorRefsSkills, colorRefsLangs]);

  return (
    <Section>
      <div className="h-full flex w-full gap-20 lg:gap-0 flex-col justify-center items-center text-zinc-800">
        <div className="flex w-full h-full flex-col justify-center items-center">
          <div className="flex flex-col lg:flex-row w-full h-full justify-center items-center gap-10 lg:gap-0">
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
              className="w-1/2 flex flex-col justify-start items-center"
              onMouseLeave={() => setSkillDisplayed("")}
            >
              <h2
                data-testid="HABILIDADES"
                className="font-black text-2xl md:text-4xl"
              >
                HABILIDADES
              </h2>
              <div className="mt-8 space-y-4">
                {skills.map((skill, index) => (
                  <div className="w-64" key={index}>
                    <motion.h3
                      onClick={() => handleClick(skill.title)}
                      className="text-xl font-sofia font-bold cursor-pointer transition-colors hover:text-zinc-800/60"
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
                        className="h-full rounded-full"
                        ref={colorRefsSkills[index]}
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

                    <AnimatePresence>
                      {skillDisplayed === skill.title && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 50,
                            scale: 0.8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0.8,
                          }}
                          transition={{
                            duration: 0.2,
                            delay: 0,
                          }}
                          className="p-4 w-full bg-zinc-700 backdrop-blur-sm mt-4 rounded-md border border-slate-600"
                        >
                          <p className="text-xs font-bold font-sofia text-white/90">
                            {skill.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
              className="w-1/2 flex flex-col justify-center items-center"
            >
              <h2 className="text-2xl font-black md:text-4xl">LÍNGUAS</h2>
              <div className=" mt-8 space-y-4 font-sofia">
                {languages.map((lng, index) => (
                  <div className="w-64" key={index}>
                    <motion.h3
                      className="text-xl font-bold"
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
                      {lng.title}
                    </motion.h3>
                    <div className="h-2 w-full bg-gray-300 rounded-full mt-2">
                      <motion.div
                        ref={colorRefsLangs[index]}
                        className="h-full rounded-full "
                        style={{ width: `${lng.level}%` }}
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
          </div>
        </div>
      </div>
    </Section>
  );
};

const ProjectsSection = () => {
  return (
    <Section>
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
        className="flex flex-col w-full h-full justify-center items-center"
      >
        <div className="w-full h-16 flex justify-center items-center text-zinc-800 text-2xl font-black font-sofia">
          <span data-testid="projetos">PROJETOS</span>
        </div>
        <div className="h-full w-[80%] flex justify-center items-center flex p-8 gap-6 flex-wrap overflow-y-auto lg:overflow-hidden">
          {projetos.map((projeto) => {
            return (
              <Card
                key={projeto.id}
                linkGithub={projeto.linkGithub}
                linkDeploy={projeto.linkDeploy}
                url={projeto.url}
                desc={projeto.desc}
                name={projeto.name}
              />
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  const { color, liked, setLiked } = useStoreApp();

  const ref1 = useRef<HTMLHeadingElement | null>(null);
  const ref2 = useRef<HTMLHeadingElement | null>(null);
  const ref3 = useRef<HTMLHeadingElement | null>(null);
  const ref4 = useRef<HTMLHeadingElement | null>(null);

  const [hovered, setHovered] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string | null>(null);
  const [likes, setLikes] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [message, setMessage] = useState<boolean>(false);

  const like = (): void => {
    setModalIsOpen(true);
    setName(null);
  };

  const cancel = () => {
    setModalIsOpen(false);
    setName(null);
  };

  const confirmaLike = () => {
    if (name !== null) {
      setModalIsOpen(false);
      axios
        .post("https://portfolio-backend-h1cl.onrender.com/api/like", {
          name: name,
        })
        .then(
          (response) => {
            console.log(response);
            setLiked(true);
            showThanks();
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      setErrorMessage("Digite um nome!");
    }
  };

  const showThanks = () => {
    setMessage(true);

    const timeOut = setTimeout(() => {
      setMessage(false);
    }, 5000);

    return () => {
      clearTimeout(timeOut);
    };
  };

  useEffect(() => {
    if (ref1.current) {
      ref1.current.style.color = color;
    }
    if (ref2.current) {
      ref2.current.style.color = color;
    }
    if (ref3.current) {
      ref3.current.style.color = color;
    }
    if (ref4.current) {
      ref4.current.style.color = color;
    }
  }, [color, hovered]);

  useEffect(() => {
    axios.get("https://portfolio-backend-h1cl.onrender.com/api/getAll").then(
      (response) => {
        console.log(response);
        setLikes(response.data.length);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [liked]);

  useEffect(() => {
    setErrorMessage(null);
  }, [name]);

  const tela = window.innerWidth;
  return (
    <Section>
      <div className="flex flex-col-reverse lg:flex-row w-full h-screen">
        <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex justify-center items-end relative">
          <motion.img
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
                delay: 0.6,
              },
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            src="images/foto.png"
            className="grayscale w-[400px] lg:w-[600px] absolute z-10"
          />
          <div className="absolute w-full h-full flex flex-col justify-center items-center pt-10 xl:pt-0">
            <AnimatePresence>
              {hovered === true && (
                <motion.svg
                  initial={{ x: 0, opacity: 0 }}
                  animate={{
                    x: tela > 1024 ? 160 : 120,
                    opacity: 1,
                    rotate: 370,
                  }}
                  exit={{ x: 0, opacity: 0, rotate: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                  }}
                  height="1499"
                  viewBox=".15 .13 799.7 479.69"
                  width="2500"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16"
                >
                  <path
                    d="m400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9-39.98 53.3-86.63 73.29-139.95 59.97-30.41-7.6-52.15-29.67-76.22-54.09-39.2-39.78-84.58-85.82-183.68-85.82zm-199.93 239.84c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z"
                    fill={color}
                  />
                </motion.svg>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {hovered === true && (
                <motion.svg
                  initial={{ x: 0, opacity: 0 }}
                  animate={{
                    x: tela > 1024 ? -90 : -80,
                    opacity: 1,
                    rotate: 360,
                  }}
                  exit={{ x: 0, opacity: 0, rotate: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                  }}
                  height="2500"
                  viewBox="175.7 78 490.6 436.9"
                  width="2194"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16"
                >
                  <g fill={color}>
                    <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
                    <circle cx="420.9" cy="296.5" r="45.7" />
                  </g>
                </motion.svg>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {hovered === true && (
                <motion.svg
                  animate={{
                    x: tela > 1024 ? 230 : 180,
                    opacity: 1,
                    rotate: 370,
                  }}
                  exit={{ x: 0, opacity: 0, rotate: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.6,
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="2500"
                  height="2500"
                  viewBox="0 0 1052 1052"
                  className="w-16 h-16"
                >
                  <path fill={color} d="M0 0h1052v1052H0z" />
                  <path
                    d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
                    fill="#fff"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {hovered === true && (
                <motion.svg
                  animate={{
                    x: tela > 1024 ? -120 : -100,
                    opacity: 1,
                    rotate: 360,
                  }}
                  exit={{ x: 0, opacity: 0, rotate: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.8,
                  }}
                  fill="none"
                  height="2500"
                  width="2500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="27 26 173.23 174.94"
                  className="w-16 h-16"
                >
                  <g
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    stroke={color}
                    stroke-width="4"
                    stroke-miterlimit="10"
                    stroke-linejoin="round"
                  >
                    <path d="M70.213 200.94L27 26l173.23 49.874z" />
                    <path d="M113.583 50.942l21.591 87.496-86.567-24.945z" />
                    <path d="M92.103 125.36L81.379 81.895l43.008 12.346zM70.651 38.483l10.724 43.465-43.008-12.346zM156.663 63.26l10.724 43.465-43.008-12.346zM92.108 125.39l10.724 43.465-43.008-12.346z" />
                  </g>
                </motion.svg>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {hovered === true && (
                <motion.svg
                  animate={{
                    x: tela > 1024 ? 250 : 180,
                    opacity: 1,
                    rotate: 350,
                  }}
                  exit={{ x: 0, opacity: 0, rotate: 0 }}
                  transition={{
                    duration: 1,
                    delay: 1,
                  }}
                  height="2500"
                  viewBox="0 0 640 640"
                  width="2500"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16"
                >
                  <path d="m0 0h640v640h-640z" fill={color} />
                  <path
                    d="m307.3 237h30.7v53h-83v235.8l-2.2.6c-3 .8-42.5.8-51-.1l-6.8-.6v-235.7h-83v-53l26.3-.3c14.4-.2 51.4-.2 82.2 0s69.8.3 86.8.3zm234.3 263.8c-12.2 12.9-25.3 20.1-47.1 26-9.5 2.6-11.1 2.7-32.5 2.6s-23.1-.1-33.5-2.8c-26.9-6.9-48.6-20.4-63.4-39.5-4.2-5.4-11.1-16.6-11.1-18 0-.4 1-1.3 2.3-1.9s4-2.3 6.2-3.6 6.2-3.7 8.9-5.1 10.5-6 17.3-10.1 13-7.4 13.7-7.4 2 1.4 3 3.1c6 10.1 20 23 29.9 27.4 6.1 2.6 19.6 5.5 26.1 5.5 6 0 17-2.6 22.9-5.3 6.3-2.9 9.5-5.8 13.3-11.6 2.6-4.1 2.9-5.2 2.8-13 0-7.2-.4-9.2-2.4-12.5-5.6-9.2-13.2-14-44-27.6-31.8-14.1-46.1-22.5-57.7-33.8-8.6-8.4-10.3-10.7-15.7-21.2-7-13.5-7.9-17.9-8-38-.1-14.1.2-18.7 1.7-23.5 2.1-7.2 8.9-21.1 12-24.6 6.4-7.5 8.7-9.8 13.2-13.5 13.6-11.2 34.8-18.6 55.1-19.3 2.3 0 9.9.4 17 .9 20.4 1.7 34.3 6.7 47.7 17.4 10.1 8 25.4 26.8 23.9 29.3-1 1.5-40.9 28.1-43.5 28.9-1.6.5-2.7-.1-4.9-2.7-13.6-16.3-19.1-19.8-32.3-20.6-9.4-.6-14.4.5-20.7 4.7-6.6 4.4-9.8 11.1-9.8 20.4.1 13.6 5.3 20 24.5 29.5 12.4 6.1 23 11.1 23.8 11.1 1.2 0 26.9 12.8 33.6 16.8 31.2 18.3 43.9 37.1 47.2 69.5 2.4 24.4-4.5 46.7-19.5 62.5z"
                    fill="#fff"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </div>
          <div className="absolute w-full h-full flex flex-col justify-center items-center pt-10 xl:pt-0">
            <AnimatePresence>
              {hovered === true && (
                <motion.svg
                  className="w-8 h-8"
                  initial={{ x: 0, opacity: 0 }}
                  animate={{
                    x: tela > 1024 ? 150 : 150,
                    y: -50,
                    opacity: 1,
                    rotate: 360,
                  }}
                  exit={{ x: 0, opacity: 0, rotate: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                  }}
                  width="2500"
                  height="2383"
                  viewBox="0 0 256 244"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <path
                    d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
                    fill={color}
                  />
                </motion.svg>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {hovered === true && (
                <motion.svg
                  className="w-8 h-8"
                  initial={{ x: 0, opacity: 0 }}
                  animate={{
                    x: tela > 1024 ? -100 : -100,
                    y: -20,
                    opacity: 1,
                    rotate: 360,
                  }}
                  exit={{ x: 0, opacity: 0, rotate: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                  }}
                  height="1024pt"
                  viewBox=".5 -.2 1023 1024.1"
                  width="1024pt"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill={color}
                    d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z"
                  />
                  <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
                </motion.svg>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex flex-col p-8 flex justify-center items-center gap-3">
          <p className="font-sofia font-bold text-zinc-800 text-xl mt-10">
            Deseja em entrar em contato comigo?
          </p>
          <div className="flex gap-4">
            <Button
              text={"ryanhardflip@gmail.com"}
              url={"images/o-email.png"}
            />
            <ButtonCopy value={"ryanhardflip@gmail.com"} />
          </div>
          <div className="flex gap-4">
            <Button text={"(31) 9 8109-8735"} url={"images/whatsapp.png"} />
            <ButtonCopy value={"(31) 9 8109-8735"} />
          </div>

          <p className="font-sofia font-bold text-zinc-800 text-xl mt-10">
            Quer ver mais?
          </p>
          <Button
            text={"VER MEU LINKEDIN"}
            url={"images/linkedin.png"}
            link="https://www.linkedin.com/in/ryan-henrique-1b4075233/"
          />
          <Button
            text={"VER MEU GITHUB"}
            url={"images/github.png"}
            link="https://github.com/Ryanzitto"
          />

          <div className="mt-10 flex gap-2 justify-center items-center relative">
            <p className="font-sofia font-bold text-zinc-800 text-xl ">
              {likes} LIKES
            </p>

            <img
              onClick={() => {
                if (liked === false) {
                  like();
                }
              }}
              className={`w-6 h-6 ${liked === false ? "cursor-pointer" : null}`}
              src={liked ? "images/coracao-cheio.png" : "images/coracao.png"}
            />

            <AnimatePresence>
              {modalIsOpen && (
                <motion.div
                  onChange={(e) =>
                    setName((e.target as HTMLInputElement).value)
                  }
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0,
                  }}
                  onMouseLeave={cancel}
                  className="absolute  border rounded-md border-slate-200 p-4 w-[300px] h-fit bg-white/60 backdrop-blur-sm flex flex-col justify-center items-center gap-4"
                >
                  <label className="font-sofia font-black text-zinc-800 transition-colorss hover:text-zinc-800/80">
                    Qual seu nome?
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="border border-slate-400 text-center"
                    />
                    <button className="bg-zinc-800 text-white p-2 rounded-sm flex">
                      <img
                        onClick={confirmaLike}
                        src="images/seta-direita.png"
                        className="w-4 h-4 transition-all hover:opacity-80"
                      />
                    </button>
                  </div>
                  <span className="pb-2 text-xs">{errorMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence>
            {message && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1,
                  delay: 0,
                }}
                className="text-zinc-800 font-sofia font-bold"
              >
                Obrigado pelo like {name}!
              </motion.span>
            )}
          </AnimatePresence>
          <div className="mt-10 flex gap-2 justify-center items-center">
            <span className="font-sofia text-zinc-300 transition-colors hover:text-zinc-500">
              Ryan Henrique © 2023
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Button = (props: ButtonProps) => {
  const { color } = useStoreApp();

  const ref = useRef<HTMLButtonElement | null>(null);

  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current && hovered === true) {
      ref.current.style.backgroundColor = color;
    }
    if (ref.current && hovered === false) {
      ref.current.style.backgroundColor = "#27272A";
    }
  }, [hovered]);

  const { text, url, link } = props;
  return (
    <motion.button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={ref}
      initial={{ y: 0 }}
      whileHover={{ y: -5 }}
      className="transition-colors bg-zinc-800 font-bold p-2 rounded-md text-white flex gap-2 justify-center items-center"
      value={text}
    >
      <img className="w-5" src={url} />
      <a href={link} target="_blank">
        {text}
      </a>
    </motion.button>
  );
};

const ButtonCopy = (props: { value: string }) => {
  const { color } = useStoreApp();

  const ref = useRef<HTMLButtonElement | null>(null);

  const [hovered, setHovered] = useState<boolean>(false);

  const [click, setClick] = useState<boolean>(false);

  const copy = (value: string) => {
    navigator.clipboard.writeText(value);

    setClick(true);
    const interval = setTimeout(() => {
      setClick(false);
    }, 3000);

    return () => clearTimeout(interval);
  };

  useEffect(() => {
    if (ref.current && hovered === true) {
      ref.current.style.backgroundColor = color;
    }
    if (ref.current && hovered === false) {
      ref.current.style.backgroundColor = "#27272A";
    }
  }, [hovered]);

  const { value } = props;
  return (
    <motion.button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={ref}
      initial={{ y: 0 }}
      whileHover={{ y: -5 }}
      className="relative transition-colors bg-zinc-800 font-bold p-2 rounded-md text-white flex gap-2 justify-center items-center"
      onClick={() => copy(value)}
    >
      <img src="images/interface.png" className="w-6 h-6" />
      <AnimatePresence>
        {click === true && (
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            transition={{
              duration: 0.2,
              delay: 0,
            }}
            className="absolute w-full flex justify-center items-center ml-40"
          >
            <div className="border border-zinc-300 bg-white p-2 rounded-sm w-fit text-zinc-800">
              <span className="font-light">Copiado!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export const Card = (props: CardProps) => {
  const { linkGithub, linkDeploy, desc, url, name } = props;
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-fit h-fit flex justify-center items-center relative rounded-md"
      data-testid={name}
    >
      <img
        src={url}
        className={`w-[300px] lg:w-[400px] ${
          hovered ? "opacity-80" : null
        } rounded-md`}
      />

      <AnimatePresence>
        {hovered === true && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white/60 backdrop-blur-sm absolute w-full h-full flex flex-col justify-center rounded-md items-center"
          >
            <div className="w-full h-fit flex flex justify-center mt-8 gap-2">
              <motion.button
                whileHover={{
                  y: -5,
                  transition: { duration: 0.1 },
                }}
                className="bg-zinc-800 font-bold p-2 text-white rounded-md flex justify-center items-center text-xs tracking-wider"
              >
                <a href={linkGithub} target="_blank">
                  GITHUB
                </a>
              </motion.button>
              <motion.button
                whileHover={{
                  y: -5,
                  transition: { duration: 0.1 },
                }}
                className="bg-zinc-800 font-bold p-2 text-white rounded-md flex justify-center items-center text-xs tracking-wider"
              >
                <a href={linkDeploy} target="_blank">
                  VER SITE
                </a>
              </motion.button>
            </div>

            <motion.div
              initial={{
                y: 100,
              }}
              animate={{ y: 0 }}
              className="w-full h-full p-4 flex flex-col justify-center items-center"
            >
              <p className="text-center p-4 text-xs font-sofia">{desc}</p>
            </motion.div>
            <motion.div className="flex w-full justify-center items-center pb-4">
              <span className="font-sofia font-black tracking-wider text-md text-zinc-800 transition-colors hover:text-zinc-800/80">
                {name}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};
