<template>
  <!-- Main container for the download page -->
  <q-page
    class="row wrap justify-center items-center"
    :style="{ background: 'linear-gradient(135deg, #060606, #525252)' }"
  >
    <!-- This is for handling async operations and showing a fallback while loading. -->
    <Suspense>
      <!-- Content displayed once the asynchronous operation has completed successfully. -->
      <template #default>
        <!-- Card that displays message -->
        <q-card class="q-pa-xl" style="max-width: 400px; margin: auto">
          <q-card-section>
            <div class="text-h6 text-center">Your Portfolio is Ready!</div>

            <!-- This button triggers the downloadPortfolio method which downloads the portfolio as an HTML file. -->
            <div class="text-center">
              <q-btn
                label="Download Portfolio as HTML"
                color="dark"
                @click="downloadPortfolio"
                class="q-mt-lg q-px-lg q-py-sm"
              />
            </div>
          </q-card-section>
        </q-card>
      </template>
      <!-- Fallback content displayed while waiting for the async operation to complete -->
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </q-page>
</template>

<script setup>
// Importing reactive references and lifecycle hooks from Vue
import { ref, onMounted } from "vue";
// Import the defined Pinia store
import { usePortfolioStore } from "src/stores/portfolioStore";

// Accessing the portfolio store and the form data
const portfolioStore = usePortfolioStore();
const data = portfolioStore.formData;

// Defining a reference for holding the generated HTML content
const previewHtml = ref("");

