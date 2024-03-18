import { useState, useContext, memo, createContext } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Stars, Stats } from "@react-three/drei";

import { random } from "lodash";

import { Tree1, Tree2, Tree3 } from "./models/Tree";
import { House } from "./models/House";
import { Car } from "./models/Car";
import { Carriage } from "./models/Carriage";

import Grass from "./components/Grass";
import Moon from "./components/Moon";
import Camera from "./components/Camera";
import FocusObjectControls from "./components/FocusObjectControls";

const FocusContext = createContext();

export const useFocusContext = () => {
  const context = useContext(FocusContext);
  if (!context) {
    throw new Error("useFocusContext has to be used within a context boundary");
  }
  return context;
};

function generateTrees({ n, span, lim }) {
  const treeTypes = [Tree1, Tree2, Tree3];
  let array = [];

  for (let i = 0; i < n; i++) {
    let x,
      z,
      bad = true;

    while (bad) {
      x = random(-span, span, false);
      z = random(-span, span, false);
      bad = Math.abs(x) <= 15 && Math.abs(z) <= 15;

      for (let i = 0; i < array.length; i++) {
        const xp = array[i].position[0];
        const zp = array[i].position[2];

        if (Math.abs(x - xp) < lim && Math.abs(z - zp) < lim) {
          bad = true;
        }
      }
    }

    array.push({
      position: [x, 0, z],
      Component: treeTypes[random(0, 2, false)],
    });
  }

  return array;
}

const trees = generateTrees({
  n: 200,
  span: 60,
  lim: 5,
});

const MemoCanvas = memo(() => {
  const value = useFocusContext();

  return (
    <Canvas shadows gl={{ antialias: false, alpha: false }}>
      <FocusContext.Provider value={value}>
        <Camera />
        <Environment files="/env.hdr" preset={null} />
        <ambientLight color="white" intensity={0.1} />
        <Grass />
        <Stats showPanel={0} className="stats" />

        {trees.map(({ position, Component }, index) => (
          <Component scale={0.3} position={position} key={index} />
        ))}

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <fog color="black" attach="fog" near={50} far={100} />
        <color args={["black"]} attach="background" />

        <House />
        <Car position={[3.5, 0, 5]} />
        <Carriage position={[-8, 0, 0]} scale={0.2} />
        <Moon />
        <OrbitControls
          // minDistance={20}
          // maxDistance={20}
          minPolarAngle={Math.PI * 0.3}
          maxPolarAngle={Math.PI * 0.4}
        />
      </FocusContext.Provider>
    </Canvas>
  );
});

MemoCanvas.displayName = "MemoCanvas";

export default function App() {
  const [obj, setObj] = useState({
    title: "",
    body: "",
    element: null,
    group: null,
  });
  return (
    <FocusContext.Provider value={{ obj, setObj }}>
      <MemoCanvas />
      <FocusObjectControls />
    </FocusContext.Provider>
  );
}
