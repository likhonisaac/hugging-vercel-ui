import type { ToolIOType, ToolOutputComponents } from "$lib/types/Tool";

export const ToolOutputPaths: Record<
	ToolOutputComponents,
	{
		type: ToolIOType;
		path: string;
	}
> = {
	textbox: {
		type: "str",
		path: "$",
	},
	markdown: {
		type: "str",
		path: "$",
	},
	number: {
		type: "float",
		path: "$",
	},
	image: {
		type: "file",
		path: "$.url",
	},
	gallery: {
		type: "file",
		path: "$[*].image.url",
	},
	audio: {
		type: "file",
		path: "$.url",
	},
	video: {
		type: "file",
		path: "$.url",
	},
};

export const isValidOutputComponent = (
	outputComponent: string
): outputComponent is keyof typeof ToolOutputPaths => {
	return Object.keys(ToolOutputPaths).includes(outputComponent);
};