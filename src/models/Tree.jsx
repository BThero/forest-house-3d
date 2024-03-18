import { useGLTF } from '@react-three/drei';
import Tree1GLB from '/tree1.glb';
import Tree2GLB from '/tree2.glb';
import Tree3GLB from '/tree3.glb';

export function Tree1(props) {
	const { nodes, materials } = useGLTF(Tree1GLB);
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

useGLTF.preload(Tree1GLB);

export function Tree2(props) {
	const { nodes, materials } = useGLTF(Tree2GLB);
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

useGLTF.preload(Tree2GLB);

export function Tree3(props) {
	const { nodes, materials } = useGLTF(Tree3GLB);
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

useGLTF.preload(Tree3GLB);
