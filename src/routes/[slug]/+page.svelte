<script>
	/** @type {import('./$types').PageData} */
	export let data;

	window.location.href = data.url;
</script>

<div class="text-center">
	<h1 class="text-2xl mb-4">Redirecting...</h1>
	<p>If redirect does not work, <a href={data.url} class="link font-bold">Click here</a>.</p>
</div>
