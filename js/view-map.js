// Define the course-specific maps
const courseMaps = {
    0: ["1코스: 1-1", "2코스: 1-2", "3코스: 1-3"], // 금호강하중도
    1: ["1코스: 2-1", "2코스: 2-2", "3코스: 2-3"], // 꽃보라동산
    2: ["1코스: 3-1", "2코스: 3-2", "3코스: 3-3"], // 운암지수변공원
    3: ["1코스: 4-1", "2코스: 4-2", "3코스: 4-3"], // 팔달대교 야경
    4: ["1코스: 5-1", "2코스: 5-2", "3코스: 5-3"], // 경북대학교 캠퍼스
    5: ["1코스: 6-1", "2코스: 6-2", "3코스: 6-3"], // 함지공원
    6: ["1코스: 7-1", "2코스: 7-2", "3코스: 7-3"], // 구암서원
    7: ["1코스: 8-1", "2코스: 8-2", "3코스: 8-3"]  // 침산정
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
        courseElement.innerText = map;
        courseItemsContainer.appendChild(courseElement);
    });
} else {
    courseTitleElement.innerText = "No course selected or map not available.";
}
