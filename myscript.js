
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = form.elements["firstName"]?.value.trim();
    const lastName = form.elements["lastName"]?.value.trim();
    const email = form.elements["email"]?.value.trim();
    const enquiry = form.elements["enquiry"]?.value.trim();

    if (!firstName || !lastName || !email || !enquiry) {
      alert("Please fill in all fields.");
      return;
    }

    alert(`Thank you, ${firstName}! We've received your enquiry.`);
    form.reset();
  });
  });

  // Toggle theme on click
  document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".theme-toggle");
  const root = document.documentElement;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
  }


  toggleBtn.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-bar ul");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});


/*----fAQ questions---*/
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".FAQ p");

  faqItems.forEach((item) => {
    // Split question and answer by <br>
    const [questionPart, answerPart] = item.innerHTML.split('<br>');

    // Create question container
    const question = document.createElement("div");
    question.classList.add("faq-question");
    question.innerHTML = questionPart.trim();
    question.style.cursor = "pointer";
    question.style.fontWeight = "bold";
    question.style.marginBottom = "6px";

    // Create answer container
    const answer = document.createElement("div");
    answer.classList.add("faq-answer");
    answer.innerHTML = answerPart.trim();
    answer.style.maxHeight = "0";
    answer.style.overflow = "hidden";
    answer.style.transition = "max-height 0.4s ease, opacity 0.4s ease";
    answer.style.opacity = "0";
    answer.style.marginBottom = "12px";
    answer.style.color = "#666";

    // Replace <p> with question + answer
    const parent = item.parentNode;
    parent.replaceChild(question, item);
    parent.insertBefore(answer, question.nextSibling);

    // Toggle answer visibility on question click
    question.addEventListener("click", () => {
      if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {
        answer.style.maxHeight = "0";
        answer.style.opacity = "0";
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.opacity = "1";
      }
    });
  });
});





