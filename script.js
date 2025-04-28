/** @format */

document.addEventListener("DOMContentLoaded", function () {
	// Global variables
	let allCrafts = [];
	const craftsGrid = document.getElementById("craftsGrid");
	const modal = document.getElementById("craftDetailModal");
	const modalContent = document.getElementById("craftModalContent");
	const modalInstance = new bootstrap.Modal(modal);

	// Initialize with data
	function initializeData() {
		allCrafts = [
			{
				id: 1,
				name: "سجادة يدوية مزخرفة",
				category: "rugs",
				description:
					"سجادة فاخرة مصنوعة يدويًا من الصوف الطبيعي، بتصاميم مستوحاة من الفن الشرقي والزخارف التقليدية.",
				longDescription:
					"تتميز هذه السجادة المصنوعة يدويًا بدقة تفاصيلها وجودة خاماتها. يستخدم الحرفيون الصوف الطبيعي والقطن عالي الجودة لصناعة هذه القطعة الفنية التي تعكس التراث الشرقي الأصيل. عملية النسج تتم بالكامل يدويًا باستخدام أنوال تقليدية، مما يضمن المتانة والتفاصيل الدقيقة في كل غرزة. تتميز السجادة بنقوش هندسية وزهرية تعبر عن جمال الفن الإسلامي، وتعد إضافة أنيقة لأي منزل.",
				featured: true,
				images: ["imgs/carrpet.jpg", "imgs/carrpet.jpg", "imgs/carrpet.jpg"],
			},
			{
				id: 2,
				name: "مجموعة الفخار اليدوي",
				category: "pottery",
				description:
					"تتميز هذه المجموعة الفخارية بتصاميمها التقليدية المستوحاة من التراث العريق، مصنوعة يدويًا باستخدام تقنيات الفخار القديمة.",
				longDescription:
					"مجموعة الفخار اليدوي تجمع بين الفن والوظيفة، حيث يتم تشكيل كل قطعة بعناية فائقة على أيدي حرفيين مهرة. تُستخدم الطين الطبيعي والألوان الطبيعية في صناعة هذه القطع، مما يجعل كل واحدة منها فريدة بطابعها الخاص. يتم حرق الفخار في درجات حرارة عالية لضمان المتانة والجودة، ما يجعله مثاليًا للاستخدام اليومي أو كقطعة فنية في الديكور. المجموعة تضم أواني متعددة الأحجام والأشكال تلبي مختلف الاحتياجات.",
				featured: true,
				images: ["imgs/main.jpg", "imgs/main.jpg", "imgs/main.jpg"],
			},
			{
				id: 3,
				name: "مجموعة النحاسيات التقليدية",
				category: "brassware",
				description:
					"تحف نحاسية فريدة مصنوعة يدويًا بأيدي حرفيين مهرة، تعكس جمال الفن الإسلامي والتصاميم التراثية.",
				longDescription:
					"مجموعة النحاسيات التقليدية مستوحاة من الحرف التراثية العريقة التي ازدهرت في الأسواق العربية القديمة. يتم تشكيل النحاس بدقة من خلال عمليات الطرق والنقش اليدوي لإبراز الزخارف الهندسية والنقوش الإسلامية. تُستخدم تقنيات التلميع والتعتيق لإضفاء لمسة فنية أصيلة على كل قطعة، مما يجعلها مثالية للاستخدام كديكور فاخر أو كهدية تراثية مميزة. المجموعة تشمل صواني وأباريق وفوانيس مزخرفة بأدق التفاصيل.",
				featured: true,
				images: ["imgs/copper.jpg", "imgs/copper.jpg", "imgs/copper.jpg"],
			},

			{
				id: 4,
				name: "حقيبة جلدية يدوية",
				category: "leather",
				description:
					"حقيبة أنيقة مصنوعة يدويًا من الجلد الطبيعي المدبوغ بطرق تقليدية، تجمع بين الفخامة والمتانة.",
				longDescription:
					"تم تصميم هذه الحقيبة الجلدية بعناية فائقة من قبل أمهر الحرفيين الذين يستخدمون تقنيات دباغة طبيعية مستوحاة من التراث العربي. يتم اختيار الجلود بعناية لضمان الجودة والمتانة، ثم تُعالَج باستخدام الزيوت الطبيعية لتعزيز نعومتها ولمعانها. تأتي الحقيبة بتصميم كلاسيكي يناسب الاستخدام اليومي، مع جيوب داخلية ومساحة واسعة لحفظ الأغراض الشخصية، مما يجعلها عملية وأنيقة في آنٍ واحد.",
				featured: true,
				images: ["imgs/th.jpeg", "imgs/th.jpeg", "imgs/th.jpeg"],
			},
		];

		displayCrafts(allCrafts);
		setupFeaturedItems();
	}

	// Display crafts in grid
	function displayCrafts(crafts) {
		craftsGrid.innerHTML = "";
	}

	// Open craft detail modal with optimized template
	function openCraftDetail(craftId) {
		const craft = allCrafts.find((c) => c.id === Number(craftId));
		if (!craft) return;

		modalContent.innerHTML = `
			<div class="row g-0">
				<div class="col-md-6">
					<div id="craftCarousel" class="carousel slide" data-bs-ride="carousel">
						<div class="carousel-inner">
							${craft.images
								.map(
									(img, index) => `
								<div class="carousel-item ${index === 0 ? "active" : ""}">
									<img src="${img}" class="d-block w-100 craft-detail-img" alt="${
										craft.name
									}" loading="lazy">
								</div>
							`
								)
								.join("")}
						</div>
						<button class="carousel-control-prev" type="button" data-bs-target="#craftCarousel" data-bs-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						</button>
						<button class="carousel-control-next" type="button" data-bs-target="#craftCarousel" data-bs-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
						</button>
					</div>
				</div>
				<div class="col-md-6">
					<div class="p-4">
						<div class="d-flex justify-content-between align-items-start mb-3">
							<h2>${craft.name}</h2>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<p class="text-muted mb-4">${craft.longDescription}</p>
						<div class="mb-4">
							<span class="badge bg-light text-dark">${craft.category}</span>
						</div>
						<div class="d-flex justify-content-between align-items-center">
							<button class="btn btn-primary">اطلب الآن</button>
							<button class="btn btn-outline-secondary">تواصل مع الحرفي</button>
						</div>
					</div>
				</div>
			</div>
		`;

		modalInstance.show();
	}

	// Setup featured items carousel
	function setupFeaturedItems() {
		const featuredCrafts = allCrafts.filter((craft) => craft.featured);
		const carouselInner = document.querySelector(
			"#featuredCarousel .carousel-inner"
		);

		if (!carouselInner || featuredCrafts.length === 0) return;

		carouselInner.innerHTML = featuredCrafts
			.map(
				(craft, index) => `
			<div class="carousel-item ${index === 0 ? "active" : ""}">
				<img src="${craft.images[0]}" class="d-block w-100" alt="${
					craft.name
				}" loading="lazy">
				<div class="carousel-caption">
					<h3>${craft.name}</h3>
					<p>${craft.description}</p>
					<button class="btn btn-light mt-2" data-id="${craft.id}">عرض التفاصيل</button>
				</div>
			</div>
		`
			)
			.join("");

		// Add event listeners to buttons
		carouselInner.querySelectorAll("button").forEach((button) => {
			button.addEventListener("click", () =>
				openCraftDetail(button.dataset.id)
			);
		});
	}

	// Initialize
	initializeData();
});

