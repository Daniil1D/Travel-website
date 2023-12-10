const testimonials = [
    {
        imgSrc: "./img/Image.svg",
        text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
        name: "Mike Taylor",
        location: "Lahore, Pakistan"
    },
    {
        imgSrc: "./img/Image.svg",
        text: "“On s exp laetrtrest uverted no.”",
        name: "Mike Taylor",
        location: "Lahore, Pakistan"
    },
    {
        imgSrc: "./img/Image.svg",
        text: "“On s exp last uverted ertterteert ertetrno.”",
        name: "Mike Taylor",
        location: "Lahore, Pakistan"
    },
    {
        imgSrc: "./img/Image.svg",
        text: "“On s exp last uverted n ertetrtre ertteteo.”",
        name: "Mike Taylor",
        location: "Lahore, Pakistan"
    },
    {
        imgSrc: "./img/Image.svg",
        text: "“On s exp last uverte trettr erterttre ertert etetd no.”",
        name: "Mike Taylor",
        location: "Lahore, Pakistan"
    },
];


let currentIndex = 0;


function renderTestimonial() {
    const testimonialContainer = document.getElementById("testimonial-container");
    const testimonial = testimonials[currentIndex];

    testimonialContainer.innerHTML = `
        <div class="Testimonials-kartochka">
            <div class="Testimonials-img">
                <img src="${testimonial.imgSrc}" alt="">
            </div>
            <div class="Testimonials-text">
                <p>${testimonial.text}</p>
            </div>
            <h3 class="Testimonials-texth3">${testimonial.name}</h3>
            <p class="Testimonials-textp">${testimonial.location}</p>
        </div>
    `;
}


function changeCard(direction) {
    if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    } else if (direction === 'next') {
        currentIndex = (currentIndex + 1) % testimonials.length;
    }

    renderTestimonial();
}


renderTestimonial();
