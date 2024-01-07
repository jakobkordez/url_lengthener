<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="text-center">
	<h1 class="text-4xl font-bold mb-3">{$page.status}</h1>
	<p>{$page.error?.message}</p>
</div>
