const correctAnswers = ["E", "E", "E", "E"];
const form = document.querySelector(".question-form");
const result = document.querySelector(".result");
const span = result.querySelector("span");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  //!kullanıcıların verdiği cevapları dizide tuttuk.
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  //! puan hesaplaması:
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  //!class içerisinde kaldırmak istediğimiz özelliği içerisine yazıyoruz.
  result.classList.remove("d-none");

  //!puanı animasyonlu olacak şekilde ekrana bastırma:
  let point = 0;

  const print = setInterval(() => {
    span.textContent = `${point}%`;
    //!Renk ayarlama işlemi:
    if (point <= 50) {
      span.classList.remove("text-success", "text--warning");
      span.classList.add("text-danger");
    } else if (point <= 80) {
      span.classList.remove("text-success", "text-danger");
      span.classList.add("text-warning");
    } else {
      span.classList.remove("text-warning", "text-danger");
      span.classList.add("text-success");
    }

    if (point == score) {
      clearInterval(print);
    } else {
      point++;
    }
  }, 20);
});
