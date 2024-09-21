document.addEventListener("DOMContentLoaded", function () {
    // URL 쿼리 파라미터에서 index 값 추출
    const params = new URLSearchParams(window.location.search);
    const courseIndex = params.get('index');

    // 로컬 스토리지에서 코스 리스트 불러오기
    const courses = JSON.parse(localStorage.getItem("recruitItems")) || [];

    // 해당 코스 정보 가져오기
    const course = courses[courseIndex];

    if (course) {
        const courseDetails = document.getElementById('course-details');

        // 코스 제목
        const titleElement = document.createElement('h2');
        titleElement.textContent = course.title;
        courseDetails.appendChild(titleElement);

        // 코스 내용
        const contentElement = document.createElement('p');
        contentElement.textContent = `코멘트: ${course.content}`;
        courseDetails.appendChild(contentElement);

        // 최대 인원 정보
        const maxPeopleElement = document.createElement('p');
        maxPeopleElement.textContent = `최대 인원: ${course.maxPeople}`;
        courseDetails.appendChild(maxPeopleElement);

        // 추천 수 정보
        const recommendElement = document.createElement('p');
        recommendElement.textContent = `추천 수: ${course.recommendCount}`;
        courseDetails.appendChild(recommendElement);
    } else {
        // alert('해당 코스를 찾을 수 없습니다.');
        window.location.href = 'course1.html';  // 코스를 찾지 못할 경우 목록으로 이동
    }
});
