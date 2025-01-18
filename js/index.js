//Responsive Navbar
const mobile_menu = document.querySelector('.mobile-menu')
const links = document.querySelector('.links')

mobile_menu.addEventListener('click', () => {
    links.classList.toggle('active')
})

// In responsive nav , when users click on any link, the navbar will be closed
links.addEventListener('click', () => {
    links.classList.remove('active')
})


// Search icon
const search_icon = document.getElementById('search-icon')
const cross_icon = document.getElementById('cross-icon')
const search_input = document.querySelector('.search-box')

// click on search icon show the search box and hide the search icon then show the cross icon 
search_icon.addEventListener('click', () => {
    search_input.classList.add('searchBox-show')
    cross_icon.classList.add('cross-show')
    search_icon.classList.add('searchIcon_show')
})

// cross icon for hide the search box and remove the cross then show the search icon
cross_icon.addEventListener('click', () => {
    search_input.classList.remove('searchBox-show')
    cross_icon.classList.remove('cross-show')
    search_icon.classList.remove('searchIcon_show')
})




// login & signup form 
const login_btn = document.querySelector('#login-btn')
const login_signup = document.querySelector('.login-signup')
const login_form = document.querySelector('.login-form')
const signup_form = document.querySelector('.signup-form')
const signup_now = document.querySelector('.signup-now')
const login_now = document.querySelector('.login-now')

// open the form
login_btn.addEventListener('click', () => {
    login_signup.classList.add('show')
    login_form.classList.add('login-active')
    signup_form.classList.remove('signup-active')
})

// when click on signup , show signup form and hide login form
signup_now.addEventListener('click', () => {
    login_form.classList.remove('login-active')  // hide login form
    signup_form.classList.add('signup-active')   // show signup form
})


// when user click on login, login form show and hide signup form
login_now.addEventListener('click', () => {
    signup_form.classList.remove('signup-active')  // hide signup form
    login_form.classList.add('login-active')  // shoe login form
})


// Close the form
const close_btn = document.querySelector('#close')

close_btn.addEventListener('click', () => {
    login_signup.classList.remove('show')
})






//  signup form validation

const signupFrom = document.querySelector('.signup')

// Add an event listener for form submission
signupFrom.addEventListener('submit', (e) => {

    e.preventDefault() // Prevent the form from submitting

    // Get input elements and Trim input values to remove unnecessary spaces
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value.trim();
    const Confirmpassword = document.getElementById("confirmPass").value.trim();

    // get error element
    const emailError = document.getElementById('emailError');
    const passError = document.getElementById('passError');
    const confirmPassError = document.getElementById('confirmPassError');


    emailError.textContent = "";
    passError.textContent = "";
    confirmPassError.textContent = "";


    // validate email    
    if (email === "" && !email.includes("@") && !email.includes(".")) {
        emailError.textContent = "Email is required";
    }

    // validte password
    else if (password === "") {
        passError.textContent = "Password is required.";
    } else if (password.length < 6) {
        passError.textContent = "Password must be alteast 6 characters long"
    }

    // validate confirm password
    else if (Confirmpassword === "") {
        confirmPassError.textContent = "Confirm password is required";
    } else if (Confirmpassword !== password) {
        confirmPassError.textContent = "Password doesn't match"
    }

    else {
        alert('Signup successfully')
        window.location.href = "index.html" // Redirect to index.html after successful signup
    }

})






// Search functionality
// search blog through blog title, content, and categories
const search_box = document.querySelector('.search-box');

