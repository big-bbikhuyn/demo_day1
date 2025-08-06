// Hiệu ứng typing cho phần giới thiệu cá nhân
document.addEventListener("DOMContentLoaded", function () {
    const intro = "Xin chào! Tôi là Lê Anh Tuấn, một lập trình viên đam mê công nghệ và sáng tạo.";
    const introElement = document.getElementById("intro-text");
    let i = 0;

    function typeEffect() {
        if (i < intro.length) {
            introElement.textContent += intro.charAt(i);
            i++;
            setTimeout(typeEffect, 40);
        } else {
            setTimeout(() => {
                introElement.textContent = "";
                i = 0;
                setTimeout(typeEffect, 500); // Đợi 0.5s rồi bắt đầu lại
            }, 5000); // Lặp lại sau 5 giây
        }
    }
    if (introElement) {
        typeEffect();
    }
    const btn = document.querySelector(".contact-button");
    if (btn) {
        btn.addEventListener("click", function () {
            btn.classList.add("clicked");
            setTimeout(() => btn.classList.remove("clicked"), 400);
            alert("Cảm ơn bạn đã ghé thăm trang cá nhân của tôi!");
        });
    }
});