import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFocusContext } from "../App";
import carGLB from '/car.glb';

export function Car(props) {
  const { nodes, materials } = useGLTF(carGLB);
  const { setObj: setObjRaw } = useFocusContext();
  const carRef = useRef(null);
  const wheelRef = useRef([]);

  const setObj = (obj) => setObjRaw({ ...obj, wheels: wheelRef.current });

  return (
    <group ref={carRef} {...props} dispose={null}>
      <group rotation={[Math.PI, 0, Math.PI]}>
        <group
          position={[-0.35, 0.3, 0.76]}
          scale={[-1, 1, 1]}
          onClick={(e) => {
            e.stopPropagation();
            setObj({
              title: "Car Wheel",
              body: "Wheels are circular shapes which make the car drive",
              element: e.object,
              group: carRef.current,
            });
          }}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft002.geometry}
            material={materials["carTire.002"]}
            ref={(x) => (wheelRef.current[0] = x)}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft002_1.geometry}
            material={materials["_defaultMat.002"]}
          />
        </group>
        <group
          position={[0.35, 0.3, 0.76]}
          onClick={(e) => {
            e.stopPropagation();
            setObj({
              title: "Car Wheels",
              body: "Wheels are circular shapes which make the car drive",
              element: e.object,
              group: carRef.current,
            });
          }}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft002.geometry}
            material={materials["carTire.002"]}
            ref={(x) => (wheelRef.current[1] = x)}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft002_1.geometry}
            material={materials["_defaultMat.002"]}
          />
        </group>
        <group
          position={[-0.35, 0.3, -0.86]}
          scale={[-1, 1, 1]}
          onClick={(e) => {
            e.stopPropagation();
            setObj({
              title: "Car Wheel",
              body: "Wheels are circular shapes which make the car drive",
              element: e.object,
              group: carRef.current,
            });
          }}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft002.geometry}
            material={materials["carTire.002"]}
            ref={(x) => (wheelRef.current[2] = x)}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft002_1.geometry}
            material={materials["_defaultMat.002"]}
          />
        </group>
        <group
          position={[0.35, 0.3, -0.86]}
          onClick={(e) => {
            e.stopPropagation();
            setObj({
              title: "Car Wheel",
              body: "Wheels are circular shapes which make the car drive",
              element: e.object,
              group: carRef.current,
            });
          }}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft002.geometry}
            material={materials["carTire.002"]}
            ref={(x) => (wheelRef.current[3] = x)}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft002_1.geometry}
            material={materials["_defaultMat.002"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_body002.geometry}
          material={materials.plastic}
          onClick={(e) => {
            e.stopPropagation();
            setObj({
              title: "Car Borders",
              body: "One of the most often damaged car parts are borders",
              element: e.object,
              group: carRef.current,
            });
          }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_body002_1.geometry}
          material={materials.paintGreen}
          onClick={(e) => {
            e.stopPropagation();
            setObj({
              title: "Car Body",
              body: "Some cool cars don't have an upper part",
              element: e.object,
              group: carRef.current,
            });
          }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_body002_2.geometry}
          material={materials.lightFront}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_body002_3.geometry}
          material={materials._defaultMat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_body002_4.geometry}
          material={materials.window}
          onClick={(e) => {
            e.stopPropagation();
            setObj({
              title: "Car Windows",
              body: "In most action films people get killed because of the windows",
              element: e.object,
              group: carRef.current,
            });
          }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_body002_5.geometry}
          material={materials.lightBack}
        />
      </group>
    </group>
  );
}

useGLTF.preload(carGLB);
