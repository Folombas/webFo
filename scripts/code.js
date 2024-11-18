document.querySelectorAll('.nav-button').forEach(button => {
	button.addEventListener('click', function (e) {
		// Add matrix color effect
		this.style.background = 'linear-gradient(45deg, #00ff00, #003300)';
		this.style.boxShadow = '0 0 15px rgba(0, 255, 0, 0.5)';

		// Create splash effect
		const splash = document.createElement('div');
		splash.className = 'splash';

		const rect = this.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		splash.style.left = x + 'px';
		splash.style.top = y + 'px';

		this.appendChild(splash);

		// Animate button
		this.style.transform = 'scale(1.1)';

		// Reset button styles after animation
		setTimeout(() => {
			this.style.background = 'linear-gradient(45deg, #2a3a4a, #1a2530)';
			this.style.boxShadow = '';
			this.style.transform = '';
			splash.remove();
		}, 600);
	});
});
