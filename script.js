/* =====================================================
   SEARCH
===================================================== */

const searchButton = document.getElementById("searchButton");
const searchPanel = document.getElementById("searchPanel");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");

if (searchButton && searchPanel) {
    searchButton.addEventListener("click", () => {
        searchPanel.classList.add("active");

        if (searchInput) {
            setTimeout(() => {
                searchInput.focus();
            }, 300);
        }
    });
}

if (closeSearch && searchPanel) {
    closeSearch.addEventListener("click", () => {
        searchPanel.classList.remove("active");
    });
}


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.getElementById("menuButton");
const header = document.querySelector(".header");

if (menuButton && header) {
    menuButton.addEventListener("click", () => {
        header.classList.toggle("mobile-open");
    });
}

const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (header) {
            header.classList.remove("mobile-open");
        }
    });
});


/* =====================================================
   SELECTION
===================================================== */

const addButtons = document.querySelectorAll(".add-button");
const selectionCount = document.getElementById("selectionCount");

let selection = 0;

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        selection++;

        if (selectionCount) {
            selectionCount.textContent = selection;
        }

        button.textContent = "✓";

        setTimeout(() => {
            button.textContent = "+";
        }, 1000);
    });
});


/* =====================================================
   FAQ
===================================================== */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const item = question.parentElement;

        document.querySelectorAll(".faq-item").forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }
        });

        item.classList.toggle("active");
    });
});


/* =====================================================
   ESCAPE
===================================================== */

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        if (searchPanel) {
            searchPanel.classList.remove("active");
        }

        if (header) {
            header.classList.remove("mobile-open");
        }
    }
});
