<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	window.location.replace(data.url);
</script>

<div class="text-center">
	<h1 class="text-2xl mb-4">Redirecting...</h1>
	<p>If redirect does not work, <a href={data.url} class="link font-bold">Click here</a>.</p>
</div>
