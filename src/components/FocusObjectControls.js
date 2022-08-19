import { useEffect, useRef, useId, useContext } from 'react';
import { FocusContext } from '../context';
import * as THREE from 'three';

function FocusObjectControls() {
	const { obj, setObj } = useContext(FocusContext);
	const { title, body, element, group } = obj;

	const colorInputRef = useRef(null);
	const colorInputId = useId();

	useEffect(() => {
		const color = element?.material?.color ?? null;

		if (color) {
			colorInputRef.current.value = '#' + color.getHexString();
		}
	}, [element]);

	if (!element) {
		return (
			<div
				style={{
					position: 'absolute',
					right: '5%',
					top: '5%',
					backgroundColor: 'rgb(0, 200, 200)',
					color: 'white',
					padding: '1em',
					borderRadius: '1em',
				}}
			>
				<p style={{ padding: 0, margin: 0 }}>Click on some element</p>
			</div>
		);
	}

	return (
		<div
			style={{
				position: 'absolute',
				right: '5%',
				top: '5%',
				width: '30%',
				backgroundColor: 'rgba(0, 200, 200, 0.8)',
				color: 'white',
				padding: '2em',
				borderRadius: '1em',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<h1
					style={{
						margin: 0,
						padding: 0,
					}}
				>
					{title}
				</h1>
				<button
					style={{
						background: 'none',
						border: '1px solid white',
						borderRadius: '1em',
						color: 'white',
					}}
					onClick={(e) => {
						setObj({
							title: '',
							body: '',
							element: null,
						});
					}}
				>
					Close
				</button>
			</div>
			<p>{body}</p>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					gap: '1em',
				}}
			>
				<label htmlFor={colorInputId}>Change Color</label>
				<input
					ref={colorInputRef}
					type="color"
					onChange={(e) => {
						e.preventDefault();
						element.material.color = new THREE.Color(e.target.value);
					}}
				/>
			</div>
			{title.toLowerCase() === 'garage button'.toLowerCase() && (
				<button
					style={{
						background: 'none',
						border: '1px solid white',
						borderRadius: '1em',
						color: 'white',
						marginTop: '0.5em',
					}}
					onClick={(e) => {
						e.preventDefault();
						const maxFrames = 60;
						let startValue,
							endValue,
							frames = 0;

						if (group.rotation.x === 0) {
							startValue = 0;
							endValue = Math.PI / 2;
						} else {
							startValue = Math.PI / 2;
							endValue = 0;
						}

						const timer = setInterval(() => {
							frames++;
							group.rotation.x = THREE.MathUtils.mapLinear(
								frames,
								0,
								maxFrames,
								startValue,
								endValue
							);

							if (frames === maxFrames) {
								group.rotation.x = endValue;
								clearInterval(timer);
							}
						}, 50);
					}}
				>
					Click
				</button>
			)}
			{title.toLowerCase() === 'car'.toLowerCase() && (
				<button
					style={{
						background: 'none',
						border: '1px solid white',
						borderRadius: '1em',
						color: 'white',
						marginTop: '0.5em',
					}}
					onClick={(e) => {
						console.log(element);

						e.preventDefault();
						const maxFrames = 60;
						const initialValue = 5;
						let startValue,
							endValue,
							frames = 0;

						if (element.position.z === initialValue) {
							startValue = initialValue;
							endValue = initialValue - 5;
						} else {
							startValue = initialValue - 5;
							endValue = initialValue;
						}

						const timer = setInterval(() => {
							frames++;
							element.position.z = THREE.MathUtils.mapLinear(
								frames,
								0,
								maxFrames,
								startValue,
								endValue
							);

							const progress = THREE.MathUtils.mapLinear(frames, 0, maxFrames);

							const wheelSpeed = Math.min(progress, 1.0 - progress, 0.1);

							if (frames === maxFrames) {
								element.position.z = endValue;
								clearInterval(timer);
							}
						}, 50);
					}}
				>
					Move the car
				</button>
			)}
		</div>
	);
}

export default FocusObjectControls;
