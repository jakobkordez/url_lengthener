import { decode } from '$lib';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const url = decode(params.slug);

    if (!url) return error(404, 'Page not found')

    return { url };
}