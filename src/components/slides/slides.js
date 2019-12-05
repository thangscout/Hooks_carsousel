import React, { useContext } from "react";
import Slide from "../slide/slide";
import CarouselContext from "../../context/carousel-context/carousel-context";

export default function Slides({ data }) {
	const { state: { currentIndex, takeFocus }} = useContext(CarouselContext);

	return (
		<ul>
			{data.map((item, index) => (
				<Slide key={index} id={`image-${index}`} image={item.img} title={item.title}
					isCurrent={index === currentIndex} takeFocus={takeFocus} children={item.content}
				/>
			))}
		</ul>
	);
}