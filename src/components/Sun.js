import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const speed = 0.5;
const offset = 0;

export function Sun() {
	const lightRef = useRef(null);
	const objectRef = useRef(null);

	useFrame(({ clock }) => {
		const x = Math.cos(clock.getElapsedTime() * speed + offset);
		const y = Math.sin(clock.getElapsedTime() * speed + offset);

		lightRef.current.position.x = x * 400;
		lightRef.current.position.y = y * 100;
		lightRef.current.position.z = -200;

		objectRef.current.position.x = x * 400;
		objectRef.current.position.y = y * 100;
		objectRef.current.position.z = -200;
	});

	return (
		<>
			<directionalLight ref={lightRef} color="yellow" castShadow />
			<mesh ref={objectRef} scale={5} castShadow>
				<sphereGeometry />
				<meshStandardMaterial
					color="yellow"
					emissive="yellow"
					emissiveIntensity={0.8}
					castShadow
				/>
			</mesh>
		</>
	);
}