search_box.addEventListener('input', (e) => {
    let inputValue = e.target.value.toLowerCase();

    const card = document.querySelectorAll('.card')

    card.forEach((card) => {
        const title = card.querySelector('h3').innerText.toLowerCase(); // converts text into lowercase
        const description = card.querySelector('p').innerText.toLowerCase();  // converts text into lowercase

        if (title.includes(inputValue) || description.includes(inputValue) || card.dataset.category.includes(inputValue)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    })

})



// Contact form validation

let contactForm = document.querySelector('#contact-form')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()


    // get the input element
    let firstName = document.querySelector('#firstName').value.trim();
    let lastName = document.querySelector('#lastName').value.trim();
    let emailAddress = document.querySelector('#emailAddress').value.trim();
    let message = document.querySelector('#message').value.trim();

    // get the error element 
    let firstNameError = document.querySelector('#firstNameError')
    let lastNameError = document.querySelector('#lastNameError')
    let emailAddressError = document.querySelector('#emailAddressError')
    let messageError = document.querySelector('#messageError')

    firstNameError.innerText = ''
    lastNameError.innerText = ''
    emailAddressError.innerText = ''
    messageError.innerText = ''

    // Initialize validation status
    let isValid = true;

    // validate the input fields
    if (!firstName) {
        firstNameError.innerText = "First Name is requird."
        isValid = false;
    }

    if (!lastName) {
        lastNameError.innerText = "Last Name is requird."
        isValid = false;
    }

    if (!emailAddress) {
        emailAddressError.innerText = "Email Address is requird."
        isValid = false;
    }

    if (!message) {
        messageError.innerText = "Message is requird."
        isValid = false;
    }

    // if all input field is valid call contact popup
    if (isValid) {
        contactPopup(); // it is show after message sent successfully
        contactForm.reset()
    }

})

// function to show pop up when user send the message
function contactPopup() {
    const popup = document.querySelector('.contactForm-popup')
    popup.style.display = 'block';

    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000)
}




// Filter blog functionality

let filter_buttons = document.querySelector('.filter-buttons')
filter_buttons.addEventListener('click', (e) => {
    let category = e.target.innerText.toLowerCase(); // convert category into lowercase

    let card = document.querySelectorAll('.card');

    // loop through all the card and compare them
    card.forEach((card) => {
        // console.log(card.dataset.category.toLowerCase())
        if (category === 'All' || card.dataset.category.toLowerCase() === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    })

})


// filter button active functionality 

// Get all the buttons
let buttons = filter_buttons.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click',(e)=>{

        // remove active class from all buttons
        buttons.forEach((btn)=> btn.classList.remove('active'))

        // add active class to the clicked button
        button.classList.add('active')

    })
})






// Default blogs 
// get the data from local storage
const blogs = JSON.parse(localStorage.getItem('blogs')) || [
    { category: 'travel', title: 'Explore Mountains', description: 'A detailed look at the world\'s best beaches. Relax and enjoy the sun, sand, and surf.', image: './img/travel.jpg', date: "January 23, 2024", authorName: "John Doe" },
    { category: 'sports', title: 'The Thrill of Football', description: 'A deep dive into the world of football and the excitement it brings.', image: './img/football.jpg', date: "October 3, 2024", authorName: "hello" },
    { category: 'entertainment', title: 'The Evolution of Rock', description: 'Rock music has evolved over decades. Explore its history and major milestones.', image: './img/music.jpg', date: "March 12, 2022", authorName: "hello" },
    { category: 'travel', title: 'Amazing Beaches', description: 'A detailed look at the world\'s best beaches. Relax and enjoy the sun, sand, and surf.', image: './img/beach.jpg', date: "January 23, 2024", authorName: "Charlie Chapline" },
    { category: 'tech', title: 'The Future of AI', description: 'Artificial Intelligence is shaping the future. Discover its potential and implications.', image: './img/tech.jpg', date: "June 2, 2024", authorName: "hello" },
    { category: 'fashion', title: '2025 Fashion Trends', description: ' Fashion in 2025 embraces sustainability, innovative materials, and digital trends. Eco-friendly fabrics, AI-driven designs, and virtual try-ons redefine style, while individuality and inclusivity shape the global fashion landscape. Stay ahead of the curve with the latest fashion trends that will dominate 2025. ', image: './img/fashion.jpg', date: "August 5, 2023", authorName: "hello" }
];


// Function to display blog

