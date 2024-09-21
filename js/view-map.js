// Define the course-specific maps
const courseMaps = {
    0: ["1경-1", "1경-2", "1경-3"], // 금호강하중도
    1: ["2경-1", "2경-2", "2경-3"], // 꽃보라동산
    2: ["3경-1", "3경-2", "3경-3"], // 운암지수변공원
    3: ["4경-1", "4경-2", "4경-3"], // 팔달대교 야경
    4: ["5경-1", "5경-2", "5경-3"], // 경북대학교 캠퍼스
    5: ["6경-1", "6경-2", "6경-3"], // 함지공원
    6: ["7경-1", "7경-2", "7경-3"], // 구암서원
    7: ["8경-1", "8경-2", "8경-3"]  // 침산정
};

// List of course names to be used for displaying the title
const courseNames = [
    "금호강하중도",
    "꽃보라동산",
    "운암지수변공원",
    "팔달대교 야경",
    "경북대학교 캠퍼스",
    "함지공원",
    "구암서원",
    "침산정"
];

// Get the selected course index from localStorage
const selectedCourse = localStorage.getItem('selectedCourse');

// Get the elements to update
const courseItemsContainer = document.getElementById('course-items');
const courseTitleElement = document.querySelector('h1');

// Check if a course is selected and if the course exists in courseMaps
if (selectedCourse !== null && courseMaps[selectedCourse]) {
    // Update the course title with the corresponding course name
    courseTitleElement.innerText = courseNames[selectedCourse] + " 코스";

    // Display the relevant map information
    courseMaps[selectedCourse].forEach((map, index) => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course-item-map');
        // courseElement.innerText = map;
        courseItemsContainer.appendChild(courseElement);
    });
} else {
    courseTitleElement.innerText = "No course selected or map not available.";
}
