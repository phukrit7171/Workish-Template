<script>
	const technologies = [
		{ name: "Artificial Intelligence", progress: 95 },
		{ name: "Machine Learning", progress: 90 },
		{ name: "Cloud Infrastructure", progress: 98 },
		{ name: "Real-time Analytics", progress: 92 }
	];
</script>

<section id="technology" class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
	<!-- Background Elements -->
	<div class="absolute inset-0 opacity-20">
		<div class="absolute top-10 right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-xl animate-pulse"></div>
		<div class="absolute bottom-10 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" style="animation-delay: 3s;"></div>
	</div>

	<div class="max-w-7xl mx-auto relative z-10">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
			<!-- Content -->
			<div class="animate-on-scroll">
				<h2 class="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
					Built for the Future
				</h2>
				<p class="text-xl text-slate-300 mb-8 leading-relaxed">
					Our platform leverages cutting-edge artificial intelligence, machine learning, and cloud infrastructure to deliver solutions that scale with your ambitions.
				</p>
				<p class="text-lg text-slate-400 leading-relaxed">
					Experience the power of integrated business technology that adapts, learns, and grows with your organization.
				</p>
			</div>

			<!-- Technology Progress -->
			<div class="animate-on-scroll">
				<div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
					{#each technologies as tech, index}
						<div class="mb-6 last:mb-0">
							<div class="flex justify-between items-center mb-3">
								<span class="text-white font-semibold">{tech.name}</span>
								<span class="text-emerald-400 font-bold">{tech.progress}%</span>
							</div>
							<div class="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
								<div 
									class="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
									style="width: {tech.progress}%; animation-delay: {index * 0.2}s;"
								></div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
