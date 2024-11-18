document.querySelectorAll('.nav-button').forEach(button => {
	button.addEventListener('click', function (e) {
		// Remove any existing spark effects
		this.classList.remove('sparking');

		// Create spark particles
		for (let i = 0; i < 10; i++) {
			const spark = document.createElement('div');
			spark.style.cssText = `
                        position: absolute;
                        width: 4px;
                        height: 4px;
                        background: var(--neon-color);
                        border-radius: 50%;
                        pointer-events: none;
                        z-index: 1000;
                    `;

			const rect = this.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			spark.style.left = x + 'px';
			spark.style.top = y + 'px';

			this.appendChild(spark);

			const angle = Math.random() * Math.PI * 2;
			const velocity = 2 + Math.random() * 4;
			const dx = Math.cos(angle) * velocity;
			const dy = Math.sin(angle) * velocity;

			let opacity = 1;

			const animate = () => {
				const currentLeft = parseFloat(spark.style.left);
				const currentTop = parseFloat(spark.style.top);

				spark.style.left = currentLeft + dx + 'px';
				spark.style.top = currentTop + dy + 'px';
				opacity -= 0.05;
				spark.style.opacity = opacity;

				if (opacity > 0) {
					requestAnimationFrame(animate);
				} else {
					spark.remove();
				}
			};

			requestAnimationFrame(animate);
		}

		// Add sparking effect
		this.classList.add('sparking');

		// Remove sparking class after animation
		setTimeout(() => {
			this.classList.remove('sparking');
		}, 500);
	});
});
