<script lang="ts">
	import { encode } from '$lib';

	const urlRegex =
		/^https?:\/\/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&/=]*)$/;

	export let url: string = '';

	$: isValid = urlRegex.test(url);

	$: encoded = url ? `${window.location.href}${encode(url)}` : '';
</script>

<div class="flex flex-col gap-6 items-center text-center max-w-2xl mx-auto">
	<h1 class="text-4xl font-semibold">URL Lengthener</h1>

	<div>
		<p>You've heard of URL shorteners, now get ready for URL lengtheners.</p>
		<p>NO storing personal data, NO cookies, NO worries</p>
		<p>Because size matters</p>
		<p>Make 'em big</p>
	</div>

	<label class="form-control w-full">
		<div class="label">
			<span class="label-text">Enter a URL (starting with http:// or https://)</span>
		</div>
		<input
			type="text"
			placeholder="Type here"
			class="input input-bordered w-full"
			bind:value={url}
		/>
		{#if url && !isValid}
			<div class="label">
				<span class="label-text text-red-400">Invalid URL</span>
			</div>
		{/if}
	</label>

	{#if isValid}
		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Your new url:</span>
			</div>
			<textarea readonly class="h-64 text-xl textarea textarea-bordered w-full">{encoded}</textarea>
		</label>
	{/if}
</div>
