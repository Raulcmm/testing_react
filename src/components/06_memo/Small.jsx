import React from "react";

const Small = React.memo(({ value }) => {
	console.log("llamado");
	return <small>{value}</small>;
});

export default Small;
