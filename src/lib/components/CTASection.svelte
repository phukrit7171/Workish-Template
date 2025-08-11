<script>
	const handleScheduleDemo = () => {
		// Add demo scheduling logic here
		console.log('Schedule demo clicked');
	};

	const handleViewPricing = () => {
		// Add pricing navigation logic here
		console.log('View pricing clicked');
	};
</script>

<section id="cta" class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
	<!-- Background Elements -->
	<div class="absolute inset-0 opacity-30">
		<div class="absolute top-10 left-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
		<div class="absolute bottom-10 right-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-pulse" style="animation-delay: 2s;"></div>
	</div>

	<div class="max-w-4xl mx-auto text-center relative z-10">
		<div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 animate-on-scroll">
			<h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
				Ready to Revolutionize Your Business?
			</h2>
			<p class="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
				Discover how Workish can streamline your operations, boost productivity, and drive growth. Our experts are ready to design a solution tailored to your unique needs.
			</p>
			
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<button 
					onclick={handleScheduleDemo}
					class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-blue-500 hover:to-emerald-500 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
				>
					<span class="relative z-10">Schedule Your Demo</span>
					<div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
				</button>
				
				<button 
					onclick={handleViewPricing}
					class="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-900"
				>
					View Pricing
				</button>
			</div>
		</div>
	</div>
</section>
