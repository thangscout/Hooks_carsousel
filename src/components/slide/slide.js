import React, { useRef, useEffect } from "react";

export default function Slide({ isCurrent, takeFocus, image, id, title, children }) {
	const ref = useRef();

	useEffect(() => {
		if ( isCurrent && takeFocus ) {
			ref.current.focus();
		}
	}, [isCurrent, takeFocus]);

	return (
		<li ref={ref} aria-hidden={!isCurrent} tabIndex="-1" aria-labelledby={id}
			className="Slide" style={{ backgroundImage: `url(${image})`}}
		>
			<div className="SlideContent">
				<h2 id={id}>{title}</h2>
				{children}
			</div>
		</li>
	);
}