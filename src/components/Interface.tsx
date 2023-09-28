import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useStoreApp } from "../store";

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
                        className="p-4 w-full bg-zinc-700 backdrop-blur-sm mt-4 rounded-md border border-slate-600"
                      >
                        <p className="text-xs font-bold font-sofia text-white/90">
                          {skill.desc}
                        </p>
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
          <span>PROJETOS</span>
        </div>
        <div className="h-full w-full flex-col justify-center item-center flex flex-wrap p-8 justify-center items-center gap-6">
          {projetos.map((projeto) => {
            return (
              <Card
                key={projeto.id}
                linkGithub={projeto.linkGithub}
                linkDeploy={projeto.linkDeploy}
                url={projeto.url}
                desc={projeto.desc}
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

  const ref = useRef<HTMLButtonElement | null>(null);

  const [hovered, setHovered] = useState<boolean>(false);

  const [likeIsClicked, setLikeIsClicked] = useState<boolean>(false);
  const like = () => {
    setLikeIsClicked(!likeIsClicked);
  };

  useEffect(() => {
    if (ref.current && hovered === true) {
      ref.current.style.backgroundColor = color;
    }
    if (ref.current && hovered === false) {
      ref.current.style.backgroundColor = "#27272A";
    }
  }, [hovered]);

  return (
    <Section>
      <div className="flex w-full h-screen">
        <div className="w-1/2 h-full"></div>
        <div className="w-1/2 h-full flex flex-col p-8 flex justify-center items-center gap-3">
          <p className="font-sofia font-bold text-zinc-800 text-xl mt-10">
            Deseja em entrar em contato comigo?
          </p>
          <Button text={"ME MANDE MENSAGEM"} url={"images/whatsapp.png"} />
          <Button text={"ME MANDE UM EMAIL"} url={"images/o-email.png"} />
          <p className="font-sofia font-bold text-zinc-800 text-xl mt-10">
            Quer ver mais?
          </p>
          <Button text={"VER MEU LINKEDIN"} url={"images/linkedin.png"} />
          <Button text={"VER MEU GITHUB"} url={"images/github.png"} />

          <div className="mt-10 flex gap-2 justify-center items-center">
            <p className="font-sofia font-bold text-zinc-800 text-xl ">
              829 LIKES
            </p>
            <img
              onClick={like}
              className="w-6 h-6 cursor-pointer"
              src={
                likeIsClicked
                  ? "images/coracao.png"
                  : "images/coracao-cheio.png"
              }
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export const Button = (props: any) => {
  const { color } = useStoreApp();

  const ref = useRef<HTMLButtonElement | null>(null);

  const [hovered, setHovered] = useState<boolean>(false);

  const [likeIsClicked, setLikeIsClicked] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current && hovered === true) {
      ref.current.style.backgroundColor = color;
    }
    if (ref.current && hovered === false) {
      ref.current.style.backgroundColor = "#27272A";
    }
  }, [hovered]);

  const { text, url } = props;
  return (
    <motion.button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={ref}
      initial={{ y: 0 }}
      whileHover={{ y: -5 }}
      className="transition-colors bg-zinc-800 font-bold p-2 rounded-md text-white flex gap-2 justify-center items-center"
    >
      <img className="w-5" src={url} />
      {text}
    </motion.button>
  );
};

export const Card = (props: any) => {
  const { linkGithub, linkDeploy, desc, url } = props;
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-fit h-fit flex justify-center items-center relative rounded-md"
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
                <a href={linkGithub} target="blank">
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
                <a href={linkDeploy} target="blank">
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
              <p className="text-center p-4 text-xs lg:text-sm font-sofia">
                {desc}
              </p>
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
