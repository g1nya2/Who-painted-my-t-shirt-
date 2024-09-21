const courses = [
    "1경: 금호강하중도",
    "2경: 꽃보라동산",
    "3경: 운암지수변공원",
    "4경: 팔달대교 야경",
    "5경: 경북대학교 캠퍼스",
    "6경: 함지공원",
    "7경: 구암서원",
    "8경: 침산정"
];

const courseItemsContainer = document.getElementById('course-items');

// Add courses to the container
courses.forEach((course, index) => {
    const courseElement = document.createElement('div');
    courseElement.classList.add('course-item');
    courseElement.innerText = course;
    courseItemsContainer.appendChild(courseElement);
});
