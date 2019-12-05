import React, { useReducer, useEffect } from "react";
import data from "../../components/data/data";
import Controls from "../../components/controls/controls";
import ProgressBar from "../../components/progress-bar/progress-bar";
import Slides from "../../components/slides/slides";
import SlideNav from "../../components/slide-nav/slide-nav";
import carouselReducer from "../../helper/carousel-reducer";
import CarouselContext from "../../context/carousel-context/carousel-context";

import { SLIDE_DURATION } from "../../config/config"

function Carousel(props) {
	return (
		<section className="Carousel" { ...props}/>
	);
}

export default function Dashboard(){
	const [ state, dispatch ] = useReducer(carouselReducer, {
		currentIndex: 0,
		isPlaying: false,
		takeFocus: false,
	});

	useEffect(() => {
		if ( state.isPlaying ) {
			let timeout = setTimeout(() => {
				dispatch({ type: "PROGRESS"});
			}, SLIDE_DURATION);
			return () => clearTimeout(timeout);
		}
	}, [ state.currentIndex, state.isPlaying ]);

	useEffect(() => {
		if ( state.takeFocus ){
			dispatch({ type : "UNSET_FOCUS"});
		}
	}, [ state.takeFocus ]);

	useEffect(() => {
		window.addEventListener("keydown", handleSlideNav);
		return () => window.removeEventListener("keydown", handleSlideNav);
	});

	const handleSlideNav = event => {
		if ( 39 === event.keyCode ) {
			dispatch({ type: "NEXT"});
		}
		if ( 37 === event.keyCode ) {
			dispatch({ type: "PREV"});
		}
		if ( 13 === event.keyCode ) {
			dispatch({ type: "ENTER"});
		}
	}

	return (
		<CarouselContext.Provider value={{ state, dispatch}}>
			<Carousel aria-label="Images from Space">
				<Slides data={data}/>
				<SlideNav data={data}/>
				<Controls />
				<ProgressBar key={state.currentIndex + state.isPlaying}/>
			</Carousel>
		</CarouselContext.Provider>
	);
}