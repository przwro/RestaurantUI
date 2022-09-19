const restaurantName = document.querySelector('#restaurantName');
const city = document.querySelector('#city');
const street = document.querySelector('#street');

const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');

clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    [restaurantName, city, street].forEach(el => el.value = '');
})

sendBtn.addEventListener('click', (e) =>{
    handleFormSubmit(e);
    popup.classList.add('show-popup');
})

async function handleFormSubmit(event) {
	event.preventDefault();

	try {
        //const restaurantForm = document.querySelector('#restaurantForm')
        const restaurantForm = document.getElementById('restaurantForm')
		const formData = new FormData(restaurantForm);
        const url = "https://localhost:5001/api/restaurant/createRestaurant";
		const responseData = await postFormDataAsJson({ url, formData });
		console.log({ responseData });
	} catch (error) {
		console.error(error);
	}
}

async function postFormDataAsJson({ url, formData }) {
	const plainFormData = Object.fromEntries(formData.entries());
	const formDataJsonString = JSON.stringify(plainFormData);

	const fetchOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: formDataJsonString,
	};

	const response = await fetch(url, fetchOptions);

	if (!response.ok) {
		const errorMessage = await response.text();
		throw new Error(errorMessage);
	}

	return response.json();
}
