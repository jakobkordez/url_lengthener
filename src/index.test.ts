import { decode, encode } from '$lib';
import { describe, it, expect } from 'vitest';

describe('Encode / decode test', () => {
	it('encodes then decodes a url', () => {
		const url = 'https://jkob.cc/projects';
		expect(decode(encode(url))).toBe(url);
	});
});