// Optimized Intersection Observer for animations
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
				observer.unobserve(entry.target); // Stop observing after animation
			}
		});
	},
	{ threshold: 0.1 }
);

// Add fade-in class and observe elements
document
	.querySelectorAll(".craft-card, .hero-title, .hero-subtitle, .section-title")
	.forEach((element) => {
		element.classList.add("fade-in");
		observer.observe(element);
	});

// Optimized smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute("href"));
		if (target) {
			target.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	});
});

// Optimized counter animation
function animateCounter(element) {
	const target = parseInt(element.getAttribute("data-count"));
	const duration = 2000;
	const start = performance.now();

	function update(currentTime) {
		const elapsed = currentTime - start;
		const progress = Math.min(elapsed / duration, 1);

		element.textContent = Math.floor(target * progress);

		if (progress < 1) {
			requestAnimationFrame(update);
		}
	}

	requestAnimationFrame(update);
}

// Optimized counter observer
const counterObserver = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target
					.querySelectorAll(".achievement-number")
					.forEach(animateCounter);
				observer.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.1 }
);

// Start observing the achievements section
document.addEventListener("DOMContentLoaded", () => {
	const achievementsSection = document.querySelector(".achievements-section");
	if (achievementsSection) {
		counterObserver.observe(achievementsSection);
	}
});

// Add responsive handling for the achievements section
function handleResponsive() {
	const achievementCards = document.querySelectorAll(".achievement-card");
	if (window.innerWidth < 768) {
		achievementCards.forEach((card) => {
			card.style.margin = "0.5rem 0";
		});
	} else {
		achievementCards.forEach((card) => {
			card.style.margin = "0";
		});
	}
}

// Listen for window resize
window.addEventListener("resize", handleResponsive);
// Initial call
handleResponsive();

// Carousel Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
	const toggleButton = document.getElementById("toggleCarousel");
	const carousel = document.getElementById("featuredCarousel");
	const buttonText = toggleButton.querySelector("span");
	const buttonIcon = toggleButton.querySelector("i");

	toggleButton.addEventListener("click", function () {
		if (carousel.style.display === "none") {
			carousel.style.display = "block";
			buttonText.textContent = "إخفاء المعرض";
			buttonIcon.className = "fas fa-eye-slash me-2";
			carousel.classList.add("fade-in");
		} else {
			carousel.style.display = "none";
			buttonText.textContent = "عرض المعرض";
			buttonIcon.className = "fas fa-images me-2";
			carousel.classList.remove("fade-in");
		}
	});
});

// Remove Lazy Loading Implementation
document.addEventListener("DOMContentLoaded", function () {
	// Get all images and ensure they're visible
	const images = document.querySelectorAll("img");
	images.forEach((img) => {
		img.style.opacity = "1";
		if (img.dataset.src) {
			img.src = img.dataset.src;
		}
	});
});

// Fade In Animation Handler
document.addEventListener("DOMContentLoaded", function () {
	// Function to check if element is in viewport
	function isInViewport(element) {
		const rect = element.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	// Function to handle fade in animation
	function handleFadeIn() {
		const elements = document.querySelectorAll(
			[
				".hero-title",
				".hero-subtitle",
				".hero-buttons",
				".section-title",
				".section-subtitle",
				".craft-card",
				".achievement-card",
				".contact-form",
				".footer-brand",
				".footer-title",
				".footer-list",
				".newsletter-form",
			].join(",")
		);

		elements.forEach((element, index) => {
			if (isInViewport(element) && !element.classList.contains("fade-in")) {
				// Add staggered delay based on element index within its parent
				const delay = index % 4;
				element.classList.add("fade-in", `delay-${delay + 1}`);
			}
		});
	}

	// Initial check for elements in viewport
	handleFadeIn();

	// Check for new elements on scroll
	window.addEventListener("scroll", handleFadeIn);

	// Check on window resize
	window.addEventListener("resize", handleFadeIn);
});
