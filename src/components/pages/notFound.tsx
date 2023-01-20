import { createRoute } from "atomic-router";

export const notFoundRoute = createRoute();

export const NotFound = () => {
	return (
		<div
			class="w-screen h-screen flex-center"
		>
			<h1 class="text-6xl font-[Roboto]">NotFound</h1>
		</div>
	);
};
