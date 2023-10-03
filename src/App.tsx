import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";
import { Cursor } from "./components/Cursor";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";
import { framerMotionConfig } from "./config";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <div className="w-screen h-screen relative">
          <div className="bg-slate-100 backdrop-blur-sm w-screen h-screen absolute">
            <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
              <ScrollControls pages={4} damping={0.1}>
                <ScrollManager section={section} onSectionChange={setSection} />
                <Scroll>
                  <Experience section={section} menuOpened={menuOpened} />
                </Scroll>
                <Scroll html>
                  <Interface />
                </Scroll>
              </ScrollControls>
            </Canvas>
          </div>
        </div>

        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        <Cursor />
      </MotionConfig>
    </>
  );
}

export default App;
