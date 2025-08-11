<script>
	import { onMount } from 'svelte';

	// Configuration for easy maintenance
	const heroConfig = {
		backgroundImage: null, // Set to image URL to use background image instead of gradient
		title: "Transform Your Business Operations with Intelligent Technology",
		subtitle: "Streamline sales, automate processes, and optimize logistics with our integrated suite of AI-powered business solutions.",
		primaryCTA: "Schedule a Demo",
		secondaryCTA: "Learn More"
	};

	let heroElement = $state();

	onMount(() => {
		// Add floating animation to circles
		const circles = heroElement.querySelectorAll('.floating-circle');
		circles.forEach((circle, index) => {
			circle.style.animationDelay = `${index * 0.5}s`;
		});
	});
</script>

<section 
	bind:this={heroElement}
	id="hero" 
	class="relative min-h-screen flex items-center justify-center overflow-hidden {heroConfig.backgroundImage ? 'bg-cover bg-center bg-no-repeat' : ''}"
	style={heroConfig.backgroundImage ? `background-image: url('${heroConfig.backgroundImage}')` : ''}
>
	<!-- Background Elements -->
	{#if !heroConfig.backgroundImage}
		<div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
		<div class="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-emerald-900/20"></div>
	{:else}
		<div class="absolute inset-0 bg-black/50"></div>
	{/if}

	<!-- Floating Background Elements -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div class="floating-circle absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full blur-xl parallax hover:scale-110 transition-transform duration-700"></div>
		<div class="floating-circle absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-emerald-500/15 to-blue-500/15 rounded-full blur-2xl parallax hover:scale-110 transition-transform duration-700"></div>
		<div class="floating-circle absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/25 to-emerald-400/25 rounded-full blur-lg parallax hover:scale-110 transition-transform duration-700"></div>
		<div class="floating-circle absolute bottom-20 right-1/3 w-36 h-36 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-xl parallax hover:scale-110 transition-transform duration-700"></div>
		<div class="floating-circle absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-r from-blue-300/30 to-emerald-300/30 rounded-full blur-md parallax hover:scale-110 transition-transform duration-700"></div>
	</div>

	<!-- Content -->
	<div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<div class="animate-on-scroll">
			<h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
				<span class="bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
					{heroConfig.title}
				</span>
			</h1>
			
			<p class="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
				{heroConfig.subtitle}
			</p>

			<div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
				<button class="hero-cta-primary group relative bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden">
					<span class="relative z-10">{heroConfig.primaryCTA}</span>
					<div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
				</button>
				
				<button class="hero-cta-secondary glass-button text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300">
					{heroConfig.secondaryCTA}
				</button>
			</div>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
		<div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
			<div class="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
		</div>
	</div>
</section>

<style>
	.floating-circle {
		animation: float 6s ease-in-out infinite;
	}

	.floating-circle:nth-child(2) {
		animation-duration: 8s;
		animation-direction: reverse;
	}

	.floating-circle:nth-child(3) {
		animation-duration: 7s;
	}

	.floating-circle:nth-child(4) {
		animation-duration: 9s;
		animation-direction: reverse;
	}

	.floating-circle:nth-child(5) {
		animation-duration: 5s;
	}

	@keyframes float {
		0%, 100% {
			transform: translateY(0px) rotate(0deg);
		}
		50% {
			transform: translateY(-20px) rotate(180deg);
		}
	}

	.glass-button {
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}
</style>
