<script>
	const currentYear = new Date().getFullYear();
	
	const footerLinks = {
		Solutions: ['PoS Systems', 'Sales Automation', 'AI Logistics', 'Analytics'],
		Company: ['About', 'Careers', 'Press', 'Partners'],
		Resources: ['Documentation', 'Help Center', 'Community', 'Blog'],
		Legal: ['Privacy Policy', 'Terms of Service', 'Security', 'Compliance']
	};
</script>

<footer class="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative overflow-hidden">
	<div class="max-w-7xl mx-auto relative z-10">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
			<!-- Brand -->
			<div class="lg:col-span-2">
				<div class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
					Workish
				</div>
				<p class="text-slate-400 mb-6 max-w-md leading-relaxed">
					Intelligent Business Solutions for the modern enterprise. Transform your operations with AI-powered technology.
				</p>
				<p class="text-slate-500 text-sm">
					Transform your business today. Contact our specialists.
				</p>
			</div>

			<!-- Links -->
			{#each Object.entries(footerLinks) as [category, links]}
				<div>
					<h4 class="text-white font-semibold mb-4">{category}</h4>
					<ul class="space-y-2">
						{#each links as link}
							<li>
								<a href="#{link.toLowerCase().replace(' ', '-')}" class="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
									{link}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<!-- Bottom -->
		<div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
			<p class="text-slate-500 text-sm mb-4 md:mb-0">
				© {currentYear} Workish. All rights reserved.
			</p>
			<div class="flex space-x-6">
				<a href="#privacy" class="text-slate-500 hover:text-white transition-colors duration-300 text-sm">Privacy</a>
				<a href="#terms" class="text-slate-500 hover:text-white transition-colors duration-300 text-sm">Terms</a>
				<a href="#contact" class="text-slate-500 hover:text-white transition-colors duration-300 text-sm">Contact</a>
			</div>
		</div>
	</div>
</footer>
