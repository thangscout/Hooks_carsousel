import React, { useContext } from "react";
import Progress from "../progress/progress";
import CarouselContext from "../../context/carousel-context/carousel-context";
import { SLIDE_DURATION } from "../../config/config";

export default function ProgressBar() {
	const { state: { isPlaying : animate }} = useContext(CarouselContext);
	let progress = Progress( animate, SLIDE_DURATION);

	return (
		<div className="ProgressBar">
			<div style={{ width: `${progress * 100}%`}}/>
		</div>
	);
}