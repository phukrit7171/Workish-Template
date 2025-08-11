<script>
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import ServicesSection from '$lib/components/ServicesSection.svelte';
	import TechnologySection from '$lib/components/TechnologySection.svelte';
	import BenefitsSection from '$lib/components/BenefitsSection.svelte';
	import SocialProofSection from '$lib/components/SocialProofSection.svelte';
	import CTASection from '$lib/components/CTASection.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let isNavbarVisible = $state(true);
	let lastScrollY = $state(0);
	let mouseY = $state(0);

	onMount(() => {
		const observerOptions = {
			threshold: 0.1,
			rootMargin: "0px 0px -50px 0px",
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("animate-fade-in-up");
				}
			});
		}, observerOptions);

		const elements = document.querySelectorAll(".animate-on-scroll");
		elements.forEach((el) => observer.observe(el));

		const handleScroll = () => {
			const scrolled = window.pageYOffset;
			const scrollThreshold = 100;
			const mouseTopZone = 100;

			if (scrolled > scrollThreshold) {
				if (mouseY <= mouseTopZone || scrolled < lastScrollY) {
					isNavbarVisible = true;
				} else if (scrolled > lastScrollY && mouseY > mouseTopZone) {
					isNavbarVisible = false;
				}
			} else {
				isNavbarVisible = true;
			}
			lastScrollY = scrolled;

			requestAnimationFrame(() => {
				const parallaxElements = document.querySelectorAll(".parallax");
				parallaxElements.forEach((element) => {
					const speed = 0.3;
					const yPos = -(scrolled * speed);
					element.style.transform = `translateY(${yPos}px)`;
				});
			});
		};

		let mouseTimeout;
		const handleMouseMove = (e) => {
			mouseY = e.clientY;

			if (e.clientY <= 100 && window.pageYOffset > 100) {
				isNavbarVisible = true;
			}

			clearTimeout(mouseTimeout);
			mouseTimeout = setTimeout(() => {
				if (e.clientY > 100 && window.pageYOffset > 100 && window.pageYOffset > lastScrollY) {
					isNavbarVisible = false;
				}
			}, 1000);
		};

		const handleAnchorClick = (e) => {
			const target = e.target;
			if (target.getAttribute("href")?.startsWith("#")) {
				e.preventDefault();
				const targetId = target.getAttribute("href")?.slice(1);
				const targetElement = document.getElementById(targetId || "");
				if (targetElement) {
					targetElement.scrollIntoView({
						behavior: "smooth",
						block: "start",
					});
				}
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("mousemove", handleMouseMove, { passive: true });
		document.addEventListener("click", handleAnchorClick);

		return () => {
			observer.disconnect();
			clearTimeout(mouseTimeout);
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("click", handleAnchorClick);
		};
	});
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
	<Navbar {isNavbarVisible} />
	<HeroSection />
	<ServicesSection />
	<TechnologySection />
	<BenefitsSection />
	<SocialProofSection />
	<CTASection />
	<Footer />
</div>
