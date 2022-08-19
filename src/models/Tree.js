import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Tree1(props) {
	const { nodes, materials } = useGLTF('/tree1.glb');
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['tree-beech'].geometry}
				material={materials.color_main}
			/>
		</group>
	);
}

useGLTF.preload('/tree1.glb');

export function Tree2(props) {
	const { nodes, materials } = useGLTF('/tree2.glb');
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['tree-lime'].geometry}
				material={materials.color_main}
			/>
		</group>
	);
}

useGLTF.preload('/tree2.glb');

export function Tree3(props) {
	const { nodes, materials } = useGLTF('/tree3.glb');
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['tree-spruce'].geometry}
				material={materials.color_main}
			/>
		</group>
	);
}

useGLTF.preload('/tree3.glb');
