<script>
	const companies = [
		"TechCorp", "InnovateLab", "FutureScale", "DataDriven", "CloudFirst", "AIVentures"
	];
</script>

<section class="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
	<div class="max-w-7xl mx-auto relative z-10">
		<div class="text-center animate-on-scroll">
			<h3 class="text-2xl font-semibold text-slate-300 mb-8">
				Trusted by Industry Leaders
			</h3>
			<div class="flex flex-wrap justify-center items-center gap-8 opacity-60">
				{#each companies as company, index}
					<div 
						class="text-lg font-semibold text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
						style="animation-delay: {index * 0.1}s;"
					>
						{company}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
