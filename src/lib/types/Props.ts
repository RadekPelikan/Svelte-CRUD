import type { RemoteForm } from "@sveltejs/kit";
import type { Snippet } from "svelte";


export type UpsertFormProps = {
	remoteCb: RemoteForm<any, any>;
	fields: {
		text: string;
		inputAttributes: any;
		value?: any;
	}[];
	submitText: string;
	form?: Snippet;
};
