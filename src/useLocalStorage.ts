import React, { useState, useEffect } from "react";

const useLocalStorage = (key) => {
	const [data, setData] = useState(localStorage.getItem(key));

	return data;
};

export default useLocalStorage