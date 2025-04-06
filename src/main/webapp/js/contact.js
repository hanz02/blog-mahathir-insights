// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
	"use strict";

	// Get the form and the modal button element
	const contactForm = document.querySelector(".contact-submission");
	const confirmSubmitButton = document.getElementById("confirmSubmit");

	// Add an event listener for form submission
	contactForm.addEventListener("submit", function(event) {
		// Prevent the default form submission
		event.preventDefault();

		// check if the form is passed the test case
		if (!contactForm.checkValidity()) {
			console.log("Validation Failed");
			contactForm.classList.add("was-validated");

			//* get all invalid feedback elements
			const invalidMessages = document.querySelectorAll(".invalid-feedback");
			const validMessages = document.querySelectorAll(".valid-feedback");


			//* for each invalid message, check which one is currently visible (check for display: block)
			invalidMessages.forEach(message => {
				const style = window.getComputedStyle(message)
				const blockStyle = style.getPropertyValue('display');

				//* if current invalid message is displayed, change the input field style to display red
				if (blockStyle === 'block') {
					if (message.closest(".field-wrap")) {
						message.closest(".field-wrap").classList.add("invalid")
					}
				}

			});

			//* for each valid message, check which one is currently visible (check for display: block)
			validMessages.forEach(message => {
				const style = window.getComputedStyle(message)
				const blockStyle = style.getPropertyValue('display');

				//* if current valid message is displayed, change the input field style to display green
				if (blockStyle === 'block') {
					if (message.closest(".field-wrap")) {
						message.closest(".field-wrap").classList.add("valid")
					}
				}

			});
			return;
		}



		// Form is valid, display modal
		contactForm.submit();
		// const userName = document.getElementById("name").value;
		// const email = document.getElementById("email").value;
		// const phoneNumber = document.getElementById("phone").value;
		// const message = document.querySelector('[name="message"]').value;

		// console.log("final checking");

		// const modal = new bootstrap.Modal(
		//  document.getElementById("staticBackdrop")
		// );

		// const modalBody = document.querySelector(".modal-body");
		// const summary = `
		//        <h5><strong>Name:</strong> ${userName} </h5>
		//         <h5><strong>Email:</strong> ${email} </h5>
		//         <h5><strong>Phone Number (+60):</strong> ${phoneNumber} </h5>
		//        <h5><strong>Message:</strong></h5>
		//         <h5>${message}</h5>
		//        `;

		//  modalBody.innerHTML = summary;

		// Show the modal
		//  modal.show();
	});

	// confirmSubmitButton.addEventListener("click", function() {
	// 	// Manually submit the form when the user confirms
	// 	contactForm.submit();

	// 	// Restore form to default
	// 	contactForm.reset();

	// 	// Remove validation feedback
	// 	contactForm.classList.remove("was-validated");

	// 	textFields.forEach(field => {
	// 		field.closest(".field-wrap")?.classList.remove("active");
	// 	});

	// });
})();

//* Control Card Expand and Close
const container = document.getElementById("cardContainer");
const toggleButton = document.getElementById("toggleButton");
const formBlock = document.getElementById("formBlock");
const leftContent = document.querySelector(".left");
const leftBG = document.getElementById("left-bg");

toggleButton?.addEventListener("click", (e) => {
	e.target.disabled = true;
	//* if form is closed
	if (container.classList.contains("expanded")) {
		//* 1. immediately disable active transparent background
		leftContent.classList.remove("active-transparent");
		leftBG.classList.remove("active-transparent")
		container.classList.remove("active-transparent");

		//* 2. add back the full color background and color
		leftContent.classList.add("full-color");
		leftBG.classList.add("full-color")
		container.classList.add("full-color");

		//* delay the removing of full color
		setTimeout(function() {
			leftContent.classList.remove("full-color");
			leftBG.classList.remove("full-color")
			container.classList.remove("full-color");
			e.target.disabled = false;
		}, 1400)

		//* delay the contact form from killing itself
		setTimeout(function() {
			container.classList.toggle("expanded");
		}, 800)


		//* expand the left box now
		leftBG.classList.remove("active")
		toggleButton.textContent = "View Form";
		leftContent.classList.remove("active")

		//* if form is already opened
	} else {

		leftContent.classList.add("full-color");
		leftBG.classList.add("full-color")
		container.classList.add("full-color");

		//* wait a while
		setTimeout(function() {
			leftContent.classList.add("active-transparent");
			leftBG.classList.add("active-transparent")
			container.classList.add("active-transparent");

			leftContent.classList.remove("full-color");
			leftBG.classList.remove("full-color")
			container.classList.remove("full-color");

			e.target.disabled = false;
		}, 1300)

		container.classList.toggle("expanded");
		toggleButton.textContent = "Close";
		// formBlock.style.display = "block";
		leftContent.classList.toggle("active")
		leftBG.classList.toggle("active")

	}

});

