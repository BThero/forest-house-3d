import { useRef } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Camera() {
	const cam = useRef();

	useFrame(({ mouse }, delta) => {
		cam.current.position.y += mouse.y / 30;
		cam.current.position.x += mouse.x / 30;
		cam.current.lookAt(0, 0, 0);
		cam.current.updateProjectionMatrix();
	});

	return (
		<PerspectiveCamera
			ref={cam}
			makeDefault
			position={[0, 10, 20]}
			onUpdate={(s) => {
				s.lookAt(0, 0, 0);
				s.updateProjectionMatrix();
			}}
		/>
	);
}
