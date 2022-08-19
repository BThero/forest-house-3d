import { useRef, useContext } from 'react';
import { useGLTF } from '@react-three/drei';
import { FocusContext } from '../context';
import * as THREE from 'three';

function House(props) {
	const { nodes, materials } = useGLTF('/house2.glb');
	const { setObj } = useContext(FocusContext);
	const garageEntranceRef = useRef(null);

	return (
		<group {...props} position={[0, 0.05, 0]} dispose={null}>
			<group position={[3.4, 2.43, 2.04]} ref={garageEntranceRef}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.garage.geometry}
					material={materials.door}
					material-side={THREE.DoubleSide}
					onClick={(e) => {
						e.stopPropagation();
						setObj({
							title: 'Garage Entrance',
							body: 'An entrance that allows your car to enter or leave the garage',
							element: e.object,
							group: garageEntranceRef.current,
						});
					}}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.garage_window.geometry}
					material={materials['window.002']}
					material-side={THREE.DoubleSide}
					onClick={(e) => {
						e.stopPropagation();
						setObj({
							title: 'Garage Window',
							body: 'A window of your lovely garage',
							element: e.object,
							group: garageEntranceRef.current,
						});
					}}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.button.geometry}
				material={materials['Material.001']}
				material-side={THREE.DoubleSide}
				onClick={(e) => {
					e.stopPropagation();
					setObj({
						title: 'Garage Button',
						body: 'A button to open/close the garage entrance',
						element: e.object,
						group: garageEntranceRef.current,
					});
				}}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Mesh_house.geometry}
				material={materials.border}
				material-side={THREE.DoubleSide}
				onClick={(e) => {
					e.stopPropagation();
					setObj({
						title: 'House Borders',
						body: 'A band or margin around or along the edge of the house',
						element: e.object,
						group: null,
					});
				}}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Mesh_house_1.geometry}
				material={materials['door.003']}
				material-side={THREE.DoubleSide}
				onClick={(e) => {
					e.stopPropagation();
					setObj({
						title: 'House Doors',
						body: 'a hinged, sliding, or revolving barrier at the entrance to a building, room, or vehicle, or in the framework of a cupboard.',
						element: e.object,
						group: null,
					});
				}}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Mesh_house_2.geometry}
				material={materials.window}
				material-side={THREE.DoubleSide}
				onClick={(e) => {
					e.stopPropagation();
					setObj({
						title: 'House Windows',
						body: 'A window is an opening in a wall, door, roof, or vehicle that allows the exchange of light and may also allow the passage of sound and sometimes air.',
						element: e.object,
						group: null,
					});
				}}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Mesh_house_3.geometry}
				material={materials.roof}
				material-side={THREE.DoubleSide}
				onClick={(e) => {
					e.stopPropagation();
					setObj({
						title: 'House Roof',
						body: 'A thing that usually covers the house from the top',
						element: e.object,
						group: null,
					});
				}}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Mesh_house_4.geometry}
				material={materials.main}
				material-side={THREE.DoubleSide}
				onClick={(e) => {
					e.stopPropagation();
					setObj({
						title: 'House Walls',
						body: 'A wall is a structure and a surface that defines an area; carries a load; provides security, shelter, or soundproofing; or, is decorative.',
						element: e.object,
						group: null,
					});
				}}
			/>
		</group>
	);
}

export default House;

useGLTF.preload('/house.glb');
