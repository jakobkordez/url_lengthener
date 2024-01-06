import md5 from 'md5';

export function encode(url: string) {
	const hash = md5(url);
	return btoa(`${url}|${hash}`);
}

export function decode(data: string) {
	try {
		const decoded = atob(data);
		if (!decoded.includes('|')) return null;
		const [url, hash] = decoded.split('|', 2);
		if (md5(url) != hash) return null;
		return url;
	} catch {
		return null;
	}
}
