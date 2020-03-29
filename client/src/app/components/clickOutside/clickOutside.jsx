import React, { Fragment, useEffect, useRef } from 'react';

export default function ClickOutside({ handler, children }) {
	const containerEl = useRef(null);

	const handle = event => {
		if(!containerEl.current.contains(event.target)) {
			handler();
		}
	};

	useEffect(() => {
		document.addEventListener("click", handle);

		return () => {
			document.removeEventListener("click", handle);
		};
	}, []);

	return (
		<div ref={containerEl}>
			{children}
		</div>
	)
}
