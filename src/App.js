import { useState, useContext, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stars, Stats } from '@react-three/drei';

import { random } from 'lodash';

import { Tree1, Tree2, Tree3 } from './models/Tree';
import { House } from './models/House';
import { Car } from './models/Car';
import { Carriage } from './models/Carriage';

import Grass from './components/Grass';
import Moon from './components/Moon';
import Camera from './components/Camera';
import FocusObjectControls from './components/FocusObjectControls';

import { FocusContext } from './context';

function generateTrees({ n, span, lim }) {
	const treeTypes = [Tree1, Tree2, Tree3];
	let array = [];

	for (let i = 0; i < n; i++) {
		let x,
			z,
			bad = true;

		while (bad) {
			x = random(-span, span, false);
			z = random(-span, span, false);
			bad = Math.abs(x) <= 15 && Math.abs(z) <= 15;

			for (let i = 0; i < array.length; i++) {
				const [xp, _yp, zp] = array[i].position;

				if (Math.abs(x - xp) < lim && Math.abs(z - zp) < lim) {
					bad = true;
				}
			}
		}

		array.push({
			position: [x, 0, z],
			Component: treeTypes[random(0, 2, false)],
		});
	}

	return array;
}

function ForwardCanvas({ children, ...props }) {
	const value = useContext(FocusContext);

	return (
		<Canvas {...props}>
			<FocusContext.Provider value={value}>{children}</FocusContext.Provider>
		</Canvas>
	);
}

const MemoCanvas = memo(() => {
	const trees = generateTrees({
		n: 200,
		span: 60,
		lim: 5,
	});

	return (
		<ForwardCanvas shadows gl={{ antialias: false, alpha: false }}>
			<Camera />
			<Environment files={'/env.hdr'} preset={null} />
			<ambientLight color="white" intensity={0.1} />
			<Grass />
			<Stats showPanel={0} className="stats" />

			{trees.map(({ position, Component }) => (
				<Component scale={0.3} position={position} />
			))}

			<Stars
				radius={100}
				depth={50}
				count={5000}
				factor={4}
				saturation={0}
				fade
				speed={1}
			/>

			<fog color="black" attach="fog" near={50} far={100} />
			<color args={['black']} attach="background" />

			<House />
			<Car position={[3.5, 0, 5]} />
			<Carriage position={[-8, 0, 0]} scale={0.2} />
			<Moon />
			<OrbitControls
				// minDistance={20}
				// maxDistance={20}
				minPolarAngle={Math.PI * 0.3}
				maxPolarAngle={Math.PI * 0.4}
			/>
		</ForwardCanvas>
	);
});

export default function App() {
	const [obj, setObj] = useState({
		title: '',
		body: '',
		element: null,
		group: null,
	});
	return (
		<FocusContext.Provider value={{ obj, setObj }}>
			<MemoCanvas />
			<FocusObjectControls />
		</FocusContext.Provider>
	);
}
