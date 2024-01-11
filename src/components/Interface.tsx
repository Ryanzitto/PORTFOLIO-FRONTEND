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

const FirstPage = () => {
  const [nameIsHovered, setNameIsHovered] = useState<boolean>(false);

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
      <div className="flex w-screen h-screen justify-start items-start lg:items-center lg:justify-center pt-20 lg:p-10 bg-white relative p-10 lg:pl-20">
        <main className="h-fit w-full flex flex-col lg:flex-row justify-center items-center">
          <div className="flex justify-center items-center h-1/2 w-full lg:w-1/2 lg:h-full">
            <div className="flex flex-col">
              {/* <div className="h-full w-full flex justify-start h items-center gap-2 mb-4">
                <div className="w-full flex flex-col text-xl">
                  <span className="font-extrabold text-zinc-800 text-xl md:text-normal lg:text-2xl font-nunito">
                    Ryan Henrique
                  </span>
                  <span className="tracking-widest text-zinc-800 font-normal text-lg md:text-sm font-nunito">
                    Web Developer
                  </span>
                </div>
              </div> */}
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
                  <span className="text-5xl sm:text-8xl text-zinc-800 font-nunito font-black">
                    Developer
                  </span>
                  <div className="mb-[10px] rounded-full w-4 h-4 flex bg-orange-500"></div>
                </div>
                <p className="font-nunito font-bold text-zinc-400 w-[300px] sm:w-[380px] md:w-[600px] text-lg md:text-xl pt-4">
                  Over the last two years I have dedicated myself to learning
                  programming and developing my skills as a fullStack developer
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
                className="hidden lg:flex h-[80px] xl:h-[140px] text-[60px] xl:text-[120px] font-nunito font-black drop-shadow-[10px_5px_15px_rgba(0,0,0,0.045)] text-white"
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
                className="hidden lg:flex h-[80px] xl:h-[140px] text-[60px] xl:text-[120px] font-nunito font-black drop-shadow-[10px_5px_15px_rgba(0,0,0,0.045)] text-white"
              >
                DEVELOP
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
                  delay: 1,
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                }}
                className="hidden lg:flex h-[80px] xl:h-[140px] text-[60px] xl:text-[120px] font-nunito font-black drop-shadow-[10px_5px_15px_rgba(0,0,0,0.045)] text-white"
              >
                MENT
              </motion.span>
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
                            duration: 1,
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
        className="bg-zinc-800 flex flex-col w-full h-full justify-center items-center"
      >
        <div className="w-full h-28 flex justify-center items-center font-black font-sofia">
          <span
            data-testid="projetos"
            className="text-5xl transition-colors duration-[500ms] text-white tracking-wider"
          >
            PROJETOS
          </span>
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

  const [hovered] = useState<boolean>(false);
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
          () => {
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

  return (
    <Section>
      <div className="bg-zinc-800 flex flex-col-reverse lg:flex-row w-full h-screen border-t border-white/60">
        <div className="w-full h-full lg:full lg:h-full flex flex-col p-8 flex justify-center items-center gap-3">
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
            <Button text={"(31) 9 8109-4735"} url={"images/whatsapp.png"} />
            <ButtonCopy value={"(31) 9 8109-4735"} />
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
      className="transition-colors duration-[500ms] bg-zinc-800 font-bold p-2 rounded-md text-white flex gap-2 justify-center items-center"
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
  const { color } = useStoreApp();
  const refButtonGithub = useRef<HTMLButtonElement | null>(null);
  const refButtonSite = useRef<HTMLButtonElement | null>(null);
  const { linkGithub, linkDeploy, desc, url, name } = props;
  const [hovered, setHovered] = useState<boolean>(false);
  const [buttonGithubHovered, setButtonGithubHovered] =
    useState<boolean>(false);
  const [buttonSiteHovered, setButtonSiteHovered] = useState<boolean>(false);

  useEffect(() => {
    if (buttonGithubHovered === true && refButtonGithub.current) {
      refButtonGithub.current.style.backgroundColor = color;
    }
    if (buttonGithubHovered === false && refButtonGithub.current) {
      refButtonGithub.current.style.backgroundColor = "#1b1b1b";
    }
    if (buttonSiteHovered === true && refButtonSite.current) {
      refButtonSite.current.style.backgroundColor = color;
    }
    if (buttonSiteHovered === false && refButtonSite.current) {
      refButtonSite.current.style.backgroundColor = "#1b1b1b";
    }
  }, [buttonGithubHovered, buttonSiteHovered]);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-fit h-fit flex justify-center items-center relative rounded-md"
      data-testid={name}
    >
      <div className="w-[400px] h-[90%] bg-white flex rounded-md ">
        <div className="w-fit h-fit flex justify-center items-center relative rounded-md flex pt-8">
          <img
            src={url}
            className={` w-[90%] ${hovered ? "opacity-80" : null} rounded-md`}
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
                    onMouseLeave={() => setButtonGithubHovered(false)}
                    onMouseEnter={() => setButtonGithubHovered(true)}
                    ref={refButtonGithub}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.1 },
                    }}
                    className="transition-colors duration-[500ms] bg-zinc-800 font-bold p-2 text-white rounded-md flex justify-center items-center text-xs tracking-wider"
                  >
                    <a href={linkGithub} target="_blank">
                      GITHUB
                    </a>
                  </motion.button>
                  <motion.button
                    onMouseLeave={() => setButtonSiteHovered(false)}
                    onMouseEnter={() => setButtonSiteHovered(true)}
                    ref={refButtonSite}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.1 },
                    }}
                    className="transition-colors duration-[500ms] bg-zinc-800 font-bold p-2 text-white rounded-md flex justify-center items-center text-xs tracking-wider"
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
      </div>
    </div>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <FirstPage />
      <AboutSection />
      {/* <SkillSection />
      <ProjectsSection />
      <ContactSection /> */}
    </div>
  );
};
