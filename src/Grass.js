import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

export function Grass() {
	const [colorMap, roughnessMap, normalMap] = useTexture([
		'grass/diffuse.jpeg',
		'grass/rough.jpeg',
		'grass/normal.jpeg',
	]);

	return (
		<mesh rotation-x={Math.PI * -0.5} castShadow receiveShadow>
			<planeGeometry args={[600, 200]} />
			<meshStandardMaterial
				receiveShadow
				map={colorMap}
				map-wrapS={THREE.RepeatWrapping}
				map-wrapT={THREE.RepeatWrapping}
				map-repeat={[300, 100]}
				normalMap={normalMap}
				normalMap-wrapS={THREE.RepeatWrapping}
				normalMap-wrapT={THREE.RepeatWrapping}
				normalMap-encoding={THREE.LinearEncoding}
				normalScale={[1, 1]} // optional, 1,1 by default
				roughness={1} // set to 1 to use 100% of the roughnessMap
				roughnessMap={roughnessMap}
				roughnessMap-wrapS={THREE.RepeatWrapping}
				roughnessMap-wrapT={THREE.RepeatWrapping}
			/>
		</mesh>
	);
}
