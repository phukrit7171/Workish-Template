<script>
	const benefits = [
		{
			title: "Increase Efficiency",
			value: "40%",
			description: "reduction in operational overhead",
			icon: "⚡"
		},
		{
			title: "Boost Revenue",
			value: "25%",
			description: "average increase in sales performance",
			icon: "📈"
		},
		{
			title: "Scale Seamlessly",
			value: "∞",
			description: "cloud-native architecture grows with you",
			icon: "🚀"
		},
		{
			title: "Data-Driven Insights",
			value: "24/7",
			description: "real-time analytics for informed decisions",
			icon: "📊"
		}
	];
</script>

<section id="benefits" class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
	<div class="max-w-7xl mx-auto relative z-10">
		<div class="text-center mb-16 animate-on-scroll">
			<h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
				Why Leading Companies Choose Workish
			</h2>
			<p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
				Join thousands of businesses that have transformed their operations with our technology
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each benefits as benefit, index}
				<div class="group animate-on-scroll" style="animation-delay: {index * 0.1}s;">
					<div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center h-full transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
						<div class="text-4xl mb-4 transform transition-all duration-500 group-hover:scale-110">
							{benefit.icon}
						</div>
						<div class="text-4xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors duration-300">
							{benefit.value}
						</div>
						<h3 class="text-xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
							{benefit.title}
						</h3>
						<p class="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
							{benefit.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
