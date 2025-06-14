
document.addEventListener("DOMContentLoaded", function() {
    debugger;
    const textElement = document.getElementById("typed-text");
    const cursorElement = document.createElement("span");
    cursorElement.classList.add("cursor");
    textElement.appendChild(cursorElement);

    const hackerText = "Hello! I'm Nandeesh YR, an Ethical Hacker, Web Developer, and Cybersecurity Enthusiast with expertise in penetration testing, secure application development, and network security.";
    let index = 0;

    function typeWriterEffect() {
        if (index < hackerText.length) {
            textElement.insertBefore(document.createTextNode(hackerText.charAt(index)), cursorElement);
            index++;
            setTimeout(typeWriterEffect, 80);
        } else {
            setTimeout(() => {
                textElement.innerHTML += "<br><span class='terminal-text'>[Access Granted]</span>";
            }, 1000);
        }
    }

    setTimeout(typeWriterEffect, 500);
});

document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    document.querySelectorAll("header, nav, section, footer, .job, .internship, .project, #skills li")
        .forEach(el => el.classList.toggle("light-mode"));
});

function getCurrentDateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString(); // HH:MM:SS format

    return `${time}`;
}

function updateStatus() {
    const statuses = [
        `Initializing... ${getCurrentDateTime()}`,
        `Live & Active... ${getCurrentDateTime()}`,
        `Executing Commands... ${getCurrentDateTime()}`,
        `Enhancing Security... ${getCurrentDateTime()}`,
        `Optimizing Web Services... ${getCurrentDateTime()}`,
        `Developing... ${getCurrentDateTime()}`
    ];
    document.getElementById("current-status").innerText = statuses[Math.floor(Math.random() * statuses.length)];
}
// Update the time every second for real-time effect
setInterval(updateStatus, 1000);

// Set an initial value when the page loads
updateStatus();




