import { decode } from '$lib';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const url = decode(params.slug);

	if (!url) return error(404, 'Page not found');

	return { url };
};
