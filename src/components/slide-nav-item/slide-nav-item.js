import React from "react";

export default function SlideNavItem({ isCurrent, ...props }) {
	return (
		<li className="SlideNavItem">
			<button { ...props} aria-current={isCurrent}>
				<span />
			</button>
		</li>
	);
}