const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", () => {
	container.classList.toggle("expanded");

	if (container.classList.contains("expanded")) {
		toggleButton.textContent = "Close";
		leftContent.classList.toggle("active")
		leftBG.classList.toggle("active")
	} else {
		leftBG.classList.toggle("active")
		leftContent.classList.toggle("active")
		toggleButton.textContent = "View Form";
	}
});


//* pop up small boxes on field click
const textFields = document.querySelectorAll(".form-field");

function isEmptyOrSpaces(str) {
	return str === null || str.match(/^ *$/) !== null;
}

for (var i = 0; i < textFields.length; i++) {
	//* text box on click focus event
	textFields[i].addEventListener('focus', function(e) {

		//* check all other fields and add filled animation
		textFields.forEach(field => {
			if (!isEmptyOrSpaces(field.value) && field !== e.target) {
				field.closest(".field-wrap")?.classList.add("filled")
			}
		});

		const fieldWrapper = e.target.closest(".field-wrap")
		console.log("focused")

		//* text field is focus clicked, rise up all the boxes
		fieldWrapper?.classList.add("active")
		fieldWrapper?.classList.add("isFocused")

		//* text field is focus clicked, remove "filled" state, box 1 and 4 should rise higher
		fieldWrapper?.classList.remove("filled")

		textFields.forEach(field => {

			if (field != e.target) {
				field.closest(".field-wrap")?.classList.remove("active")
			};
		});

	});

	//* this click event is for bug arises when user right click on the text field and the focused event failed to trigger
	textFields[i].addEventListener('click', function(e) {
		const fieldWrapper = e.target.closest(".field-wrap")

		//* bug fix: text field is focus clicked after right clicking, rise up all the boxes again
		if (!fieldWrapper.classList.contains("isFocused")) {
			fieldWrapper.classList.add("isFocused")
			fieldWrapper.classList.add("active")

			console.log("isfoccused");
		}
	});

	//* text box on input change event
	textFields[i].addEventListener('input', function(e) {
		const fieldWrapper = e.target.closest(".field-wrap");
		const validMessage = fieldWrapper.querySelector(".valid-feedback")
		const invalidMessage = fieldWrapper.querySelector(".invalid-feedback")
		if (!isEmptyOrSpaces(e.target.value)) {
			console.log(e.target.value)
			e.target.closest(".field-wrap")?.classList.add("active")
		}

		//* if text box has valid value, make it green. Otherwise make it red
		if (getComputedStyle(validMessage).getPropertyValue('display') === 'block') {
			fieldWrapper.classList.remove("invalid")
			fieldWrapper.classList.add("valid")

		} else if (getComputedStyle(invalidMessage).getPropertyValue('display') === 'block') {
			fieldWrapper.classList.add("invalid")
			fieldWrapper.classList.remove("valid")
		}
	});


}

//* if user did not click on the input field, remove the decorations
document.addEventListener('mousedown', function(event) {
	event.stopPropagation();
	// console.log(event.target)

	// console.log(!event.target.parentNode.classList.contains('field-wrap'));

	if (!event.target.parentNode.classList.contains('field-wrap')) {
		textFields.forEach(field => {
			console.log("herrre");

			field.closest(".field-wrap")?.classList.remove("active")
			field.closest(".field-wrap")?.classList.remove("isFocused")

			if (!isEmptyOrSpaces(field.value)) {
				field.closest(".field-wrap")?.classList.add("filled")
			}

		});
	}
})



