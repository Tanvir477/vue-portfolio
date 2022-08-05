<template>
<section class="wripper">
    <div class="main-container">
        <div class="container-one">
            <div class="profile">
                <img src="../assets/profile.png" alt="">
                <h3>AGM Tanvir Ivna Hossain</h3>
                <h5>Web Developer</h5>
            </div>
            <div class="social-links">

                <div class="links">

                    <a href="https://github.com/Tanvir477" target="_blank">
                        <img src="../assets/github.png" alt="">
                        <h2>GitHub</h2>
                    </a>
                </div>

                <div class="links">

                    <a href="https://www.linkedin.com/in/agmtanvir/" target="_blank">
                        <img src="../assets/linkedin.png" alt="">
                        <h2>Linkedin</h2>
                    </a>
                </div>

                <div class="links">

                    <a href="">
                        <img src="../assets/twitter.png" alt="">
                        <h2>Twitter</h2>
                    </a>
                </div>

                <div class="links">

                    <a href="https://www.instagram.com/hossain_ivna_tanvir/" target="_blank">
                        <img src="../assets/instragram.png" alt="">
                        <h2>Instagram</h2>
                    </a>
                </div>

            </div>
        </div>
        <div class="container-two">
            <div class="about-me">
                <h1>About Me</h1>
                <p>Hello I am Tanvir Hossain. I am a web Developer. Recently graduated from Southeast University with a B.Sc in Computer Science and Engineering. I have experience in HTML,CSS javascript, vuejs & PHP. I want to demonstrate my creativity and excitement for technical thinking, and I consider myself to be a quick learner. With prior leadership experience, strong communication skills, and a workaholic personality, I wish to contribute to the team in achieving the best possible outcome for organizational development.</p>
            </div>

            <div class="technology-section">
                <h1>Programing skills</h1>
                <div class="logos">
                    <div class="p-skills">
                        <img src="../assets/javaScript.png" alt="">
                        <div class="skill-bar">
                            <p>javaScript</p>
                            <div class="js-skills">
                                <div class=" javaScript">60%</div>
                            </div>
                        </div>
                    </div>
                    <div class="p-skills">
                        <img src="../assets/Html.png" alt="">
                        <div class="skill-bar">
                            <p>HTML</p>
                            <div class="html-skills">
                                <div class=" html">80%</div>
                            </div>
                        </div>
                    </div>

                    <div class="p-skills">
                        <img src="../assets/CSS.png" alt="">
                        <div class="skill-bar">
                            <p>CSS</p>
                            <div class="css-skills">
                                <div class=" css">70%</div>
                            </div>
                        </div>
                    </div>

                    <div class="p-skills">
                        <img src="../assets/logo.png" alt="">
                        <div class="skill-bar">
                            <p>Vue</p>
                            <div class="vue-skills">
                                <div class=" vue">60%</div>
                            </div>
                        </div>
                    </div>
                    <div class="p-skills">
                        <img src="../assets/php.png" alt="">
                        <div class="skill-bar">
                            <p>PHP</p>
                            <div class="php-skills">
                                <div class=" php">40%</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="button-container">
                <div class="projects-botton">
                    <a href="#projects">My Projects</a>
                </div>
                <div class="projects-botton">
                    <a href="">My Resume</a>
                </div>
            </div>

        </div>
    </div>
</section>



<!-- projects card -->

<section id="projects" class="project-temp">
    <div class="project-card" v-for="(items, index) in projectData.projectsArray" v-bind:key="items">
        <h2>{{projectData.projectsArray[index].Title}}</h2>
        <img class="project-image" :src="projectData.projectsArray[index].image" alt="">
        <p>{{projectData.projectsArray[index].About}}</p>
        <div class="card-links">
            <a :href="projectData.projectsArray[index].link1" target="_blank"><img src="../assets/githubmini.png" alt=""></a>
            <a :href="projectData.projectsArray[index].link2" target="_blank"><img src="../assets/link-alt.png" alt=""></a>
        </div>
    </div>
</section>



</template>

<script>
import jsonData from '/projects.json'
export default {
    data() {
        return {
            projectData: jsonData
        }
    }
}
</script>

