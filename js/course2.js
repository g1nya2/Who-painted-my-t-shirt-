document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('register-button').addEventListener('click', function () {
        const title = document.getElementById('title').value;
        const maxPeople = document.getElementById('max-people').value;
        const content = document.getElementById('content').value;

        if (title && maxPeople && content) {
            // 기존 코스 리스트를 로컬 스토리지에서 불러오기 (없으면 빈 배열)
            const recruitItems = JSON.parse(localStorage.getItem("recruitItems")) || [];

            // 새 코스 객체 생성
            const newCourse = {
                title: title,
                content: content,
                maxPeople: parseInt(maxPeople),
                currentPeople: 0,
                recommendCount: 0
            };

            // 코스 리스트에 새 코스 추가
            recruitItems.push(newCourse);

            // 로컬 스토리지에 코스 리스트 저장
            localStorage.setItem("recruitItems", JSON.stringify(recruitItems));

            // 성공 메시지 및 페이지 이동
            alert("코스가 성공적으로 등록되었습니다.");
            window.location.href = "course1.html";  // 등록 후 목록 페이지로 이동
        } else {
            alert("모든 필드를 입력해주세요.");
        }
    });
});
