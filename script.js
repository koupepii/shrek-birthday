document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".title");
  title.addEventListener("click", function () {
    window.location.href = "quiz.html"; // пока этой страницы нет, создадим потом
  });
});
