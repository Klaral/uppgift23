import React from "react";

function History(props) {
	console.log('history:', props.history);
	const list = props.history.map( (x, index) => <li key={index}>{x.type}</li> );
	return <div><h3>Din historik: </h3><ul>{list.reverse()}</ul></div>;
}

export default History;