import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useStoreApp } from "../store";

const skills = [
  {
    title: "Threejs / React Three Fiber",
    level: 75,
    desc: "Desde que tive contato com o ecosistema ThreeJS eu me apaixonei, tenho conhecimento básico relacionado e com isso consigo criar cenas com modelos 3D, adcionar animações e interações com os  usuarios, customizações e mais.",
  },
  {
    title: "React",
    level: 80,
    desc: "Conheci o react e não muito tempo mas já estou familiarizado com o funcionamente desse framework incrível! tenho experîencia em manejar os diversos hooks que a ferramenta disponibiliza e com isso eu consigo criar coisas fantásticas.",
  },
  {
    title: "Typescript",
    level: 60,
    desc: "O Typescript é uma ferramenta poderosa, com os tipos é possível criar um software robusto e garantir a qualidade e escalabilidade do código, apesar de ainda estar aprimorando meu conhecimento nessa ferramenta, já me sinto seguro em utilizá-la.",
  },
  {
    title: "Nodejs",
    level: 40,
    desc: "O node é um mundo pelo qual ainda preciso explorar com mais afinco, porém sei o básico de como usá-lo para criar APIS simples.",
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
    id: 0,
    name: "IDK GAME",
  },
  {
    url: "images/projeto2.png",
    desc: "Este projeto se trata um site feito para fãs de rick and morty para revisitar conteúdos relacionados a série, podendo-se obter informações relacionada a personagens, locais, e epsódios.",
    linkGithub: "https://github.com/Ryanzitto/Rickandmorty",
    linkDeploy: "https://rickandmorty-7gm6b9xrx-ryanzitto.vercel.app/",
    techs: "REACT - NEXTJS - TAILWIND - REDUX - TYPESCRIPT - JEST",
    id: 1,
    name: "R-AND-M",
  },
];

