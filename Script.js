// Content mapping with unique background images
// const contentMap = {
//     home: {
//         html: `
//             <section id="home">
//                 <h2>About Me</h2>
//                 <p>I have approximately 4.5 years of experience in automation testing and development, my expertise lies in building robust, scalable applications using React.js, Redux, and managing complex asynchronous operations with Redux-Saga, and an extensive experience with automation tools such as Jest, Enzyme, Selenium with TestNG framework, and Appium for mobile testing. My skill set also includes JavaScript, Java, OOP concepts, Postman for API testing, and working with Neo4j servers, ensuring that testing processes are comprehensive and efficient, maintaining high code quality while contributing to both frontend and backend development. I have developed multiple stories using ReactJS and Redux using React hooks to manage state and lifecycle events, which simplified complex component logic and improved code readability.
// </p>
// <p>In my day-to-day work, I execute daily builds and address issues that arise in Postman and automation scripts, maintaining testing integrity after recent changes, and work on developing new stories providing a clean structured and reusable code. I have conducted several knowledge-sharing sessions and participated in delivering demos to teams and stakeholders, fostering collaboration and transparency. I have worked closely with cross-functional teams to enhance product quality, leveraging my performance testing experience using JMeter to carry out load, stress, and scalability testing. Additionally, I actively monitor code patterns, payloads, and data requests to ensure testing efficiency.</p>
// <p>Beyond testing, I bring a strong foundation in Python, SQL, R, MATLAB, and machine learning, applying these skills to identify patterns and solve complex problems. I am proficient in machine learning techniques, including supervised and unsupervised learning, neural networks, and ETL pipelines. My problem-solving ability, adaptability, quick learning, multitasking skills, and dedication to delivering high-quality results make me a valuable asset in any testing and development environment.
// </p>
//             </section>
//         `,
//         background: "url('public/images/Background.jpg')"
//     },
//     social: {
//         html: `
//             <section id="social">
//                 <h2>Social Media</h2>
//                 <ul>
//                     <li><a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a></li>
//                     <li><a href="https://github.com/yourprofile" target="_blank">GitHub</a></li>
//                     <li><a href="https://twitter.com/yourprofile" target="_blank">Twitter</a></li>
//                 </ul>
//             </section>
//         `,
//         background: "url('public/images/social-bg.png')"
//     },
//     resume: {
//         html: `
//             <section id="resume">
//                 <h2>Resume</h2>
//                 <p><a href="resume.pdf" target="_blank">Download my Resume</a></p>
//             </section>
//         `,
//         background: "url('public/images/resume-bg.jpg')"
//     },
//     skillSet: {
//         html: `
//             <section id="skillset">
//                 <h2>My Skill Set</h2>
//                 <ul>
//                     <li><strong>Automation Testing:</strong> Selenium, JMeter, Cucumber, Appium, Postman, Jest & Enzyme, Playwright, Cypress, SOAPUI</li>
//                     <li><strong>Programming Languages:</strong> Python, JavaScript, R, Java, C#, SQL</li>
//                     <li><strong>Web Development:</strong> React.js, Redux, XML, CSS, HTML, Node.js</li>
//                     <li><strong>Performance Testing:</strong> JMeter, Load Testing, Scalability Testing</li>
//                     <li><strong>Operating Systems and Scripting:</strong> Windows OS, Linux, Shell Scripting</li>
//                     <li><strong>Cloud Computing:</strong> AWS (EC2, S3, MongoDB), Azure</li>
//                     <li><strong>Data Science and Machine Learning:</strong> Data Analysis, ML, Statistical Modelling, Neural Networks, Data Structures</li>
//                 </ul>
//             </section>
//         `,
//         background: "url('public/images/resume-bg.jpg')"
//     },
//     experience: {
//         html: `
//             <section id="experience">
//                 <h2>Hexagon</h2>
//                 <p><a href="resume.pdf" target="_blank">Download my Resume</a></p>
//                 <p><a href="https://hexagon.com/" target="_blank">HexagonLink</a></p>
//             </section>
//         `,
//         background: "url('public/images/Hexagon.jpeg')"
//     },
//     Education: {
//         html: `
//             <section id="education">
//                 <h2>Resume</h2>
//                 <p><a href="resume.pdf" target="_blank">Download my Resume</a></p>
//             </section>
//         `,
//         background: "url('public/images/resume-bg.jpg')"
        
