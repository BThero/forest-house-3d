import { useRef, useContext } from 'react';
import { useGLTF } from '@react-three/drei';
import { FocusContext } from '../context';
import * as THREE from 'three';

export function Car(props) {
	const { nodes, materials } = useGLTF('/car.glb');
	const { setObj } = useContext(FocusContext);
	const carRef = useRef(null);

	return (
		<group
			ref={carRef}
			{...props}
			dispose={null}
			onClick={(e) => {
				e.stopPropagation();
				setObj({
					title: 'Car',
					body: 'This is your lovely car your father gifted to you 20 years ago',
					element: carRef.current,
					group: null,
				});
			}}
		>
			<group rotation={[Math.PI, 0, Math.PI]}>
				<group position={[-0.35, 0.3, 0.76]} scale={[-1, 1, 1]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Mesh_wheel_frontLeft002.geometry}
						material={materials['carTire.002']}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Mesh_wheel_frontLeft002_1.geometry}
						material={materials['_defaultMat.002']}
					/>
				</group>
				<group position={[0.35, 0.3, 0.76]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Mesh_wheel_frontLeft002.geometry}
						material={materials['carTire.002']}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Mesh_wheel_frontLeft002_1.geometry}
						material={materials['_defaultMat.002']}
					/>
				</group>
				<group position={[-0.35, 0.3, -0.86]} scale={[-1, 1, 1]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Mesh_wheel_frontLeft002.geometry}
						material={materials['carTire.002']}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Mesh_wheel_frontLeft002_1.geometry}
						material={materials['_defaultMat.002']}
					/>
				</group>
				<group position={[0.35, 0.3, -0.86]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Mesh_wheel_frontLeft002.geometry}
						material={materials['carTire.002']}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Mesh_wheel_frontLeft002_1.geometry}
						material={materials['_defaultMat.002']}
					/>
				</group>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Mesh_body002.geometry}
					material={materials.plastic}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Mesh_body002_1.geometry}
					material={materials.paintGreen}
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

useGLTF.preload('/car.glb');
