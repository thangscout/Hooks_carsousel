import React from "react";

export default function IconButton(props) {
	return (
		<button { ...props } className="IconButton focus:outline-none" />
	);
}