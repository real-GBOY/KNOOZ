/** @format */

document.addEventListener("DOMContentLoaded", function () {
	// Handle thumbnail gallery clicks
	const thumbnails = document.querySelectorAll(".thumbnail-gallery img");
	thumbnails.forEach((thumb) => {
		thumb.addEventListener("click", function () {
			const mainImage =
				this.closest(".product-gallery").querySelector(".main-image");
			mainImage.src = this.src;

			// Update active state
			thumbnails.forEach((t) => t.classList.remove("active"));
			this.classList.add("active");

			// Add zoom effect
			mainImage.style.transform = "scale(1.1)";
			setTimeout(() => {
				mainImage.style.transform = "scale(1)";
			}, 200);
		});
	});

	// Handle modal show/hide
	const modals = document.querySelectorAll(".modal");
	modals.forEach((modal) => {
		modal.addEventListener("show.bs.modal", function () {
			// Reset main image to first thumbnail when modal opens
			const mainImage = this.querySelector(".main-image");
			const firstThumb = this.querySelector(".thumbnail-gallery img");
			if (mainImage && firstThumb) {
				mainImage.src = firstThumb.src;
				firstThumb.classList.add("active");
			}

			// Add entrance animation
			const modalContent = this.querySelector(".modal-content");
			modalContent.style.opacity = "0";
			modalContent.style.transform = "translateY(20px)";
			setTimeout(() => {
				modalContent.style.opacity = "1";
				modalContent.style.transform = "translateY(0)";
			}, 50);
		});

		modal.addEventListener("hide.bs.modal", function () {
			// Reset active state
			const thumbnails = this.querySelectorAll(".thumbnail-gallery img");
			thumbnails.forEach((t) => t.classList.remove("active"));
		});
	});

	// Add smooth scroll behavior
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute("href"));
			if (target) {
				target.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		});
	});

	// Add animation to product cards on scroll
	const productCards = document.querySelectorAll(".product-card");
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.style.opacity = "1";
					entry.target.style.transform = "translateY(0)";
				}
			});
		},
		{
			threshold: 0.1,
		}
	);

	productCards.forEach((card) => {
		card.style.opacity = "0";
		card.style.transform = "translateY(20px)";
		card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
		observer.observe(card);
	});

	// Add hover effect to product features
	const featureItems = document.querySelectorAll(".product-features li");
	featureItems.forEach((item) => {
		item.addEventListener("mouseenter", function () {
			this.style.transform = "translateX(-5px)";
			this.style.transition = "transform 0.3s ease";
		});

		item.addEventListener("mouseleave", function () {
			this.style.transform = "translateX(0)";
		});
	});

	// Add loading animation to video container
	const videoContainers = document.querySelectorAll(".video-container");
	videoContainers.forEach((container) => {
		container.addEventListener("mouseenter", function () {
			this.style.transform = "scale(1.02)";
			this.style.transition = "transform 0.3s ease";
		});

		container.addEventListener("mouseleave", function () {
			this.style.transform = "scale(1)";
		});
	});
});