function displayBlog() {
    const container = document.getElementById("cards-container");
    container.innerHTML = ""; //clear container 
    // console.log(container)

    blogs.forEach((blog, index) => {
        let card = document.createElement('div');
        card.className = 'card';


        // attach the dat-category all the cards
        card.setAttribute('data-category', blog.category)

        card.innerHTML = `
        
        <div class="left">
           <img src= "${blog.image}" alt ${blog.title}">
        </div>

        <div class="right">
           <h4>${blog.date}</h4>
           <h3>${blog.title}</h3>
           <p>${blog.description.substring(0, 100)}...</p>
           <button onclick="readMore(${index})">Read More</button>
           <button onclick="deleteBlog(${index})">Delete</button>
        
        `;

        container.appendChild(card)
    })
}

displayBlog()


// function handle read more button

function readMore(index) {
    let modal = document.getElementById('modal')
    modal.style.display = 'block'  // show the blog modal in full screen

    let modal_content = document.getElementById('modal-content')

    const blog = blogs[index]
    modal_content.innerHTML = `
    
    <h4 class="modal-title"><b>Title : </b><span>${blog.title}</span></h4>
    <h4 class="modal-date"><b>Date : </b><span>${blog.date}</span></h4>
    <h4 class="modal-date"><b>Author : </b><span>${blog.authorName}</span></h4>
    <img src= "${blog.image}" alt ${blog.title}">
    <p class= "para">${blog.description}</p>
    
    `
}

// function to close the modal

function closeModal() {
    let modal = document.getElementById('modal')
    modal.style.display = 'none'
}



// function to delete blog

function deleteBlog(index) {
    blogs.splice(index, 1)  // Remove blog from array
    localStorage.setItem('blogs', JSON.stringify(blogs))

    displayBlog();  // Reresh blogs
}


// function to show the file name in file-name element
const fileInput = document.getElementById('image-upload');
let file_name = document.querySelector('#file-name')

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0]

    // console.log(file.name)

    file_name.innerHTML = file.name
})




// funtion for image upload

let image = '';//store the image

function uploadImage() {
    const fileInput = document.getElementById('image-upload');

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        // console.log(file)

        const reader = new FileReader()  // Read the file object
        reader.onload = function (e) {
            image = e.target.result; //
        }
        reader.readAsDataURL(file);  // Read the file as a data URL
    })

}

uploadImage()


// function to add new blog dynamically

function addBlog() {
    const title = document.getElementById("blog-title").value;
    const authorName = document.getElementById("blog-author").value;
    const description = document.getElementById("blog-description").innerText;
    let blogCategory = document.getElementById('blogCategory').value


    const date = new Date();
    const monthFullName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date); // Get the full month name
    const day = date.getDate()
    const year = date.getFullYear();
    const d = `${monthFullName} ${day}, ${year}`  // Format the date as "Month day, year"

    if (title && authorName && description && blogCategory && image) {
        // push the new blog to the array
        blogs.push({ category: blogCategory, title, authorName, description, image, date: d });
        // store blogs in local storage
        localStorage.setItem('blogs', JSON.stringify(blogs))
        displayBlog()
        showPopup()  // call the function to show pop up when user add new blog
        clearEditor()
    }
    else {
        alert("Please fill out all fields")
    }

}

// function to show pop up when user add new blog
function showPopup() {
    const popup = document.querySelector('.publish-popup')
    popup.style.display = 'block';

    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000)
}


// clear all fields after publish blog
function clearEditor() {
    const title = document.getElementById("blog-title").value = '';
    const authorName = document.getElementById("blog-author").value = '';
    const description = document.getElementById("blog-description").innerText = '';
    let file_name = document.querySelector('#file-name').innerHTML = '';
}


// Create text editor functionality
function formatText(cmd, value = null) {
    if (value) {
        document.execCommand(cmd, false, value);
    } else {
        document.execCommand(cmd);
    }
}

/** 
The formatText function uses the document.execCommand() method to apply formatting to the selected text in the editor.
The command parameter specifies the action to perform, such as 'bold', 'italic', or 'underline'.
For commands like formatBlock, the value parameter specifies the type of block element to apply (e.g., 'h1' for a heading).
*/




