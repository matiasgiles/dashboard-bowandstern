import React from "react";
import UserChart from "../components/UserChart";

function Users() {
	const data = [
		{
			name: "Francisco Messina",
			email: "fm230499@gmail.com",
			createdAt: "23/04/99",
		},
	];
	return <UserChart info={data} />;
}

export default Users;