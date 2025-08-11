<script>
	let { isNavbarVisible } = $props();
	let isMobileMenuOpen = $state(false);

	const navItems = [
		{ name: 'Services', href: '#services' },
		{ name: 'Technology', href: '#technology' },
		{ name: 'Benefits', href: '#benefits' },
		{ name: 'About', href: '#about' }
	];

	const scrollToHero = () => {
		const heroElement = document.getElementById('hero');
		if (heroElement) {
			heroElement.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	};

	const toggleMobileMenu = () => {
		isMobileMenuOpen = !isMobileMenuOpen;
	};
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out {isNavbarVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}">
	<div class="glass-effect border-b border-white/10">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<!-- Logo -->
				<button 
					onclick={scrollToHero}
					class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-lg px-2 py-1"
					aria-label="Scroll to Hero"
				>
					Workish
				</button>

				<!-- Desktop Navigation -->
				<div class="hidden md:flex items-center space-x-8">
					{#each navItems as item}
						<a 
							href={item.href}
							class="nav-link relative text-gray-300 hover:text-white transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/5"
							aria-label={item.name}
						>
							{item.name}
							<span class="nav-underline absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-300"></span>
						</a>
					{/each}
					<button class="cta-button bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-6 py-2 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
						aria-label="Get Started"
					>
						Get Started
					</button>
				</div>

				<!-- Mobile Menu Button -->
				<button 
					onclick={toggleMobileMenu}
					class="hamburger-menu md:hidden relative w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-emerald-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
					aria-label="Toggle Mobile Menu"
				>
					<div class="hamburger-lines">
						<span class="hamburger-line block w-5 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-300 {isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}"></span>
						<span class="hamburger-line block w-5 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-300 my-1 {isMobileMenuOpen ? 'opacity-0' : ''}"></span>
						<span class="hamburger-line block w-5 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-300 {isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}"></span>
					</div>
				</button>
			</div>
		</div>

		<!-- Mobile Menu -->
		{#if isMobileMenuOpen}
			<div class="md:hidden glass-effect border-t border-white/10">
				<div class="px-4 py-6 space-y-4">
					{#each navItems as item, index}
						<a 
							href={item.href}
							class="mobile-nav-item block text-gray-300 hover:text-white transition-all duration-300 px-4 py-3 rounded-lg hover:bg-white/5"
							style="animation-delay: {index * 100}ms"
							onclick={() => isMobileMenuOpen = false}
							aria-label={item.name}
						>
							{item.name}
						</a>
					{/each}
					<button class="mobile-cta-button w-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-6 py-3 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 mt-4"
						aria-label="Get Started"
					>
						Get Started
					</button>
				</div>
			</div>
		{/if}
	</div>
</nav>

<style>
	.glass-effect {
		background: rgba(15, 23, 42, 0.8);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
	}

	.nav-link:hover .nav-underline {
		width: 100%;
	}

	.mobile-nav-item {
		animation: slideInFromLeft 0.3s ease-out forwards;
		opacity: 0;
		transform: translateX(-20px);
	}

	@keyframes slideInFromLeft {
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
