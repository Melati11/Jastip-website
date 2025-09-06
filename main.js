const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

const divider = document.querySelector('.fade-divider');
const appearDivid = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.5
});

appearDivid.observe(divider);

const orders = document.querySelectorAll('.fade-order');
const appearOrder = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.5
});

orders.forEach(order => {
    appearOrder.observe(order);
});

const form = document.getElementById("search-form")
const input = document.getElementById("search-input");
const listObject = document.getElementById("listObject");
const objects = listObject.getElementsByClassName("object");

form.addEventListener("submit", function(e) {
     e.preventDefault(); 

    const keyword = input.value.toLowerCase().trim();

    for (let obj of objects) {
        const text = obj.innerText.toLowerCase();

        if (keyword === "" || text.includes(keyword)) {
            obj.style.display = "block";
        } else {
            obj.style.display = "none";
        }
    }
});

input.addEventListener("input", function() {
    if (input.value.trim() === "") {
        for (let obj of objects) {
            obj.style.display = "block";
        }
    }
});