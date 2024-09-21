const courses = [
    "1코스",
    "2코스",
    "3코스"
];

const courseItemsContainer = document.getElementById('course-items');

// Add courses to the container
courses.forEach((course, index) => {
    const courseElement = document.createElement('div');
    courseElement.classList.add('course-item-map');
    courseElement.innerText = course;
    courseItemsContainer.appendChild(courseElement);
});
