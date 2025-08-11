<script>
	import { onMount } from 'svelte';

	const services = [
		{
			title: "Smart PoS Technology",
			description: "Revolutionary point-of-sale systems that adapt to your business needs. Real-time analytics, seamless integrations, and intuitive interfaces that accelerate transactions and enhance customer experiences.",
			icon: "💳",
			gradient: "from-blue-500/20 to-cyan-500/20"
		},
		{
			title: "Intelligent Sales Automation",
			description: "Eliminate manual processes and boost revenue with AI-driven sales workflows. From lead qualification to deal closure, our automation tools optimize every stage of your sales funnel.",
			icon: "🤖",
			gradient: "from-purple-500/20 to-pink-500/20"
		},
		{
			title: "AI-Powered Logistics",
			description: "Transform your supply chain with predictive analytics and intelligent routing. Reduce costs, improve delivery times, and gain complete visibility across your logistics operations.",
			icon: "🚀",
			gradient: "from-emerald-500/20 to-teal-500/20"
		}
	];

	onMount(() => {
		const cards = document.querySelectorAll('.service-card');
		cards.forEach((card, index) => {
			card.style.animationDelay = `${index * 0.2}s`;
		});
	});
</script>

<section id="services" class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
	<!-- Background Elements -->
	<div class="absolute inset-0 opacity-30">
		<div class="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
		<div class="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse" style="animation-delay: 2s;"></div>
		<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-emerald-500/5 rounded-full blur-2xl animate-pulse" style="animation-delay: 4s;"></div>
	</div>

	<div class="max-w-7xl mx-auto relative z-10">
		<div class="text-center mb-16 animate-on-scroll">
			<h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
				Complete Business Solutions
			</h2>
			<p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
				Streamline your operations with our integrated suite of intelligent business tools
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each services as service, index}
				<div class="service-card group relative animate-on-scroll">
					<!-- Card Background with Glassmorphism -->
					<div class="absolute inset-0 bg-gradient-to-br {service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
					<div class="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-blue-500/10 group-hover:-translate-y-2">
						
						<!-- Floating Icon -->
						<div class="service-icon text-4xl mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
							{service.icon}
						</div>

						<!-- Content -->
						<h3 class="text-2xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300">
							{service.title}
						</h3>
						<p class="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
							{service.description}
						</p>

						<!-- Hover Line Effect -->
						<div class="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-500 group-hover:w-full rounded-full"></div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.service-card {
		animation: fadeInUp 0.8s ease-out forwards;
		opacity: 0;
		transform: translateY(30px);
	}

	@keyframes fadeInUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.service-icon {
		filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.3));
	}
</style>
