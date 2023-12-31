import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { ContactShadows } from "@react-three/drei";
import { useStoreApp } from "../store";

export const Experience = (props: { section: number; menuOpened: boolean }) => {
  const { visibility } = useStoreApp();
  const { section, menuOpened } = props;
  const { viewport } = useThree();

  const cameraPositionX = useMotionValue(0);

  const cameraLookAtX = useMotionValue(0);

  useEffect(() => {
    //@ts-ignore
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });

    //@ts-ignore
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();

    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  return (
    <>
      <motion.group
        animate={{
          y: section === 1 ? -viewport.height * 1.3 : -2.5,
        }}
      >
        <ambientLight intensity={0.5} />
        <ContactShadows
          opacity={1}
          scale={20}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <motion.group rotation-y={6.35}>
          {visibility === true ? (
            <Avatar animation={section === 0 ? "Wave" : "Boxe"} />
          ) : null}
        </motion.group>
      </motion.group>
    </>
  );
};
