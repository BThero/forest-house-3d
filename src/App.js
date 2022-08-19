import { useState, useRef, useContext, useMemo, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Tree1, Tree2, Tree3 } from './models/Tree';
import House from './models/House';
import { Car } from './models/Car';
import { Grass } from './Grass';

import { Sun } from './components/Sun';
import { Moon } from './components/Moon';

import { FocusContext } from './context';
import FocusObjectControls from './components/FocusObjectControls';

import { random } from 'lodash';

function generateTreePositions({ n, span, lim }) {
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
				const [xp, _yp, zp] = array[i];

				if (Math.abs(x - xp) < lim && Math.abs(z - zp) < lim) {
					bad = true;
				}
			}
		}

		array.push([x, 0, z]);
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
	const treePositions = generateTreePositions({
		n: 200,
		span: 60,
		lim: 5,
	});

	return (
		<ForwardCanvas shadows={true}>
			{/* <Environment
        background={true}
        files={'/env.hdr'}
        preset={null}
        scene={undefined}
        encoding={undefined}
      /> */}
			<ambientLight color="white" intensity={0.1} />
			<Grass />

			{treePositions.map((pos) => {
				let Component;

				switch (Math.floor(Math.random() * 3)) {
					case 0: {
						Component = Tree1;
						break;
					}

					case 1: {
						Component = Tree2;
						break;
					}

					default: {
						Component = Tree3;
						break;
					}
				}

				return <Component scale={0.3} position={pos} />;
			})}

			<fog color="black" attach="fog" near={50} far={100} />
			<color args={['black']} attach="background" />

			<House />
			<Car scale={1} position={[3.5, 0, 5]} />
			{/* <Sun /> */}
			<Moon />
			<OrbitControls
				// minDistance={30}
				maxDistance={30}
				minPolarAngle={Math.PI * 0.4}
				// maxPolarAngle={Math.PI * 0.4}
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
