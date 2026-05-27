const variants = {
	basic: {
		gradientClass: "from-slate-400 to-slate-800",
		name: "Basique",
		price: 0,
		priceClass: "text-gray-300",
		hasAd: true,
		iconClass: "bg-slate-700"
	},
	premium: {
		gradientClass: "from-amber-400 to-amber-800",
		name: "Premium",
		price: 1.99,
		priceClass: "text-orange-200",
		hasAd: false,
		iconClass: "bg-amber-700"
	}
};

class PricingCard extends HTMLElement {
	connectedCallback() {
		const variantName = this.getAttribute("variant");
		const variant = variants[variantName];

		this.innerHTML = `
      <div
        class="flex flex-col gap-4 bg-linear-to-br ${variant.gradientClass} rounded-2xl p-4 text-white"
      >
        <div class="text-lg">${variant.name}</div>

        <div>
          <span class="text-3xl">€${variant.price}</span>
          <span class="${variant.priceClass}">/ mois</span>
        </div>

        <div class="grid grid-cols-[2rem_1fr] gap-x-2 gap-y-1">
          <div
            class="flex justify-center items-center rounded-lg p-1 aspect-square ${variant.iconClass}"
          >
            <div class="relative select-none border border-white text-xs text-center rounded-xs px-0.75">
              ${variant.hasAd ? "" : '<span class="absolute border-t border-white w-8 top-1/2 left-0 -translate-x-1 rotate-135"></span>'}
              AD
            </div>
          </div>
          <div class="flex items-center">${variant.hasAd ? "Avec" : "Sans"} pub</div>

          <div
            class="flex justify-center items-center rounded-lg p-1 aspect-square ${variant.iconClass}"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              stroke="white"
              stroke-width="2"
              fill="white"
              viewBox="0 0 295.01 260.64"
            >
              <path
                d="M238.48,240.01c-29.92,27.26-147.52,26.87-179.29,2.55-4.02-3.07-9.67-9.36-10.4-14.51l-.03-63.57C7.48,148.19-13.64,104.18,9.66,63.51c12.44-21.71,36.7-36.74,61.6-39.07,4.51-.42,11.97.75,15.61-.33,1.06-.31,9.66-8.72,12.35-10.57,26.4-18.18,65.89-17.11,93.69-2.36,6.98,3.7,11.99,10.36,19.76,11.13,9.8.98,15.98.8,25.84,4.06,45.21,14.98,73.57,65.56,45.04,108.71-9.47,14.31-22.94,21.98-37.34,30.44-.14,12.57-.38,25.18-.21,37.75.03,2.36.22,6.27.27,8.63-.23,14.54,2.31,18.58-7.78,28.13ZM232.09,203.71v-50.83c48.49-12.15,67.41-65.34,26.39-99.64-32.22-26.94-86.46-20.32-116.61,6.92l-14.42,17.96c3.14-25.58,23.44-47.59,47.58-55.57,1.31-.31,2.92-.51,4.29-.55-1.22-1.23-1.44-1.41-2.6-2.04-12.83-7.02-37.87-6.64-51.72-2.57-39.71,11.66-53.93,58.39-33.44,92.63-23.01-9.18-26.58-36.32-20.44-57.81,1.31-4.59,4.11-8.23,4.49-12.94C35.08,40.59-.58,83.95,20.63,122.65c8.78,16.03,25.48,25.99,42.59,31.17l.45,50.89c5.56-2.91,11.71-4.95,17.72-6.68,38.83-11.15,94.27-11.19,133.18-.21,6.01,1.69,11.45,4.58,17.52,5.9ZM65.99,230.28c1.44,1.44,9.15,5.08,11.46,5.98,33.52,13.04,99.36,12.25,133.71,1.83,4.66-1.41,21.29-6.84,20.73-12.8-1.39-4.08-5.73-6.63-9.38-8.5-31.56-16.15-114.36-15.56-146.87-1.6-5.91,2.54-17.09,7.65-9.64,15.09Z"
              />
              <path
                d="M219.73,162.18c-7.98-1.93-16.42-4.62-24.52-5.87-27.46-4.24-67.04-4.24-94.48,0-3.72.57-24.47,6.66-25.51,5.87,2.9-5.16,9.26-9.06,14.46-11.94,29.84-16.5,92.34-18.93,120.56,2,1.04.77,10.51,9.12,9.49,9.94Z"
              />
            </svg>
          </div>
          <div class="flex items-center">Accès complet</div>
        </div>
      </div>
    `;
	}
}

export default PricingCard;
