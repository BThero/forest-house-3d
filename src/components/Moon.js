import { useHelper } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const speed = 0.5;
const offset = Math.PI;

export function Moon() {
	const lightRef = useRef(null);
	const objectRef = useRef(null);

	useFrame(({ clock }) => {
		const x = Math.cos(clock.getElapsedTime() * speed + offset);
		const y = Math.sin(clock.getElapsedTime() * speed + offset);

		lightRef.current.position.x = x * 1000;
		lightRef.current.position.y = y * 1000;
		lightRef.current.position.z = 0;

		objectRef.current.position.x = x * 1000;
		objectRef.current.position.y = y * 1000;
		objectRef.current.position.z = 0;
	});

	return (
		<>
			<directionalLight
				ref={lightRef}
				color="white"
				intensity={0.8}
				castShadow
			/>
			<mesh ref={objectRef} scale={5} castShadow>
				<sphereGeometry />
				<meshStandardMaterial
					color="white"
					emissive="white"
					emissiveIntensity={0.8}
					castShadow
				/>
			</mesh>
		</>
	);
}
