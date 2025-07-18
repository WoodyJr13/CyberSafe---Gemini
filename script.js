document.addEventListener('DOMContentLoaded', function() {

    // 1. Header scroll effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Red Flags Interactive Tooltips
    const flags = document.querySelectorAll('.flag');
    flags.forEach(flag => {
        const tooltipId = flag.id.replace('flag', 'tooltip');
        const tooltip = document.getElementById(tooltipId);

        if (tooltip) {
            flag.addEventListener('mouseenter', () => {
                tooltip.classList.add('visible');
            });

            flag.addEventListener('mouseleave', () => {
                tooltip.classList.remove('visible');
            });
        }
    });

    // 3. Scenario Game Logic
    const scenarioActions = document.querySelectorAll('.btn-action');
    const feedbackEl = document.querySelector('.feedback');

    scenarioActions.forEach(button => {
        button.addEventListener('click', () => {
            const isCorrect = button.getAttribute('data-correct') === 'true';

            // Disable all buttons after one is clicked
            scenarioActions.forEach(btn => btn.disabled = true);

            if (isCorrect) {
                button.classList.add('correct');
                feedbackEl.textContent = 'Correct! Always verify independently through an official website or app, never through a suspicious link.';
                feedbackEl.className = 'feedback correct';
            } else {
                button.classList.add('incorrect');
                feedbackEl.textContent = 'Incorrect. Clicking unknown links can lead to phishing sites or malware. Replying can confirm your number is active.';
                feedbackEl.className = 'feedback incorrect';
            }
        });
    });

}); 