const Section = (props: any) => {
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
  const { color }: any = useStoreApp();

  const [likeIsClicked, setLikeIsClicked] = useState<boolean>(false);

  const colorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (colorRef.current) {
      colorRef.current.style.backgroundImage = `linear-gradient(120deg, ${color}, #1b1b1b)`;
      colorRef.current.style.webkitBackgroundClip = "text";
      colorRef.current.style.color = "transparent";
    }
  }, [color]);

  const like = () => {
    setLikeIsClicked(!likeIsClicked);
  };

  return (
    <Section>
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <div className="flex lg:flex-row flex-col w-full h-full justify-center items-center">
          <div className="lg:w-1/2 w-full lg:h-full h-1/2 flex justify-center items-center lg:pl-10 text-white">
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
                <div className="flex flex-col justify-center text-sm font-black md:text-xl">
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
                  className="flex flex-col lg:gap-4 overflow-auto w-[80%] min-[1350px]:w-[90%] text-md min-[400px]:text-md min-[450px]:mt-4 md:text-lg lg:text-left font-medium min-[1350px]:text-lg"
                >
                  <p>
                    Sou um jovem desenvolvedor muito criativo, interessado em
                    criar experiências de usuario incríveis, agradáveis,
                    escaláveis <br />e performáticas. Busco o crescimento
                    profissional e pessoal.
                  </p>
                  <p>
                    possuo habilidade de adaptabilidade, comunicação clara,
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
                className="text-white font-medium text-center md:text-center text-md flex flex-col items-center gap-6 lg:gap-0 lg:items-end"
              >
                <p
                  data-testid={"about2"}
                  className="w-[80%] min-[1350px]:w-[90%] text-md min-[400px]:text-md  md:text-lg lg:text-right min-[1350px]:text-lg"
                >
                  Há cerca de 10 meses eu venho me dedicando aos estudos de
                  programação 🧑‍💻, sempre aplicando em projetos pessoais os
                  conceitos aprendidos. possuo habilidades no Frontend e
                  conhecimentos básicos de Backend.
                </p>
                <motion.div className="pt-4 lg:pt-12 flex flex-col items-center lg:items-end justify-center gap-4 lg:gap-6 font-extrabold">
                  <motion.button
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.5 },
                    }}
                    className="text-xs xl:text-xl md:text-lg bg-white p-3 text-zinc-700 rounded-md flex gap-2 tracking-wide justify-center items-center"
                  >
                    <a
                      href="https://www.linkedin.com/in/ryan-henrique-1b4075233/"
                      target="blank"
                    >
                      VER MEU LINKEDIN
                    </a>
                    <img className="w-6 opacity-80" src="images/linkedin.png" />
                  </motion.button>
                  <motion.button
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.5 },
                    }}
                    className="text-xs xl:text-xl md:text-lg bg-white p-3 text-zinc-700 rounded-md flex gap-2 tracking-wide justify-center items-center"
                  >
                    <a href="https://github.com/Ryanzitto/" target="blank">
                      VER MEU GITHUB
                    </a>
                    <img className="w-6 opacity-80" src="images/github.png" />
                  </motion.button>

                  <div className="flex flex-col md:text-2xl xl:text-2xl items-center justify-center gap-2  text-lg lg:text-xl">
                    <div className="flex items-center gap-2 ">
                      <img
                        onClick={like}
                        className="w-6 h-6 cursor-pointer"
                        src={
                          likeIsClicked === false
                            ? "images/heart.png"
                            : "images/heart-filled.png"
                        }
                      />
                      <span>432 LIKES</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const SkillSection = () => {
  const { color, skillDisplayed, setSkillDisplayed }: any = useStoreApp();
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
      <div className="h-full flex w-full gap-20 lg:gap-0 flex-col justify-center items-center text-white">
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
                className="font-bold text-2xl md:text-4xl"
              >
                HABILIDADES
              </h2>
              <div className="mt-8 space-y-4">
                {skills.map((skill, index) => (
                  <div className="w-64" key={index}>
                    <motion.h3
                      onClick={() => handleClick(skill.title)}
                      className="text-xl font-bold cursor-pointer transition-colors hover:text-white/60"
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
                    <div className="h-2 w-full bg-gray-200 rounded-full mt-2 flex justify-start">
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
                    {skillDisplayed === skill.title && (
                      <motion.div
                        whileInView={"visible"}
                        initial={{
                          opacity: 0,
                          y: 50,
                          scale: 0.9,
                        }}
                        variants={{
                          visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                              duration: 0.2,
                              delay: 0,
                            },
                          },
                        }}
                        className="p-4 w-full bg-white/10 backdrop-blur-sm mt-4 rounded-md border border-slate-300/30"
                      >
                        <p className="text-xs font-bold">{skill.desc}</p>
                      </motion.div>
                    )}
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
              <h2 className="text-2xl font-bold md:text-4xl">LÍNGUAS</h2>
              <div className=" mt-8 space-y-4">
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
                    <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
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
        <div className="w-[95%] flex justify-center items-center text-white text-xl font-extrabold tracking-wider">
          <span>PROJETOS</span>
        </div>
        <div className="w-[95%] h-[90%] flex justify-center items-center lg:flex-row flex-col">
          {projetos.map((item) => {
            return (
              <Card
                url={item.url}
                desc={item.desc}
                linkGithub={item.linkGithub}
                linkDeploy={item.linkDeploy}
                techs={item.techs}
                name={item.name}
              />
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  const { color } = useStoreApp();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.backgroundColor = color;
    }
  }, [color]);
  return (
    <Section>
      <div className="bg-white/10 backdrop-blur-sm w-full h-full flex">
        <div className="w-1/2 h-full  flex justify-center items-center">
          <div className="flex items-center justify-center min-h-screen">
            <div className="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-6 break-words border shadow-2xl bg-zinc-800 border-zinc-300 md:max-w-sm rounded-xl">
              <div className="pb-6">
                <div className="flex flex-wrap justify-center">
                  <div className="flex justify-center w-full">
                    <div className="relative">
                      <img
                        src="https://source.unsplash.com/jmURdhtm7Ng/120x120"
                        className="shadow-xl border-zinc-800 rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-2 mt-20 text-center">
                  <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-300">
                    Ryan Henrique
                  </h3>
                  <div className="flex flex-row justify-center items-center w-full mx-auto space-x-2 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>

                    <div className="text-sm font-bold tracking-wide text-gray-300 font-mono text-xl">
                      Desenvolvedor Front-end
                    </div>
                  </div>
                  <div className="w-full text-center">
                    <div className="flex justify-center pt-8 pb-0 lg:pt-4">
                      <div className="flex space-x-2">
                        <a
                          className="p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                          href="https://www.github.com/Smilesharks"
                          rel="noopener"
                          aria-label="Ariel Cerda on Github"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6 overflow-visible fill-current"
                            aria-hidden="true"
                            viewBox="0 0 140 140"
                          >
                            <path d="M70 1.633a70 70 0 00-21.7 136.559h1.692a5.833 5.833 0 006.183-6.184v-1.225-6.358a2.917 2.917 0 00-1.167-1.925 2.917 2.917 0 00-2.45-.583C36.925 125.3 33.6 115.5 33.367 114.858a27.067 27.067 0 00-10.034-12.775 6.767 6.767 0 00-.875-.641 3.675 3.675 0 012.217-.409 8.575 8.575 0 016.708 5.134 17.5 17.5 0 0023.334 6.766 2.917 2.917 0 001.691-2.1 11.667 11.667 0 013.267-7.175 2.917 2.917 0 00-1.575-5.075c-13.825-1.575-27.942-6.416-27.942-30.275a23.333 23.333 0 016.125-16.216A2.917 2.917 0 0036.808 49a20.533 20.533 0 01.059-14 32.317 32.317 0 0114.7 6.708 2.858 2.858 0 002.45.409A61.892 61.892 0 0170 39.958a61.075 61.075 0 0116.042 2.159 2.858 2.858 0 002.391-.409 32.608 32.608 0 0114.7-6.708 20.825 20.825 0 010 13.883 2.917 2.917 0 00.525 3.092 23.333 23.333 0 016.125 16.042c0 23.858-14.175 28.641-28.058 30.216a2.917 2.917 0 00-1.575 5.134 12.833 12.833 0 013.558 10.15v18.55a6.183 6.183 0 002.1 4.841 7 7 0 006.184 1.109A70 70 0 0070 1.633z"></path>
                          </svg>
                        </a>

                        <a
                          className="p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                          href="https://www.linkedin.com/in/arielcerdahernandez/"
                          rel="noopener"
                          aria-label="Ariel Cerda on Linkedin"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6 overflow-visible fill-current"
                            aria-hidden="true"
                            viewBox="0 0 140 140"
                          >
                            <path d="M23.4 44.59h-4.75a12.76 12.76 0 00-9.73 2.19 9.44 9.44 0 00-2.35 7.12V131a9.08 9.08 0 002.3 7 9.24 9.24 0 006.82 2c2.22 0 4.15-.21 8.24-.06a12 12 0 009.25-2 9.1 9.1 0 002.29-7V53.9a9.44 9.44 0 00-2.34-7.12 12.68 12.68 0 00-9.73-2.19zM21 0A16.19 16.19 0 005.09 15.6 16.52 16.52 0 0021 31.86 16.12 16.12 0 0037 15.6 16.18 16.18 0 0021 0zM99.74 43.63a31.09 31.09 0 00-20.93 6.3A7.25 7.25 0 0077 46.34a6.08 6.08 0 00-4.52-1.78 119.08 119.08 0 00-15 .3c-4.16.84-6.18 3.79-6.18 9V131a9.14 9.14 0 002.28 7 12.06 12.06 0 009.26 2c4.47-.17 5.74.06 8.22.06a9.26 9.26 0 006.83-2 9.12 9.12 0 002.3-7V89.88A12.48 12.48 0 0192.93 76 12.44 12.44 0 01106 89.88V131a9.1 9.1 0 002.29 7 12 12 0 009.24 2c1.83-.07 4-.07 5.8 0a12.09 12.09 0 009.26-2 9.14 9.14 0 002.28-7V78.32a33.07 33.07 0 00-35.13-34.69z"></path>
                          </svg>
                        </a>

                        <a
                          className="p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                          href="https://www.instagram.com/smilesharks"
                          rel="noopener"
                          aria-label="Ariel Cerda on Instagram"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6 overflow-visible fill-current"
                            aria-hidden="true"
                            viewBox="0 0 140 140"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M73.1735 2C89.9405 2 92.3831 2.0897 99.4487 2.414C106.79 2.7521 111.807 3.9182 116.195 5.6225C120.801 7.35353 124.973 10.0686 128.422 13.5782C131.931 17.0266 134.646 21.1993 136.378 25.805C138.082 30.1934 139.248 35.2097 139.586 42.5513C139.917 49.9136 140 52.2596 140 71V71.552C140 89.7887 139.917 92.1623 139.586 99.4487C139.248 106.79 138.082 111.807 136.378 116.195C134.646 120.801 131.931 124.973 128.422 128.422C124.973 131.931 120.801 134.646 116.195 136.378C111.807 138.082 106.79 139.248 99.4487 139.586C92.0864 139.917 89.7404 140 71 140H70.448C52.2113 140 49.8377 139.917 42.5513 139.586C35.2097 139.248 30.1934 138.082 25.805 136.378C21.1993 134.646 17.0266 131.931 13.5782 128.422C10.0686 124.973 7.35353 120.801 5.6225 116.195C3.9182 111.807 2.7521 106.79 2.414 99.4487C2.0897 92.3831 2 89.9336 2 73.1735V68.8265C2 52.0595 2.0897 49.6169 2.414 42.5513C2.7521 35.2097 3.9182 30.1934 5.6225 25.805C7.35353 21.1993 10.0686 17.0266 13.5782 13.5782C17.0266 10.0686 21.1993 7.35353 25.805 5.6225C30.1934 3.9182 35.2097 2.7521 42.5513 2.414C49.6169 2.0897 52.0664 2 68.8265 2H73.1735V2ZM72.6146 14.4338H69.3854C52.439 14.4338 50.1758 14.5097 43.1171 14.834C36.3896 15.1445 32.7395 16.2623 30.3038 17.2076C27.0815 18.4634 24.7838 19.9538 22.3688 22.3688C19.9538 24.7838 18.4634 27.0815 17.2076 30.3038C16.2623 32.7395 15.1376 36.3896 14.834 43.1171C14.5097 50.1758 14.4338 52.439 14.4338 69.3854V72.6146C14.4338 89.561 14.5097 91.8242 14.834 98.8829C15.1445 105.61 16.2623 109.261 17.2076 111.696C18.4634 114.912 19.9607 117.216 22.3688 119.631C24.7838 122.046 27.0815 123.537 30.3038 124.792C32.7395 125.738 36.3896 126.862 43.1171 127.166C50.3897 127.497 52.5701 127.566 71 127.566H71.552C89.4713 127.566 91.6793 127.497 98.876 127.166C105.61 126.855 109.261 125.738 111.696 124.792C114.912 123.537 117.216 122.046 119.631 119.631C122.046 117.216 123.537 114.919 124.792 111.696C125.738 109.261 126.862 105.61 127.166 98.8829C127.497 91.6034 127.566 89.4299 127.566 71V70.448C127.566 52.5287 127.497 50.3207 127.166 43.124C126.855 36.3896 125.738 32.7395 124.792 30.3038C123.687 27.3062 121.923 24.5947 119.631 22.3688C117.405 20.077 114.694 18.3134 111.696 17.2076C109.261 16.2623 105.61 15.1376 98.8829 14.834C91.8242 14.5097 89.561 14.4338 72.6146 14.4338ZM71 35.5685C75.6529 35.5685 80.2603 36.485 84.559 38.2656C88.8578 40.0462 92.7637 42.656 96.0539 45.9461C99.344 49.2363 101.954 53.1422 103.734 57.441C105.515 61.7397 106.432 66.3471 106.432 71C106.432 75.6529 105.515 80.2603 103.734 84.559C101.954 88.8578 99.344 92.7637 96.0539 96.0539C92.7637 99.344 88.8578 101.954 84.559 103.734C80.2603 105.515 75.6529 106.432 71 106.432C61.603 106.432 52.5908 102.699 45.9461 96.0539C39.3015 89.4092 35.5685 80.397 35.5685 71C35.5685 61.603 39.3015 52.5908 45.9461 45.9461C52.5908 39.3015 61.603 35.5685 71 35.5685V35.5685ZM71 48.0023C64.9006 48.0023 59.0511 50.4253 54.7382 54.7382C50.4253 59.0511 48.0023 64.9006 48.0023 71C48.0023 77.0994 50.4253 82.9489 54.7382 87.2618C59.0511 91.5747 64.9006 93.9977 71 93.9977C77.0994 93.9977 82.9489 91.5747 87.2618 87.2618C91.5747 82.9489 93.9977 77.0994 93.9977 71C93.9977 64.9006 91.5747 59.0511 87.2618 54.7382C82.9489 50.4253 77.0994 48.0023 71 48.0023V48.0023ZM107.832 25.8878C110.028 25.8878 112.134 26.7602 113.687 28.313C115.24 29.8658 116.112 31.9718 116.112 34.1678C116.112 36.3638 115.24 38.4698 113.687 40.0226C112.134 41.5754 110.028 42.4478 107.832 42.4478C105.636 42.4478 103.53 41.5754 101.977 40.0226C100.425 38.4698 99.5522 36.3638 99.5522 34.1678C99.5522 31.9718 100.425 29.8658 101.977 28.313C103.53 26.7602 105.636 25.8878 107.832 25.8878Z"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-6">
                      <p className="mb-4 font-light leading-relaxed text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin turpis orci, maximus sed purus a, cursus
                        scelerisque purus. Morbi molestie, odio at sagittis
                        rhoncus, felis massa iaculis mi, quis molestie erat
                        ipsum vel risus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full"></div>
      </div>
    </Section>
  );
};

export const Card = (props: any) => {
  const { url, desc, linkGithub, linkDeploy, techs, name } = props;

  const [hovered, setHovered] = useState<boolean>(false);

  const ref = useRef<HTMLButtonElement | null>(null);

  const { color }: any = useStoreApp();

  useEffect(() => {
    if (ref.current) {
      ref.current.style.backgroundColor = color;
      ref.current.style.border = `2px solid ${color}`;
    }
  }, [color, hovered]);

  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.1 },
      }}
      className="w-full h-fit lg:h-full flex flex-col justify-center items-center lg:justify-center lg:items-center"
      data-testid={name}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <div className="mt-10 z-20 bg-white w-[100%] lg:w-[80%] h-fit lg:h-fit lg:max-h-[650px] rounded-md flex lg:flex-col justify-center gap-4 border border-slate-300/10">
        <div
          onMouseOver={() => setHovered(true)}
          className="w-full h-full relative flex flex-row h-fit lg:flex-col"
        >
          <motion.img
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1 }}
            className={"rounded-md w-fit h-fit"}
            src={url}
          />
          {hovered === true && (
            <motion.div className="absolute w-full h-10 flex mt-4 gap-4 justify-center items-center">
              <motion.button
                initial={{ y: 0 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.5 },
                }}
                className="border-2 border-white p-1 px-2 rounded-md"
              >
                <a
                  href={linkGithub}
                  data-testid={linkGithub}
                  target="_blank"
                  className="text-white font-black text-sm tracking-wider "
                >
                  GITHUB
                </a>
              </motion.button>

              <motion.button
                initial={{ y: 0 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.5 },
                }}
                className=" border-2 border-zinc-800 bg-zinc-800 p-1 px-2 rounded-md"
                ref={ref}
              >
                <a
                  href={linkDeploy}
                  data-testid={linkDeploy}
                  target="_blank"
                  className="text-white font-black text-xs tracking-wider"
                >
                  VER SITE
                </a>
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
      {hovered === true && (
        <motion.div
          initial={{ y: -200 }}
          whileInView={{ y: 0 }}
          className="bg-white h-fit w-[100%] lg:w-[80%] mt-2 rounded-md p-4"
        >
          <div className="w-full h-full text-zinc-800 flex justify-center items-center font-medium text-xs lg:text-sm">
            <p className="w-[80%] text-center">{desc}</p>
          </div>
        </motion.div>
      )}
    </motion.div>
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
