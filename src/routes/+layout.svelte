<script>
	import '../app.css';
</script>

<div class="flex flex-col min-h-screen">
	<div class="py-12 container mx-auto flex-1">
		<slot />
	</div>

	<div class="bg-primary/5">
		<div class="py-1.5 gap-4 container mx-auto flex justify-between">
			<div>
				URL Lengthener by <a href="https://jkob.cc" class="link link-primary">jkob.cc</a>
			</div>
			<div class="text-right">
				Source code available on
				<a href="https://github.com/jakobkordez/url_lengthener" class="link link-primary">Github</a>
			</div>
		</div>
	</div>
</div>