//     },
//     gallery: {
//         html: `
//             <section id="gallery">
//                 <h2>Gallery</h2>
//                 <div class="gallery">
//                     <img src="images/graduation.jpg" alt="Graduation" />
//                 </div>
//             </section>
//         `,
//         background: "url('public/images/tejupic.jpeg')"
//     }
// };

// // Default background for sections without a defined one
// const defaultBackground = "url('public/images/default-bg.jpg')";

// // Function to update the content and background
// // Function to update the content and background
// document.addEventListener("DOMContentLoaded", () => {
//     const contentElement = document.getElementById("content");
//     const bodyElement = document.body;

//     // Initialize with home content
//     const initialSection = contentMap.home;
//     contentElement.innerHTML = initialSection.html;
//     bodyElement.style.background = initialSection.background || defaultBackground;
//     bodyElement.style.backgroundSize = "cover";
//     bodyElement.style.backgroundPosition = "center";
//     console.log("Initial content loaded with home section.");

//     // Event listener for navigation
//     document.querySelectorAll("nav a").forEach(link => {
//         link.addEventListener("click", event => {
//             event.preventDefault();
//             const target = event.target.getAttribute("data-target");
//             console.log(`Navigating to: ${target}`);

//             // Update content and background
//             const section = contentMap[target];
//             if (section) {
//                 contentElement.innerHTML = section.html;
//                 bodyElement.style.background = section.background || defaultBackground;
//                 bodyElement.style.backgroundSize = "cover";
//                 bodyElement.style.backgroundPosition = "center";
//                 console.log(`Updated content and background for: ${target}`);
//             } else {
//                 console.error(`No content defined for target: ${target}`);
//             }
//         });
//     });
// });


