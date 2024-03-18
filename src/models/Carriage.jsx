import { useGLTF } from '@react-three/drei';

export function Carriage(props) {
	const { nodes, materials } = useGLTF('/carriage.glb');
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube.geometry}
				material={materials['Material.005']}
				position={[0, 2.76, 0]}
				scale={[2.08, 0.12, 4.03]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder002.geometry}
				material={materials['Material.001']}
				position={[-4.55, 2.35, 0]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={[2.4, 0.25, 2.4]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube001.geometry}
				material={materials['Material.006']}
				position={[3.33, 4.31, -0.05]}
				rotation={[0, 0, 0.87]}
				scale={[2.08, 0.12, 4.03]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube002.geometry}
				material={materials['Material.007']}
				position={[-3.34, 4.32, -0.05]}
				rotation={[0, 0, -0.87]}
				scale={[2.08, 0.12, 4.03]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder001.geometry}
				material={materials['Material.002']}
				position={[4.58, 2.35, 0]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={[2.4, 0.25, 2.4]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube003.geometry}
				material={materials['Material.004']}
				position={[0, 4.71, -3.97]}
				rotation={[Math.PI / 2, Math.PI / 2, 0]}
				scale={[2.08, 0.12, 4.74]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder.geometry}
				material={materials['Material.003']}
				position={[0, 2.24, 0]}
				rotation={[0, 0, Math.PI / 2]}
				scale={[0.25, 4.32, 0.3]}
			/>
		</group>
	);
}

useGLTF.preload('/carriage.glb');
