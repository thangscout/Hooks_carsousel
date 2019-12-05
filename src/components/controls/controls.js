import React, { useContext } from "react";
import IconButton from "../icon-button/icon-button";
import CarouselContext from "../../context/carousel-context/carousel-context";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

export default function Controls(){
	const { state: { isPlaying }, dispatch } = useContext(CarouselContext);
	return (
		<div className="Controls">
			{isPlaying 
				? (<IconButton aria-label="Pause" onClick={() => dispatch({ type: "PAUSE"})} children={<FaPause/>}/>)
				: (<IconButton aria-label="Play" onClick={() => dispatch({ type: "PLAY"})} children={<FaPlay/>}/>)
			}
			<div className="inline-block mr-2"/>
			<IconButton aria-label="Previous slide" onClick={() => dispatch({ type: "PREV"})} children={<FaBackward/>}/>
			<IconButton aria-label="Next slide" onClick={() => dispatch({ type: "NEXT"})} children={<FaForward/>}/>
		</div>
	);
}