let unsortedAPI = "http://10.59.122.39:3000/v1/feedbacks"

fetch(unsortedAPI)
    .then((response) => response.json())
        .then((data) => {
            console.log("Data fetched successfully:", data);
            const feedbackList = document.querySelector(".feedback-wrapper")
            console.log(feedbackList)
            data.forEach((feedback) => {
                const feedbackItem = document.createElement("div")
                feedbackItem.classList.add("feedback-item")
                const feedbackItems = document.querySelectorAll(".feedback-item")
				const searchButton = document.querySelector("#search");

				searchButton.addEventListener("click", (e) => {
					e.preventDefault();
					const feedbackCounter = document.querySelector(".feedback-counter");
					if (feedbackCounter) {
						feedbackCounter.innerHTML = feedbackItems.length;
					}
				});


                feedbackItem.innerHTML = `
					<div class="feedback-item-votes">
						<svg viewBox="0 0 24 24">
							<path
								d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
								style="fill: currentcolor"
							></path>
						</svg>
						<span class="text-regular-3">${feedback.votes}</span>
					</div>
					<div class="feedback-item-text">
						<h3 class="heading-3">${feedback.title}</h3>
						<p>${feedback.description}</p>
						<div class="feedback-chip text-regular-3">${feedback.category}</div>
					</div>
					<div class="feedback-item-comments">
						<svg class="grey-lighten-1-text" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"
							></path>
						</svg>
						<span class="bold">${feedback.comments}</span>
					</div>
                `
                feedbackList.appendChild(feedbackItem)
            })

			const voteCount = document.querySelectorAll(".text-regular-3");
			voteCount.forEach((vote) => {
				console.log(vote.textContent);
			});

            const filterSort = document.querySelector("#filter-sort")
			let sortedAPI = "http://10.59.122.39:3000/v1/feedbacks?sort=upvotes"
			filterSort.addEventListener("change", (event) => {
				const selectedValue = event.target.value;
				console.log(selectedValue);
				if (selectedValue === "Most Upvotes") {
					let unsortedAPI = "http://10.59.122.39:3000/v1/feedbacks?sort=upvotes"
				} else if (selectedValue === "Recent") {
					
				}
			})
            console.log(filterSort)

        })