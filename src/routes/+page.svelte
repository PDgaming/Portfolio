<script>
    import cssImg from "../lib/imgs/css.png";
    import githubImg from "../lib/imgs/github.png";
    import htmlImg from "../lib/imgs/html.png";
    import javascriptImg from "../lib/imgs/javascript.png";
    import linkedinImg from "../lib/imgs/linkedin.png";
    import pythonImg from "../lib/imgs/python.png";
    import vscodeImg from "../lib/imgs/vscode.png";
    import logo from "../lib/imgs/logo.png";
    import bootstrapImg from "../lib/imgs/bootstrap.png";
    import firebaseImg from "../lib/imgs/firebase.png";
    import nodeImg from "../lib/imgs/node.png";
    import supabaseImg from "../lib/imgs/supabase.png";
    import svelteImg from "../lib/imgs/svelte.png";
    import gradeAppImg from "../lib/imgs/bento-1.png";
    import crackedEggsImg from "../lib/imgs/bento-2.png";
    import resume from "./Resume.pdf";
</script>

<header>
    <a href="/" class="logo-holder">
        <div class="logo"><img src={logo} alt="Logo" width="70px" /></div>
        <div class="logo-text">Portfolio Website</div>
    </a>
    <nav>
        <ul id="menu">
            <li style="background-color: white;">
                <a href="/">Home</a>
            </li>
            <li style="background-color: white;">
                <a href="#skills">Skills</a>
            </li>
            <li style="background-color: white;">
                <a href="#projects">Projects</a>
            </li>
            <li style="background-color: white;">
                <a href="mailto:produnyadehingia@gmail.com" class="button"
                    >Contact Me</a
                >
            </li>
        </ul>
    </nav>
</header>
<main>
    <section class="hero container">
        <div class="hero-blue">
            <div>
                <h1>
                    <small>Hi I'm</small>
                    Produnya Dehingia
                </h1>
                <p>
                    Developer from Assam who creates educational content on
                    YouTube to teach others about HTML, CSS, Javascript and much
                    more.
                </p>
                <div class="call-to-action">
                    <a href={resume} class="button black"> View Resume </a>
                    <a
                        href="mailto:produnyadehingia@gmail.com"
                        class="button white"
                    >
                        Contact Me
                    </a>
                </div>
                <div class="social-links">
                    <a href="https://github.com/PDgaming">
                        <img src={githubImg} alt="GitHub" width="48" />
                    </a>
                    <a href="/">
                        <img src={linkedinImg} alt="LinkedIn" width="48" />
                    </a>
                </div>
            </div>
        </div>
        <div class="hero-yellow">
            <img src="/" alt="Produnya Dehingia" width="100%" />
        </div>
    </section>
    <section class="logos container">
        <div class="marquee">
            <div class="track">
                <img src={htmlImg} alt="HTML" width="128" />
                <img src={cssImg} alt="CSS" width="128" />
                <img src={javascriptImg} alt="JS" width="128" />
                <img src={vscodeImg} width="128" alt="VS Code" />
                <img src={pythonImg} width="128" alt="Python" />
                <img src={bootstrapImg} width="128" alt="Bootstrap" />
                <img src={firebaseImg} width="128" alt="Firebase" />
                <img src={nodeImg} width="128" alt="Node" />
                <img src={supabaseImg} width="128" alt="Supabase" />
                <img src={svelteImg} width="128" height="128" alt="Svelte" />

                <img src={htmlImg} alt="HTML" width="128" />
                <img src={cssImg} alt="CSS" width="128" />
                <img src={javascriptImg} alt="JS" width="128" />
                <img src={vscodeImg} width="128" alt="VS Code" />
                <img src={pythonImg} width="128" alt="Python" />
                <img src={bootstrapImg} width="128" alt="Bootstrap" />
                <img src={firebaseImg} width="128" alt="Firebase" />
                <img src={nodeImg} width="128" alt="Node" />
                <img src={supabaseImg} width="128" alt="Supabase" />
                <img src={svelteImg} width="128" height="128" alt="Svelte" />
            </div>
        </div>
    </section>
    <section id="skills" class="skills container">
        <h2>
            <small>About Me</small>
            Skills
        </h2>
        <div class="holder-blue">
            <div class="left-column">
                <h3>Frontend</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Svelte</li>
                    <li>Svelte Kit</li>
                    <li>Bootstrap</li>
                    <li>Responsive Design</li>
                </ul>
                <h3>Backend</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Supabase</li>
                    <li>Firebase</li>
                </ul>
            </div>
            <div class="right-column">
                <h3>A bit about me</h3>
                <p>
                    Hi I'm Produnya Dehingia, a and developer from Assam who
                    creates educational content on YouTube to teach others about
                    HTML, CSS, JavaScript and much more.
                </p>
                <p>
                    I don't have much profesional work experience, but I hope to
                    learn more about a professional workplace.
                </p>
            </div>
        </div>
    </section>
    <section class="work-experience container">
        <h2>
            <small>Recent</small>
            Work Experience
        </h2>
        <div class="jobs">
            <article>
                <!-- <figure>
                    <figcaption>Workplace - 1 YouTube Creator</figcaption>
                    <div>
                        <img
                            src="./imgs/workplace-1.jpg"
                            alt="Workplace 1 - YouTube Creator"
                            width="100%"
                        />
                    </div>
                </figure> -->
                <h3>I don't have a job yet</h3>
                <div>But you can help me get one!!</div>
                <p></p>
            </article>
        </div>
    </section>
    <section id="projects" class="bento container">
        <h2>
            <small> Previous </small>
            Completed Projects
        </h2>
        <div class="bento-grid">
            <a href="/" class="bento-item">
                <img src={gradeAppImg} alt="Grade App" width="100%" />
            </a>

            <a href="/" class="bento-item">
                <img
                    src={crackedEggsImg}
                    alt="Cracked Eggs Minecraft Server"
                    width="100%"
                />
            </a>
            <a href="/" class="bento-item">
                <img src="" alt="" width="100%" />
            </a>
            <a href="/" class="bento-item">
                <img src="." alt="" width="100%" />
            </a>
            <a href="/" class="bento-item">
                <img src="" alt="" width="100%" />
            </a>
            <a href="/" class="bento-item">
                <img src="" alt="" width="100%" />
            </a>
        </div>
    </section>