<style scoped>

h1,h2,h3,h4,h5,h6,
p{
    color: #000;
}
.wripper {
    display: flex;
    justify-content: center;
    background-color: #1a1a1d;
}

img {
    height: 20px;
}

.main-container {
    display: flex;
    flex-direction: row;
    background-color: #A0D4FF;
    border-radius: 25px;
    margin-top: 20px;
    width: 60%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.container-one {
    background-color: #1292ff;
    padding: 2.5%;
    width: 30%;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

}

.profile img {
    height: 10rem;
    border-radius: 50%;
}

.profile h5 {
    margin-bottom: 10px;
}

.links a {
    text-decoration: none;
    color: #2c3e50;
    font-size: 12px;
    margin: 3px;

}

.links a img {
    height: 3rem;
    margin: 10px;

}

.links a h2 {
    font-size: 20px;
    margin: 0;
}

.container-two {

    margin: 2.5%;
    width: 70%;
    text-align: left;
}

.about-me {
    text-align: left;

}
.about-me p{
    font-size: 24px;
}

.technology-section h1 {

    margin-top: 20px;
}

.logos img {
    height: 2.5rem;
    margin: 10px;
}

.p-skills {
    display: flex;
    flex-direction: row;
}

.skill-bar {
    width: 100%;
    margin-top: 5px;
}

.skill-bar p {
    margin: 0;
}

.js-skills,
.html-skills,
.css-skills,
.vue-skills,
.php-skills {
    height: 16px;
    width: 90%;
    border-radius: 11px;
    background-color: #ddd;

}

.js-skills,
.html-skills,
.css-skills,
.vue-skills,
.php-skills div {
    text-align: right;
    font-size: 12px;
    padding-right: 10px;
}

.javaScript,
.html,
.css,
.vue,
.php {
    height: 16px;
    padding-right: 10px;
}

.javaScript {
    width: 60%;
    background-color: #f4bc1c;
    border-radius: 11px;
}

.html {
    width: 80%;
    background-color: #ff6600;
    border-radius: 11px;
}

.css {
    width: 70%;
    background-color: #06c;
    border-radius: 11px;
}

.vue {
    width: 60%;
    background-color: #04AA6D;
    border-radius: 11px;
}

.php {
    width: 40%;
    background-color: #00adf2;
    border-radius: 11px;
}

.button-container {
    margin-top: 5%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.projects-botton {
    background-color: #005ca4;
    border: none;
    color: white;
    padding: 16px 16px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    opacity: 0.6;
    transition: 0.3s;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    border-radius: 7px;

}

.projects-botton:hover {
    opacity: 1;
}

.projects-botton a {
    text-decoration: none;
    color: #fff;

}

.project-temp {
    margin-top: 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.project-card {
    margin: 10px;
    padding: 10px 20px;
    flex: 0 0 40%;
    background-color: #fff;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

}

.project-card img {
    height: 13rem;
}

.card-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
}

.card-links img {
    height: 1.2rem;
    margin: 5px;
}

@media only screen and (max-width: 1024px) {
    .main-container {
        width: 95%;
    }

    .profile h3 {
        margin: 10px 0;
        font-size: 24px;
        
    }

    .profile h5 {
        margin: 10px 0;
        font-size: 20px;
    }
}

@media only screen and (min-width: 1025px) {
    .project-image {
        height: 21rem !important;
    }

    .profile h3 {
        font-size: 27px;
        margin: 10px 0;

    }

    .profile h5 {
        font-size: 23px;
        margin-top: 10px;
    }

    .card-links img {
        height: 1.8rem;
    }
}

@media only screen and (max-width: 530px) {
    .profile img {
        height: 6rem;
    }

    .profile h3 {
        margin: 5px 0;
    }

    .profile h5 {
        margin: 10px 0;
    }

    .links {
        height: 110px;
    }

    .projects-botton {
        padding: 10px 16px;
        font-size: 13px;
    }

    .project-image {
        height: 10rem !important;
    }
    .about-me p{
    font-size: 17px;
}
}
</style>