// Content mapping with unique background images
const contentMap = {
    home: {
        html: `
            <section id="home">
                <h2>About Me</h2>
                <p>I have approximately 4.5 years of experience in automation testing and development, my expertise lies in building robust, scalable applications using React.js, Redux, and managing complex asynchronous operations with Redux-Saga, and an extensive experience with automation tools such as Jest, Enzyme, Selenium with TestNG framework, and Appium for mobile testing. My skill set also includes JavaScript, Java, OOP concepts, Postman for API testing, and working with Neo4j servers, ensuring that testing processes are comprehensive and efficient, maintaining high code quality while contributing to both frontend and backend development. I have developed multiple stories using ReactJS and Redux using React hooks to manage state and lifecycle events, which simplified complex component logic and improved code readability.</p>
                <p>In my day-to-day work, I execute daily builds and address issues that arise in Postman and automation scripts, maintaining testing integrity after recent changes, and work on developing new stories providing a clean structured and reusable code. I have conducted several knowledge-sharing sessions and participated in delivering demos to teams and stakeholders, fostering collaboration and transparency. I have worked closely with cross-functional teams to enhance product quality, leveraging my performance testing experience using JMeter to carry out load, stress, and scalability testing. Additionally, I actively monitor code patterns, payloads, and data requests to ensure testing efficiency.</p>
                <p>Beyond testing, I bring a strong foundation in Python, SQL, R, MATLAB, and machine learning, applying these skills to identify patterns and solve complex problems. I am proficient in machine learning techniques, including supervised and unsupervised learning, neural networks, and ETL pipelines. My problem-solving ability, adaptability, quick learning, multitasking skills, and dedication to delivering high-quality results make me a valuable asset in any testing and development environment.</p>
            </section>
        `,
        background: "url('public/images/Background.jpg')"
    },
    social: {
        html: `
            <section id="social">
                <h2>Social Media</h2>
                <ul>
                    <li><a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/yourprofile" target="_blank">GitHub</a></li>
                    <li><a href="https://twitter.com/yourprofile" target="_blank">Twitter</a></li>
                </ul>
            </section>
        `,
        background: "url('public/images/social-bg.png')"
    },
    resume: {
        html: `
            <section id="resume">
                <h2>Resume</h2>
                <p><a href="resume.pdf" target="_blank">Download my Resume</a></p>
            </section>
        `,
        background: "url('public/images/resume-bg.jpg')"
    },
    skillSet: {
        html: `
            <section id="skillset">
                <h2>My Skill Set</h2>
                <ul>
                    <li><strong>Automation Testing:</strong> Selenium, JMeter, Cucumber, Appium, Postman, Jest & Enzyme, Playwright, Cypress, SOAPUI</li>
                    <li><strong>Programming Languages:</strong> Python, JavaScript, R, Java, C#, SQL</li>
                    <li><strong>Web Development:</strong> React.js, Redux, XML, CSS, HTML, Node.js</li>
                    <li><strong>Performance Testing:</strong> JMeter, Load Testing, Scalability Testing</li>
                    <li><strong>Operating Systems and Scripting:</strong> Windows OS, Linux, Shell Scripting</li>
                    <li><strong>Cloud Computing:</strong> AWS (EC2, S3, MongoDB), Azure</li>
                    <li><strong>Data Science and Machine Learning:</strong> Data Analysis, ML, Statistical Modelling, Neural Networks, Data Structures</li>
                </ul>
            </section>
        `,
        background: "url('public/images/resume-bg.jpg')"
    },
    experience: {
        html: `
            <section id="experience">
                <h2>Hexagon</h2>
                <p><a href="resume.pdf" target="_blank">Download my Resume</a></p>
                <p><a href="https://hexagon.com/" target="_blank">HexagonLink</a></p>
            </section>
        `,
        background: "url('public/images/Hexagon.jpeg')"
    },
    Education: {
        html: `
            <section id="Education">
                <h2>Resume</h2>
                <p><a href="resume.pdf" target="_blank">Download my Resume</a></p>
                <p>Graduated from University at Buffalo with 3.5 grade my major includes python, statistics, supervised learing and unsupervised learning etc</p>
            </section>
        `,
        background: "url('public/images/Graduation.jpg')"
    },
    gallery: {
        html: `
            <section id="gallery">
                <h2>Education</h2>
                <div class="education">
                    <img src="images/graduation.jpg" alt="Graduation" />
                </div>
            </section>
        `,
        background: "url('public/images/tejupic.jpeg')"
    }
};

// Default background for sections without a defined one
const defaultBackground = "url('public/images/default-bg.jpg')";

// Function to update the content and background
document.addEventListener("DOMContentLoaded", () => {
    const contentElement = document.getElementById("content");
    const bodyElement = document.body;

    // Initialize with home content
    const initialSection = contentMap.home;
    contentElement.innerHTML = initialSection.html;
    bodyElement.style.background = initialSection.background || defaultBackground;
    bodyElement.style.backgroundSize = "cover";
    bodyElement.style.backgroundPosition = "center";
    bodyElement.style.backgroundAttachment = "fixed";
    console.log("Initial content loaded with home section.");

    // Event listener for navigation
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const target = event.target.getAttribute("data-target");
            console.log(`Navigating to: ${target}`);

            // Update content and background
            const section = contentMap[target];
            if (section) {
                contentElement.innerHTML = section.html;
                bodyElement.style.background = section.background || defaultBackground;
                bodyElement.style.backgroundSize = "cover";
                bodyElement.style.backgroundPosition = "center";
                bodyElement.style.backgroundAttachment = "fixed";
                console.log(`Updated content and background for: ${target}`);
            } else {
                console.error(`No content defined for target: ${target}`);
            }
        });
    });
});
