import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const speed = 0.1;
const offset = Math.PI;
const distance = 1000;

export default function Moon() {
	const lightRef = useRef(null);

	useFrame(({ clock }) => {
		const x = Math.cos(clock.getElapsedTime() * speed + offset);
		const y = Math.sin(clock.getElapsedTime() * speed + offset);

		lightRef.current.position.x = x * distance;
		lightRef.current.position.y = y * distance;
	}, 0);

	return (
		<>
			<directionalLight
				ref={lightRef}
				position={[-distance, 0, 0]}
				color="white"
				intensity={0.8}
				castShadow
				shadow-mapSize-height={4096}
				shadow-mapSize-width={4096}
				shadow-camera-far={3500}
				shadow-camera-left={-50}
				shadow-camera-right={50}
				shadow-camera-top={50}
				shadow-camera-bottom={-50}
			/>
		</>
	);
}
