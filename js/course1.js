document.addEventListener("DOMContentLoaded", function () {
    // 로컬 스토리지에서 코스 리스트 불러오기 (기본값은 빈 배열)
    const courses = JSON.parse(localStorage.getItem("recruitItems")) || [];

    // 추천 클릭 여부를 추적할 배열
    let recommendClicked = JSON.parse(localStorage.getItem("recommendClicked")) || [];

    const courseItemsContainer = document.getElementById('course-items');

    // 코스 항목 생성 함수
    function createCourseItem(course, index) {
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';

        // 코스 제목
        const courseTitle = document.createElement('div');
        courseTitle.className = 'course-title';
        courseTitle.textContent = course.title;

        // 추천 버튼과 카운트
        const recommendBtn = document.createElement('button');
        recommendBtn.className = 'recommend-btn';
        recommendBtn.innerHTML = `👍🏻 ${course.recommendCount || 0}`;

        // 추천 버튼 클릭 시 카운트 증가 (한 번만 가능)
        recommendBtn.addEventListener('click', function () {
            // 이미 추천했는지 확인
            if (recommendClicked[index]) {
                alert("공감은 한 번만 누를 수 있습니다.");
            } else {
                course.recommendCount = (course.recommendCount || 0) + 1;
                recommendBtn.innerHTML = `👍🏻 ${course.recommendCount}`;
                
                // 로컬 스토리지에 변경된 추천 수 저장
                courses[index] = course;  // 변경된 코스를 다시 저장
                localStorage.setItem("recruitItems", JSON.stringify(courses));

                // 추천 클릭 상태 저장 (한 번 클릭한 것으로 표시)
                recommendClicked[index] = true;
                localStorage.setItem("recommendClicked", JSON.stringify(recommendClicked));
            }
        });

        // 코스 항목에 추가
        courseItem.appendChild(courseTitle);
        courseItem.appendChild(recommendBtn);
        courseItemsContainer.appendChild(courseItem);
    }

    // 코스 목록을 화면에 렌더링
    if (courses.length === 0) {
        courseItemsContainer.innerHTML = "<p>등록된 코스가 없습니다.</p>";
    } else {
        courses.forEach((course, index) => {
            createCourseItem(course, index);
        });
    }
});