</main>

<style lang="postcss">
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    :root {
        --base: #555;
        --base-100: #f1f1f1;
        --base-400: #555;
        --base-800: #000;
        --yellow: #ffda4b;
        --yellow-100: #fffbe6;
        --yellow-400: #ffda4b;
        --yellow-800: #8b6f00;
        --blue: #0a61ae;
        --blue-100: #e2f8ff;
        --blue-400: #61dafb;
        --blue-800: #0a61ae;
    }
    a {
        text-decoration: none;
        color: var(--blue);
    }
    a:hover {
        text-decoration: underline;
    }
    header {
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        justify-content: space-between;
        max-width: 1440px;
        margin: auto;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    header .logo-holder {
        display: flex;
        padding: 10px;
        align-items: center;
        font-weight: 600;
        color: var(--base-800);
    }
    .logo-holder .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        background-color: var(--base-800);
        color: var(--base-100);
        height: 64px;
        width: 64px;
        margin-right: 20px;
        border-radius: 50%;
    }
    .logo-holder .logo-text {
        flex: 1;
    }
    nav {
        display: flex;
        align-items: center;
    }
    nav ul {
        display: flex;
        list-style-type: none;
        gap: 5px;
    }
    ul li {
        display: inline-block;
    }
    li a {
        display: inline-block;
        padding: 10px 20px;
        color: var(--base);
    }
    li a:hover {
        background-color: var(--base-100);
        border-radius: 10px;
        text-decoration: none;
    }
    @media (max-width: 1024px) {
        nav {
            flex-direction: column;
            align-items: center;
        }
    }
    @media (max-width: 768px) {
        nav {
            flex-direction: column;
            align-items: center;
        }
        nav {
            margin-top: 10px;
            width: 100%;
        }
        nav ul {
            display: none;
            flex-direction: column;
            text-align: center;
            width: 100%;
        }
        ul a {
            width: 100%;
        }
        ul.active {
            display: flex;
        }
    }
    section {
        max-width: 1440px;
        margin: auto;
        gap: 30px;
        margin-top: 30px;
        margin-bottom: 30px;
        @media (max-width: 1440px) {
            padding-left: 30px;
            padding-right: 30px;
        }
    }
    .button {
        display: inline-block;
        padding: 10px 30px;
        background-color: var(--blue);
        color: var(--base-100);
        border-radius: 10px;
        transition: ease 0.3s all;
    }
    .button:hover {
        text-decoration: none;
        background-color: var(--base-800);
    }
    .button.white {
        background-color: white;
        color: var(--base-800);
    }
    .button.white:hover {
        background-color: var(--base-100);
        color: var(--base);
    }
    .button.black {
        background-color: black;
        color: white;
    }
    .button.black:hover {
        background-color: var(--base);
        color: var(--base-100);
    }
    h1 {
        font-size: 64px;
        line-height: 1;
        margin-bottom: 10px;
    }
    h1 small {
        display: block;
        font-weight: 100;
    }
    @media (max-width: 1024px) {
        h1 {
            font-size: 48px;
        }
    }
    .hero {
        display: flex;
    }
    @media (max-width: 1024px) {
        .hero {
            flex-direction: column;
        }
    }
    .hero .hero-blue {
        flex: 1;
        background-color: var(--blue-100);
        border-radius: 30px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .call-to-action {
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .call-to-action a {
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .social-links a:hover {
        text-decoration: none;
    }
    .hero-yellow {
        flex: 1;
        background-color: var(--yellow);
        border-radius: 30px;
        padding: 0px 30px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    .hero img {
        margin-top: -60px;
        max-width: 420px;
        margin-bottom: -10px;
    }
    .logos {
        background-color: var(--base-100);
        border-radius: 30px;
        padding: 30px 0px;
        @media (max-width: 1440px) {
            border-radius: 0px;
        }
    }
    .marquee {
        width: 100vw;
        max-width: 100%;
        height: 128px;
        overflow: hidden;
        position: relative;
    }
    .marquee .track {
        position: absolute;
        white-space: nowrap;
        will-change: transform;
        animation: marquee 40s linear infinite;
        display: flex;
        gap: 10px;
    }
    @keyframes marquee {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
    h2 {
        font-size: 64px;
        line-height: 1;
        margin-bottom: 10px;
        text-align: center;
        color: var(--base-800);
        padding: 30px;
    }
    h2 small {
        display: block;
        font-weight: 100;
        font-size: 0.5em;
        color: var(--base);
    }
    @media (max-width: 1024px) {
        h2 {
            font-size: 48px;
        }
    }
    h3 {
        font-size: 32px;
        font-weight: 600;
        line-height: 1;
        margin-bottom: 20px;
        color: var(--base-800);
    }
    .skills .holder-blue {
        background-color: var(--blue-100);
        border-radius: 30px;
        padding: 30px;
        display: flex;
        @media (max-width: 1024px) {
            flex-direction: column;
        }
    }
    .skills .left-column {
        flex: 1;
    }
    .left-column ul {
        list-style-type: none;
        gap: 10px;
        margin-right: 100px;
        margin-bottom: 20px;
    }
    ul li {
        display: inline-block;
        background-color: var(--blue-400);
        padding: 10px 20px;
        border-radius: 15px;
        margin-bottom: 10px;
    }
    .skills .right-column {
        flex: 1;
    }
    .right-column p {
        margin-bottom: 20px;
    }
    .work-experience .jobs {
        display: flex;
        gap: 30px;
        @media (max-width: 1024px) {
            flex-direction: column;
        }
    }
    .jobs article {
        background-color: var(--yellow-100);
        padding: 30px;
        border-radius: 30px;
        flex: 1;
    }
    article h3 {
        margin-top: 20px;
        margin-bottom: 10px;
    }
    article div {
        font-weight: 600;
        margin-bottom: 5px;
        color: var(--base-800);
    }
    article p {
        margin-bottom: 10px;
    }
    /*
    article figure {
        width: 100%;
        padding-top: 56.25%;
        overflow: hidden;
        position: relative;
        border-radius: 15px;
    }
    figure img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        object-fit: cover;
        transition: ease 3s all;
    }
    figure figcaption {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
        color: var(--base-100);
        text-align: center;
        padding: 10px;
        opacity: 0;
        visibility: hidden;
        transition: ease 0.3s all;
    }

    figure:hover figcaption {
        opacity: 1;
        visibility: visible;
    }
    figure:hover img {
        transform: scale(1.2);
    }
*/
    .bento .bento-grid {
        display: grid;
        grid-gap: 30px;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(4, 1fr);
        height: 960px;
        @media (max-width: 1024px) {
            grid-template-rows: repeat(8, 1fr);
        }
        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            gap: 30px;
            height: auto;
        }
    }
    .bento-grid .bento-item {
        padding: 30px;
        background-color: var(--base-100);
        border-radius: 15px;
        position: relative;
        overflow: hidden;
    }
    .bento-item img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        object-fit: cover;
        transition: ease 3s all;
    }
    .bento-item:hover img {
        transform: scale(1.2);
    }
    @media (max-width: 768px) {
        .bento-item {
            height: 240px;
        }
    }
    .bento-item:nth-child(1) {
        grid-column: span 2;
        grid-row: span 2;
        @media (max-width: 1024px) {
            grid-column: span 2;
            grid-row: span 2;
        }
    }
    .bento-item:nth-child(2) {
        grid-column: span 2;
        grid-row: span 1;
        @media (max-width: 1024px) {
            grid-column: span 3;
            grid-row: span 2;
        }
    }
    .bento-item:nth-child(3) {
        grid-column: span 1;
        grid-row: span 1;
        @media (max-width: 1024px) {
            grid-column: span 3;
            grid-row: span 2;
        }
    }
    .bento-item:nth-child(4) {
        grid-column: span 1;
        grid-row: span 1;
        @media (max-width: 1024px) {
            grid-column: span 2;
            grid-row: span 4;
        }
    }
    .bento-item:nth-child(5) {
        grid-column: span 2;
        grid-row: span 1;
        @media (max-width: 1024px) {
            grid-column: span 3;
            grid-row: span 2;
        }
    }
    .bento-item:nth-child(6) {
        grid-column: span 5;
        grid-row: span 3;
        @media (max-width: 1024px) {
            grid-column: span 5;
            grid-row: span 2;
        }
    }
</style>
