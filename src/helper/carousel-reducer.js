import data from "../components/data/data";

export default function carouselReducer( state, action ) {
	switch( action.type ){
		case "NEXT":
		case "PROGRESS":
			return {
				...state,
				isPlaying: action.type === "PROGRESS",
				currentIndex: ( state.currentIndex + 1 ) % data.length
			};

		case "PAUSE":
			return {
				...state,
				isPlaying: false
			};
		
		case "PLAY":
			return {
				...state,
				isPlaying: true
			};

		case "PREV":
			return {
				...state,
				currentIndex: ( state.currentIndex - 1 + data.length) % data.length,
				isPlaying: false
			};

		case "GOTO":
			return {
				...state,
				takeFocus: true,
				currentIndex: action.index
			};

		case "UNSET_FOCUS":	
			return {
				...state,
				takeFocus: false
			};

		case "ENTER":
			return {
				...state,
				isPlaying: !state.isPlaying
			};

		default:
			return state;
	}
}