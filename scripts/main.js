
// menu settings
const hambutton = document.querySelector('#menu');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});

// footer secting
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('currentYear').textContent = `© ${currentYear}`;
    document.getElementById('last-modified').textContent = `Last modified: ${lastModified}`;
});

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const section2 = document.querySelector("#section2");
const gridCourse = document.querySelector(".gridCourse");

createCourseElement(courses);

function createCourseElement(filter) {
    gridCourse.innerHTML = ""; // Clear previous content
    filter.forEach(element => {
        const course = document.createElement("button");
        course.innerText = `${element.subject}  ${element.number} (${element.credits})`;
        if (element.completed) {
            course.style.backgroundColor = '#174E70'; // Set background color for completed courses
            course.style.color = 'white'; // You might want to set text color for readability
        } 
        course.addEventListener("click", () => {
            displayCourseDetails(element);
        })
        gridCourse.appendChild(course); // Appending to the grid
    });
}


let totalOfCredt = 0
let totalCredit = document.getElementById("totalcredit")

function reduce(i) {
    i.forEach(element => {
        if (element.completed) {
            totalOfCredt +=  element.credits //sum the total of credit
        }
    })
    totalCredit.innerText = `${totalOfCredt}`
    

}

reduce(courses)
const all = document.getElementById("all");
const cse= document.getElementById("cse");
const wdd = document.getElementById("wdd");

all.addEventListener('click', () => {
    createCourseElement(courses);
});

cse.addEventListener('click', () => {
    let filter = courses.filter(course => course.subject == 'CSE'); // Example filtering logic
    createCourseElement(filter);
});

wdd.addEventListener('click', () => {
    let filter = courses.filter(course => course.subject == 'WDD'); // Example filter by credits
    createCourseElement(filter);
});




const courseDetails = document.getElementById("course-details")
const closeModal = document.getElementById("closeModal")

const modal = document.getElementById("course-details");

const displayCourseDetails = (course) => {
    modal.innerHTML = "";
    modal.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits:</strong> ${course.credits}</p>
    <p><strong>Certificate:</strong> ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
    `;

    modal.showModal();

    modal.addEventListener("click", () => {
        modal.close();
    })
}


