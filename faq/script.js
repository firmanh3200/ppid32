import { faqData } from './faqData.js'; // Import the FAQ data

document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const faqListContainer = document.getElementById('faq-list');

    // Helper function to create a single FAQ item HTML element
    function createFaqItemElement(faq) {
        const faqItemDiv = document.createElement('div');
        faqItemDiv.classList.add('faq-item');

        const faqQuestionDiv = document.createElement('div');
        faqQuestionDiv.classList.add('faq-question');
        faqQuestionDiv.setAttribute('tabindex', '0');
        faqQuestionDiv.innerHTML = `
            <span>${faq.question}</span>
            <span class="icon">&#9660;</span>
        `;

        const faqAnswerDiv = document.createElement('div');
        faqAnswerDiv.classList.add('faq-answer');
        faqAnswerDiv.innerHTML = faq.answer; // answer contains <p> tags

        faqItemDiv.appendChild(faqQuestionDiv);
        faqItemDiv.appendChild(faqAnswerDiv);

        return faqItemDiv;
    }

    // Function to close all open FAQ answers within the current view
    function closeAllFaqs() {
        faqListContainer.querySelectorAll('.faq-question.active').forEach(questionDiv => {
            questionDiv.classList.remove('active');
            questionDiv.nextElementSibling.classList.remove('open');
        });
    }

    // Handles accordion toggle for individual FAQ items using event delegation
    faqListContainer.addEventListener('click', (e) => {
        let questionDiv = e.target.closest('.faq-question');
        if (questionDiv) {
            const answerDiv = questionDiv.nextElementSibling;

            // Close other open answers within the current active category
            faqListContainer.querySelectorAll('.faq-question.active').forEach(activeQuestion => {
                if (activeQuestion !== questionDiv) {
                    activeQuestion.classList.remove('active');
                    activeQuestion.nextElementSibling.classList.remove('open');
                }
            });

            questionDiv.classList.toggle('active');
            answerDiv.classList.toggle('open');
        }
    });

    // Add keyboard accessibility for dynamically created FAQ questions
    faqListContainer.addEventListener('keydown', (e) => {
        let questionDiv = e.target.closest('.faq-question');
        if (questionDiv && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault(); // Prevent default scroll for space key
            questionDiv.click(); // Simulate a click
        }
    });

    // Function to render FAQ items for the selected category
    function renderFaqs(categoryName) {
        closeAllFaqs(); // Close all FAQs when switching categories

        // Clear current content
        faqListContainer.innerHTML = '';

        // Find the category data
        const selectedCategory = faqData.find(cat => cat.categoryName === categoryName);

        if (selectedCategory) {
            selectedCategory.faqs.forEach(faq => {
                faqListContainer.appendChild(createFaqItemElement(faq));
            });
        }
    }

    // Add event listeners for tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to the clicked button
            button.classList.add('active');

            // Render FAQs for the selected category
            const category = button.dataset.category;
            renderFaqs(category);
        });
    });

    // Initial render for the default active tab (Umum) upon page load.
    // This ensures content is displayed even if the active tab state is sticky from cache.
    const initialActiveTab = document.querySelector('.tab-button.active');
    if (initialActiveTab) {
        renderFaqs(initialActiveTab.dataset.category);
    } else {
        // Fallback: if no active tab is found (e.g., first load), default to 'Umum'
        document.querySelector('.tab-button[data-category="Umum"]').click();
    }
});