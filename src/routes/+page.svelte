<script lang="ts">
	import { encode } from '$lib';

	const urlRegex =
		/^https?:\/\/[-a-zA-Z0-9@:%._\+~#=]{1,256}(:\d+)?\b([-a-zA-Z0-9()@:%_\+.~#?&/=]*)$/;

	export let url: string = '';

	$: isValid = urlRegex.test(url);

	$: encoded = url ? `${window.location.href}${encode(url)}` : '';
</script>

<div class="flex flex-col gap-8 items-center text-center">
	<h1 class="text-6xl font-semibold text-primary">URL Lengthener</h1>

	<div>
		<p>NO storing data, NO cookies, ONLY HUGE LINKS</p>
		<p>Make 'em big</p>
		<p>Because size <strong>DOES</strong> matter</p>
		<p>BIGGER better faster LONGER</p>
		<p>Go big or go home</p>
	</div>

	<label class="form-control w-full">
		<div class="label">
			<span class="label-text">Enter a URL (starting with http:// or https://)</span>
		</div>
		<input
			type="url"
			placeholder="https://example.com"
			class="input input-bordered input-primary w-full"
			bind:value={url}
		/>
		{#if url && !isValid}
			<div class="label">
				<span class="label-text text-red-400">Invalid URL</span>
			</div>
		{/if}
	</label>

	{#if isValid}
		<div class="text-left">
			<div>Your new url:</div>
			<a href={encoded} class="break-all text-xl link link-primary w-full">{encoded}</a>
		</div>
	{/if}
</div>
