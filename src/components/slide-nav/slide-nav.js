import React, { useContext } from "react";
import SlideNavItem from "../slide-nav-item/slide-nav-item";
import CarouselContext from "../../context/carousel-context/carousel-context";

export default function SlideNav({ data }) {
	const { state, dispatch } = useContext(CarouselContext);
	return (
		<ul className="SlideNav">
			{ data.map((slide, index) => (
				<SlideNavItem key={index} isCurrent={index === state.currentIndex }
					aria-label={`Slide ${index + 1}`} onClick={() => dispatch({ type: "GOTO", index})}
				/>
			))}
		</ul>
	);
}