// Function to convert image file to a Base64 string
/* 
- Create a new FileReader instance to read the image file.
- onloadend function is triggered once the FileReader successfully loads the file.
- Extract the Base64 string from the result (split by comma and take the part after the comma).
- onerror function is triggered if there's an error reading the file.
- Start reading the image file as a data URL (Base64 encoding). 
*/
const convertImageToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// Function to generate the HTML content for the portfolio
const generateHtml = async () => {
  // Converting images to Base64 if they exist
  const imageBase64_1 = data.pImage1 ? await convertImageToBase64(data.pImage1) : "";
  const imageBase64_2 = data.pImage2 ? await convertImageToBase64(data.pImage2) : "";

  // Splitting the skills string into an array of skills
  const skillsArray = data.skills
    ? data.skills.split(",").map((skill) => skill.trim())
    : [];

  // Returning the HTML structure
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
            />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <title>${data.name}</title>
        <style>
            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family:Verdana, Geneva, Tahoma, sans-serif;
            scroll-behavior: smooth;
            }
            body {
            color: #ededed;
            background-color: #1f1b1b;
            }
            .header {
            position: sticky;
            top: 0;
            left: 0;
            width: 100%;
            padding: 1.2rem 7rem;
            background: #86ffd3;
            color: #1f1b1b;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 100;
            box-shadow: 2px 2px 10px 0 #1f1b1b;
            }
            .logo {
            font-size: 2rem;
            color: #1f1b1b;
            text-decoration: none;
            font-weight: bold;
            }
            .navbar a {
            font-size: 1rem;
            color: #1f1b1b;
            text-decoration: none;
            font-weight: 600;
            margin-left: 3rem;
            transition: 0.3s;
            }
            .navbar a:hover,
            .navbar a.active {
            text-decoration: underline;
            }
            #menu-icon {
            font-size: 3rem;
            display: none;
            }
            .home {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5rem 10rem;
            }
            .home-content {
            max-width: 90%;
            margin: auto;
            text-align: center;
            }
            .home-content h3 {
            font-size: 1.5rem;
            font-weight: 700;
            }
            .home-content h1 span {
            color: #86ffd3;
            font-size: 3.9rem;
            }
            .home-content h1 {
            font-size: 3rem;
            font-weight: 700;
            }
            .home-content p {
            font-size: 1.1rem;
            margin-top: 1rem;
            line-height: 1.6;
            }
            .btn-box {
            display: inline-block;
            padding: 0.7rem 2rem;
            margin-top: 1.5rem;
            background: #86ffd3;
            font-size: 1.5rem;
            font-weight: 600;
            border-radius: 5px;
            color: #1f1b1b;
            letter-spacing: 1px;
            text-decoration: none;
            }
            .about {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 6rem 0;
            background-color: #2c2c2c;
            }
            .about-container {
            display: flex;
            align-items: center;
            max-width: 80%;
            margin: 0 auto;
            }
            .about-text {
            font-size: 1rem;
            text-align: left;
            margin-right: 10rem;
            }
            .about-text h2 {
            font-size: 4.2rem;
            margin-bottom: 2rem;
            }
            .about-text h2 span {
            color:#86ffd3;
            }
            .about-text p {
            font-size: 1.1rem;
            line-height: 1.6;
            margin: 1.5rem 0;
            }
            .about-text p span {
            color: #86ffd3;
            }
            .btn-connect {
            display: inline-block;
            margin-top: 2rem;
            padding: 0.75rem 1.5rem;
            background:#86ffd3;
            font-size: 1.2rem;
            border-radius: 5px;
            color: #1f1b1b;
            font-weight: 600;
            letter-spacing: 1px;
            text-decoration: none;
            }
            .about-icons {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            box-sizing: border-box;
            flex-wrap: wrap;
            }
            .icon {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #404040;
            border-radius: 10px;
            padding: 1.5rem;
            text-align: center;
            margin-bottom: 2rem;
            margin-right: 4rem;
            width: 200px;
            }
            .icon i {
            font-size: 2.5rem;
            color: #86ffd3;
            margin-bottom: 0.5rem;
            }
            .icon p {
            font-size: 1.1rem;
            }
            .sub-title {
            font-size: 4.2rem;
            text-align: center;
            margin: 5rem 0;
            margin-bottom: 4rem;
            color: #ffffff;
            }
            .sub-title span{
            color: #86ffd3;
            }
            #skills{
            display: flex;
            flex-wrap: wrap;
            gap: 3rem;
            justify-content: center;
            align-items: center;
            width: 80%;
            margin: auto;
            }
            .skill{
            color: #86ffd3;
            box-shadow: 0px 0px 7px 0 #86ffd3;
            padding: 1rem 3rem;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            }
            .skill-heading {
            font-size: 1.2rem;
            }
            .projects {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 4rem;
            max-width: 80%;
            margin: auto;
            }
            .project-card {
            background-color: #1f1b1b;
            min-height: 50vh;
            border-radius: 10px;
            overflow: hidden;
            display: flex;
            align-items: center;
            padding: 2rem;
            box-shadow: 0px 0px 7px 0 #86ffd3;
            }
            .project-image {
            width: 50%;
            }
            .project-img {
            width: 100%;
            }
            .project-content {
            width: 50%;
            padding: 1.5rem;
            text-align: center;
            }
            .project-heading {
            font-size: 2rem;
            color: white;
            margin-bottom: 0.5rem;
            font-weight: bold;
            }
            .project-tagline {
            font-size: 1.2rem;
            color: #86ffd3;
            margin-bottom: 0.5rem;
            font-style: italic;
            }
            .project-para {
            font-size: 1rem;
            color: #c4c4c4;
            margin-bottom: 1rem;
            line-height: 1.6;
            }
            .project-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin: 1.2rem;
            }
            .p-btn {
            display: inline-block;
            padding: 0.75rem 1.5rem;
            background: #86ffd3;
            font-size: 1.2rem;
            border-radius: 5px;
            color: #1f1b1b;
            font-weight: 600;
            letter-spacing: 1px;
            text-decoration: none;
            }
            .contact {
            min-height: 90vh;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
            gap: 3rem;
            margin-top: 6rem;
            padding: 0 6rem;
            }
            .contact-text h2 {
            font-size: 90px;
            line-height: 1;
            }
            .contact-text h2 span {
            color: #86ffd3;
            }
            .contact-text h4 {
            margin: 15px 0;
            color: #86ffd3;
            font-size: 20px;
            font-weight: 600;
            margin-left: 0.5rem;
            }
            .contact-text p {
            color: #ededed;
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 2rem;
            margin-left: 0.5rem;
            }
            .contact-list {
            margin-bottom: 3rem;
            }
            .contact-list li {
            margin-bottom: 10px;
            display: block;
            }
            .link-icon a {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background: transparent;
            border: 2px solid #86ffd3;
            border-radius: 50%;
            font-size: 20px;
            color: #86ffd3;
            text-decoration: none;
            margin: 30px 15px 30px 0;
            }
            .contact-form form input {
            position: relative;
            }
            .contact-form form input,
            form textarea {
            border: none;
            outline: none;
            width: 90%;
            padding: 18px;
            background-color: #ededed;
            color: #2a2a2a;
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            border-radius: 0.5rem;
            }
            .contact-form textarea {
            resize: none;
            height: 30vh;
            }
            .contact-form form .send {
            display: inline-block;
            padding: 0.7rem;
            background: #86ffd3;
            border-radius: 5px;
            font-size: 1.2rem;
            color: #1f1b1b;
            font-weight: 600;
            letter-spacing: 1px;
            text-decoration: none;
            cursor: pointer;
            }
            .footer {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 1.5rem;
            letter-spacing: 1px;
            background-color: #000000;
            box-shadow: -1px -1px 6px 0 #86ffd3;
            }
            .footer-text {
            font-size: 0.9rem;
            color: #86ffd3;
            }
            .footerIcon {
            padding: 0.1rem 0.3rem;
            border-radius: 0.8rem;
            background-color: #86ffd3;
            }
            .footerIcon i {
            font-size: 1.2rem;
            font-weight: 900;
            color:#1f1b1b;
            }
            @media (max-width: 1250px) {
            .home {
            align-items: center;
            justify-content: center;
            padding: 100px 15% 0;
            }
            .home-content {
            max-width: 1200px;
            }
            .about-text {
            text-align: justify;
            margin: auto;
            }
            }
            @media (max-width: 1024px) {
            .header {
            padding: 1rem 5%;
            }
            .home-content {
            padding: 1rem;
            }
            .contact {
            min-height: auto;
            }
            .footer {
            padding: 1rem 2%;
            }
            .footerIcon {
            margin-left: 15rem;
            }
            }
            @media (max-width: 768px) {
            html {
            font-size: 75.1%;
            }
            #menu-icon {
            display: block;
            }
            .navbar {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            padding: 1rem 3%;
            border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
            background-color: #86ffd3;
            display: none;
            }
            .navbar.active {
            display: block;
            }
            .navbar a {
            display: block;
            font-size: 1.5rem;
            margin: 3rem 0;
            }
            .link-icon a {
            width: 35px;
            height: 35px;
            }
            .home {
            padding: 1rem;
            }
            .home-content {
            padding: 2rem;
            }
            .home-content h3 {
            font-size: 2rem;
            }
            .home-content h1 {
            font-size: 4rem;
            }
            .home-content p {
            font-size: 1.3rem;
            }
            .btn-connect {
            margin-bottom: 4rem;
            }
            .about-container {
            flex-direction: column;
            width: 90%;
            }
            .about-text h2{
            text-align: center;
            }
            .icon {
            margin: 0 3rem 2rem 3rem;
            width: 150px;
            }
            .project-card {
            flex-direction: column;
            height: 70vh;
            }
            .project-content {
            width: 90%;
            }
            .p-btn {
            margin-top: 1rem;
            }
            .contact {
            height: auto;
            padding: 0 1rem;
            }
            .contact-text p {
            font-size: 15px;
            line-height: 25px;
            margin-bottom: 1rem;
            }
            .contact-text h2 {
            font-size: 5rem;
            margin-bottom: 1rem;
            }
            .contact-list {
            margin-bottom: 1rem;
            }
            .contact-list li {
            margin-bottom: 0;
            }
            .contact-form form input {
            width: 95%;
            }
            .contact-form textarea {
            width: 95%;
            }
            .footer {
            padding: 0.5rem 2%;
            margin-top: 2rem;
            }
            }
            @media (max-width: 480px) {
            .home-content h1 {
            font-size: 3.5rem;
            }
            .home-content h3 {
            font-size: 1.8rem;
            }
            .about-text p {
            font-weight: 400;
            font-size: 1.1rem;
            }
            .about-text {
            text-align: justify;
            }
            .about-text h2{
            textalign: center;
            }
            .skill-heading {
            font-size: 1rem;
            }
            .project-card {
            min-height: 55vh;
            width: 90vw;
            }
            .project-image{
            width:100%;
            }
            .project-content {
            width: 100%;
            padding: 1rem 0;
            text-align: justify;
            }
            .project-heading{
            text-align: center;
            font-size: 1.8rem;
            }
            .project-buttons{
            margin: 1.2rem 0;
            text-align: center;
            }
            .p-btn {
            padding: 0.5rem;
            font-size: 1rem;
            }
            .contact {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            }
            .contact-text h2 {
            font-size: 4rem;
            margin-bottom: 3rem;
            text-align: center;
            }
            .contact-text h4{
            text-align: center;
            }
            .contact-text p {
            text-align: justify;
            }
            .link-icon{
            text-align: center;
            }
            .contact-form{
            text-align: center;
            }
            .footer-text {
            font-size: 0.9rem;
            }
            }
        </style>
    </head>
    <body>
        <header class="header">
            <a href="home" class="logo">${data.name}</a>
            <i class="bx bx-menu" id="menu-icon"></i>
            <nav class="navbar">
                <a href="#home" class="active">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
        <section class="home" id="home">
            <div class="home-content">
                <h3><span>Hey there!</span></h3>
                <h1>I'm <span>${data.name}</span></h1>
                <p>${data.shortBio}</p>
                <div class="link-icon">
                <a href="${data.linkedinURL}" target="_blank"
                    ><i class="bx bxl-linkedin"></i
                    ></a>
                <a href="${data.githubURL}" target="_blank"
                    ><i class="bx bxl-github"></i
                    ></a>
                <a href="mailto:${data.email}" target="_blank"
                    ><i class="bx bx-envelope"></i
                    ></a>
                </div>
                <a
                href="${data.resume}"
                class="btn-box"
                target="_blank"
                >Resume</a
                >
            </div>
        </section>
        <section class="about" id="about">
            <div class="about-container">
                <div class="about-text">
                <h2>About <span>Me</span></h2>
                <p>
                    ${data.about}
                </p>
                <a href="#contact" class="btn-connect">Connect with Me</a>
                </div>
                <div class="about-icons">
                <div class="icon">
                    <i class="fas fa-laptop-code"></i>
                    <p>Web Development</p>
                </div>
                <div class="icon">
                    <i class="fas fa-lightbulb"></i>
                    <p>Creative Solutions</p>
                </div>
                <div class="icon">
                    <i class="fas fa-users"></i>
                    <p>Team Player</p>
                </div>
                </div>
            </div>
        </section>
        <h1 class="sub-title">My <span>Skills</span></h1>
        <section id="skills">
            ${skillsArray
              .map(
                (skill) => `
            <div class="skill">
                <h3 class="skill-heading">${skill}</h3>
            </div>
            `
              )
              .join("")}
        </section>
        <h1 class="sub-title">My <span>Projects</span></h1>
        <section class="projects" id="projects">
            <div class="project-card">
                <div class="project-image">
                ${
                  imageBase64_1
                    ? `<img src="data:image/jpeg;base64,${imageBase64_1}" alt="${data.pName1}" class="project-img" />`
                    : ""
                }
                </div>
                <div class="project-content">
                <h3 class="project-heading">${data.pName1}</h3>
                <p class="project-para">
                    ${data.pDescription1}
                </p>
                <div class="project-buttons">
                    <a
                        href="${data.pDeployedLink1}"
                        class="p-btn"
                        target="_blank"
                        >Live Website</a>
                    <a
                        href="${data.pGithubLink1}"
                        class="p-btn"
                        target="_blank"
                        >GitHub Repository</a>
                </div>
                </div>
            </div>
            <div class="project-card">
                <div class="project-image">
                ${
                  imageBase64_2
                    ? `<img src="data:image/jpeg;base64,${imageBase64_2}" alt="${data.pName2}" class="project-img"/>`
                    : ""
                }
                </div>
                <div class="project-content">
                <h3 class="project-heading">${data.pName2}</h3>
                <p class="project-para">
                    ${data.pDescription2}
                </p>
                <div class="project-buttons">
                    <a
                        href="${data.pDeployedLink2}"
                        class="p-btn"
                        target="_blank"
                        >Live Website</a>
                    <a
                        href="${data.pGithubLink2}"
                        class="p-btn"
                        target="_blank"
                        >GitHub Repository</a>
                </div>
                </div>
            </div>
        </section>
        <section class="contact" id="contact">
            <div class="contact-text">
                <h2>Contact <span>Me</span></h2>
                <h4><span>Let's Connect</span></h4>
                <p>
                and explore how my skills and passion <br />
                can contribute to your digital projects. <br />
                Whether you're seeking a ${data.role}, <br />
                exploring opportunities, or looking to expand your <br />
                professional network, I'm excited about the possibilities!
                </p>
                <div class="link-icon">
                <a href="${data.linkedinURL}" target="_blank">
                <i class="bx bxl-linkedin"></i>
                </a>
                <a href="${data.githubURL}" target="_blank"
                    ><i class="bx bxl-github"></i
                    ></a>
                <a href="mailto:${data.email}" target="_blank"
                    ><i class="bx bx-envelope"></i
                    ></a>
                </div>
            </div>
            <div class="contact-form">
                <form>
                <input
                    type="text"
                    placeholder="Your Name"
                    required
                    />
                <input
                    type="email"
                    placeholder="Your Email"
                    required
                    />
                <textarea
                    name="Message"
                    placeholder="Your Message"
                    ></textarea>
                <input type="submit" value="Send Message" class="send" />
                </form>
            </div>
        </section>
        <footer class="footer">
            <div class="footer-text">
                <p> &#169; 2025 | ${data.name}</p>
            </div>
            <div class="footerIcon">
                <a href="#home"><i class="bx bx-up-arrow-alt"></i></a>
            </div>
        </footer>
    </body>
    </html>    
`;
};

// Lifecycle hook to generate the HTML when the component is mounted
// Assign the generated HTML to the reference
onMounted(async () => {
  previewHtml.value = await generateHtml();
});

// Function to trigger the download of the portfolio as an HTML file
/* 
- Create a new Blob object from the HTML content (previewHtml.value) with the MIME type 'text/html'.
- A Blob represents the HTML content as a file-like object. 
- Create a new anchor (<a>) element dynamically in the DOM.
- Create a URL representing the Blob object and assign it to the 'href' attribute of the link.
- This makes the Blob available for download as a file.
- Set the 'download' attribute on the anchor element.
- It uses 'portfolioStore.formData.name' to dynamically set the name of the downloaded file.
- Programmatically trigger a click event on the link element.
- This initiates the download process by triggering the download action.
*/
const downloadPortfolio = () => {
  const blob = new Blob([previewHtml.value], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${portfolioStore.formData.name}_Portfolio.html`;
  link.click();
};
</script>
