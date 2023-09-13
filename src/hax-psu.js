import { LitElement, html, render, css, nothing } from 'lit';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import '@shoelace-style/shoelace/dist/translations/en.js';
import "@lrnwebcomponents/page-section/page-section.js";

// Set the base path to the folder you copied Shoelace's assets to
setBasePath('dist/shoelace');

export class HaxPsu extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      stats: { type: Object },
      image: { type: String },
      year: { type: Number },
      examples: { type: Array },
    };
  }

  static get styles() {
    return css`
      :host {
        --hax-psu-square-1: var(--primary-color-1);
        --hax-psu-square-2: var(--primary-color-2);
        --hax-psu-square-3: var(--primary-color-3);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #444444;
        margin: 0 auto;
        background-color: white;
        overflow-x: hidden;
      }

      .logo {
        transition: all 0.3s ease-in-out;
        width: 200px;
        top: 0;
        left: 0;
      }

      header {
        width: 100%;
        height: 100px;
        display: flex;
        margin-bottom: -100px;
        z-index: 100;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: 'Roboto',Helvetica,Arial,Lucida,sans-serif;
        font-weight: bold;
        font-style: normal;
        text-transform: none;
        text-decoration: none;
        letter-spacing: 1px;
        padding-bottom: 8px;
        line-height: 1em;
        margin: 0;
      }

      hr.side-line {
        display: inline-block;
        width: 9%;
        margin-bottom: 2.75%;
        height: 1px;
        border: none;
        border-top: 5px solid var(--secondary-color-1);
      }

      .logo-wrapper {
        padding: 16px;
      }

      a {
        color: var(--link-color-1);
        font-weight: 600;
        text-decoration: underline;
      }
      a:focus {
        outline: 2px solid var(--link-color-1);
        outline-offset: 2px;
      }

      a:hover {
        text-decoration: none;
      }

      .logo-wrapper a {
        display: block;
      }

      main {
        flex-grow: 1;
        width: 100%;
        display: block;
      }

      main h1,
      main h2 {
        text-align: left;
      }

      .tease-link {
        text-decoration: none;
        margin: 16px auto;
        display: block;
      }

      .tease-link button {
        transition: all 0.3s ease-in-out;
        background-color: orange;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        font-size: 40px;
        cursor: pointer;
      }

      .tease-link button:hover,
      .tease-link button:focus {
        background-color: #ff8c00;
      }

      .tease-link button:active {
        background-color: black;
        color: #ff8c00;
      }
      .container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        margin: 0px auto;
      }
      .section {
        background-color: var(--bg-color-1);
      }
      grid-plate {
        margin: 0 0 128px;
      }
      grid-plate div {
        margin: 0 32px;
      }
      play-list {
        --sl-color-neutral-300: var(--primary-color-2);
        --sl-color-neutral-700: var(--secondary-color-2);
        --play-list-icon-color: var(--primary-color-1);
      }
      #section-2 {
        background-color: var(--bg-color-1);
      }

      #section-3 {
        background-color: var(--bg-color-2);
      }

      #section-4 {
        color: var(--bg-color-1);
        --page-section-content-padding: 0 2%;
        --page-section-content-width: 90%;
        --page-section-content-max-width: 90%;
      }

      #section-5 {
        background-color: var(--bg-color-1);
      }

      #section-6 {
        background-color: var(--bg-color-2);
      }
      
      .section.top {
        text-align: left;
      }
      .section:not(.top) {
        --page-section-padding: 32px 0;
      }

      .section.top h1 .hax {
        font-weight: bold;
        font-style: italic;
        font-family: 'Press Start 2P', sans-serif;
        font-size: 3rem;
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 4px;
      }

      .section.top h1 .create {
        font-weight: bold;
        font-style: italic;
        font-family: 'Press Start 2P', sans-serif;
        font-size: 3rem;
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 4px;
      }

      .entice-wrapper {
        display: flex;
        padding: 0;
        margin: 0 0 16px;
      }

      play-list::part(site-wrapper) {
        display: flex;
      }

      play-list::part(site-details) {
        margin: 0 16px;
      }

      play-list::part(site-type),
      .psu-entice {
        color: white;
        background-color: #00000088;
        padding: 8px;
        font-size: 20px;
        display:table;
      }

      play-list::part(site-description) {
        margin: 0;
      }

      .section-style-1 {
        width: 80%;
        margin: 0 auto;
        max-width: 1080px;
        padding: 32px 0;
        text-align: left;
      }

      p {
        line-height: 32px;
        font-size: 22px;
        margin: 0 0 32px 0;
        padding: 0;
      }
      h3,h4,h5,h6 {
        margin: 0;
        padding: 0 0 8px 0;
        line-height: 42px;
        font-size: 22px;
        text-transform: uppercase;
      }

      .menu {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width: 100%;
        margin-right: 100px;
        margin-top: 10px;
      }

      .menu .menu-item {
        display: flex;
        text-decoration: none;
        height: fit-content;
        transition: all 0.3s ease-in-out;
      }

      .menu .menu-item.menu-login button {
        color: var(--primary-color-1);
        background-color: var(--secondary-color-1);
      }

      .menu .menu-item button {
        margin: 0 16px;
        cursor: pointer;
        text-decoration: none;
        padding: 8px 16px;
        font-size: 24px;
        background-color: transparent;
        color: var(--primary-color-3);
        border: 0;
        height: 64px;
        transition: all 0.3s ease-in-out;
      }

      .menu .menu-item button:hover,
      .menu .menu-item button:focus {
        color: var(--secondary-color-1);
        background-color: var(--primary-color-1);
        text-decoration: underline;
      }

      .square {
        color: white;
        background-color: var(--hax-psu-square-1);
        margin: 0 8px;
        border: 6px solid black;
      }

      .square-2 {
        background-color: var(--hax-psu-square-2);
      }

      .square-3 {
        background-color: var(--hax-psu-square-3);
        color: black;
      }

      future-terminal-text {
        overflow-wrap: break-all;
        line-height: 36px;
        font-size: 18px;
        text-align: left;
        --future-terminal-text-color: white;
      }

      count-up {
        text-align: center;
        width: 200px;
        min-height: 200px;
        font-size: 20px;
        color: white;
        padding: 16px;
        --count-up-number-font-weight: 500;
        --count-up-number-font-size: 64px;
        --count-up-color: white;
      }

      .square-3 count-up {
        color: black;
        --count-up-color: black;        
      }

      footer {
        background-image: linear-gradient(180deg,#002e69 0%,#001e44 60%)!important;
        font-family: "Roboto Condensed",Impact,"Franklin Gothic Bold",sans-serif;
        font-size: .95rem;
        overflow: hidden;
        line-height: 26px;
        width: 100%;
        border-bottom: solid 8px var(--secondary-color-2);
      }
      .footer-inner {
        width: 80%;
        max-width: 1080px;
        margin: auto;
        position: relative;
        padding: 1em;
      }
      .footer-logo {
        float: left;
        max-width: 160px;
        margin-right: 2em;
        padding-top: 20px;
      }
      footer a {
        color: var(--link-color-2);
        font-weight: normal;
        text-decoration: none;
        font-size: 0.95rem;
      }
      footer a:hover {
        text-decoration: underline;
      }
      footer ul {
        list-style: none;
        padding: 0.5rem 0;
        margin: 0;
      }
      footer ul li {
        display: inline-block;
        border-right: 1px solid #314d64;
        padding: 0 8px;
        margin-left: 0;
      }
      footer img {
        margin: 0 auto 0;
        width: 168px;
        max-width: 100%;
        height: auto;
      }
      footer ul li:first-child {
        padding-left: 0;
      }
      footer ul li:last-child {
        border-right: none;
        padding-right: 0;
      }

      #top {
        position: fixed;
        right: 0;
        bottom: 125px;
        z-index: 10000;
        --simple-icon-width: 48px;
        --simple-icon-height: 48px;
        --simple-icon-button-border-radius: none;
      }

      details summary {
        padding: 6px;
        margin: 16px 0 0 0;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        color: black;
      }

      details summary:hover,
      details summary:focus {
        background-color: var(--bg-color-2);
      }

      details[open] summary ~ * {
        animation: sweep .5s ease-in-out;
        padding: 16px;
        background-color: var(--bg-color-2);
      }

      .rpg-container {
        margin-bottom: 32px;
        display: flex;
        justify-content: space-evenly;
      }

      @keyframes sweep {
        0%    {opacity: 0; margin-left: -10px}
        100%  {opacity: 1; margin-left: 0px}
      }

      @media (max-width: 1400px) {
        .menu {
          margin-right: 0px;
          margin-top: 4px;
        }
        .menu .menu-item button {
          margin: 0px 4px;
        }
      }

      @media (max-width: 1200px) {
        .logo {
          width: 150px;
        }
        .menu .menu-item button {
          font-size: 16px;
        }  
      }

      @media (max-width: 1000px) {
        .logo {
          width: 100px;
        }
        .menu .menu-item button {
          padding: 4px 8px;
        }  
      }

      @media (max-width: 768px) {

        .menu .menu-item button {
          margin: 0px 4px;
          padding: 4px 8px;
          font-size: 12px;
          height: 48px;
        }        

        #section-2,
        #section-3,
        #section-5,
        #section-6 {
          --page-section-content-padding: 0 2%;
          --page-section-content-width: 90%;
          --page-section-content-max-width: 90%;
        }
        #section-3 .container count-up {
          width: unset;
          --count-up-number-font-size: 48px;
        }
        .section-style-1 {
          width: 100%;
          padding: 16px 0;
        }

        p {
          line-height: 24px;
          font-size: 14px;
          margin: 0 0 24px 0;
        }
        h3,h4,h5,h6 {
          padding: 0 0 8px 0;
          line-height: 32px;
          font-size: 18px;
        }
      }

      @media (max-width: 640px) {
        .menu .menu-item.menu-login {
          display: none;
        }
        #top {
          display: none;
        }
      }
    `;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    setTimeout(() => {
      import("@lrnwebcomponents/simple-cta/simple-cta.js");
      import("@lrnwebcomponents/future-terminal-text/future-terminal-text.js");
      import("@lrnwebcomponents/simple-img/simple-img.js");
      import("@lrnwebcomponents/scroll-button/scroll-button.js");
      import("@lrnwebcomponents/play-list/play-list.js");
      import("@lrnwebcomponents/grid-plate/grid-plate.js");
      import("@lrnwebcomponents/count-up/count-up.js");
      import("@lrnwebcomponents/rpg-character/rpg-character.js");
      import("@shoelace-style/shoelace/dist/components/carousel/carousel.js");
      import("@shoelace-style/shoelace/dist/components/carousel-item/carousel-item.js");
      this.renderExamplesTemplate();
    }, 0);
  }

    // because of how processed <template> tags work in lit (illegal) we have to specialized way of rendering
  // so that the play-list element is empty for a second and then we template stamp it into placee
  renderExamplesTemplate() {
    let template = document.createElement("template");
    render(
      html`${this.examples.map(
        (item) =>
          html`
            <div part="site-wrapper">
              <simple-img loading="lazy" fetchpriority="low" decoding="async" src="https://screenshoturl.elmsln.vercel.app/api/screenshotUrl?quality=10&render=img&urlToCapture=${item.image}">
              </simple-img>
              <div part="site-details">
              <simple-cta slot="buttons" link="${item.url}" accent-color="blue" dark>${item.title}</simple-cta>
                <div part="site-type"><strong>${item.type}</strong></div>
                <p part="site-description">${item.description}</p>
              </div>
            </div>`
      )}`,
      template
    );
    this.shadowRoot
      .querySelector("#examplestemplate")
      .appendChild(template);
  }

  constructor() {
    super();
    window.addEventListener(
      "hashchange",
      () => {
        setTimeout(() => {
          if (this.shadowRoot && window.location.hash) {
            const nextTarget = this.shadowRoot.querySelector(`${window.location.hash}`);
            if (nextTarget && nextTarget.scrollIntoView) {
              nextTarget.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        }, 0);
      },
      false,
    );
    this.title = 'HAX @ PSU';
    this.examples = [
      {
        title: 'AA 100',
        type: "course website",
        description: 'Introduction to International Arts',
        url: 'https://courses.hax.psu.edu/bto108/sites/aa100-su23/',
        image: 'https://oer.hax.psu.edu/bto108/sites/aa100-su23/module-four-identity-case-studies-in-france-italy-and-india/france/new-item'
      },
      {
        title: 'PHYS 211',
        type: "course website",
        description: 'Mechanics',
        url: 'https://oer.hax.psu.edu/lul29/sites/phys211/',
        image: 'https://oer.hax.psu.edu/lul29/sites/phys211/week-3a-kinematics-of-projectile-motion-and-uniform-circular-motion/uniform-circular-motion'
      },
      {
        title: 'HAXCelence',
        type: "website",
        description: 'Our community site for advancing excellence in online teaching via HAX',
        url: 'https://oer.hax.psu.edu/bto108/sites/haxcellence/',
        image: 'https://oer.hax.psu.edu/bto108/sites/haxcellence/ontology'
      },
      {
        title: 'PHYS 212',
        type: "course website",
        description: 'Electricity and Magnetism',
        url: 'https://oer.hax.psu.edu/arz48/sites/phys212/',
        image: 'https://oer.hax.psu.edu/arz48/sites/phys212/'
      },
      {
        title: 'IST 256',
        type: "course website",
        description: 'Programming for the web',
        url: 'https://oer.hax.psu.edu/bto108/sites/ist256/',
        image: 'https://oer.hax.psu.edu/bto108/sites/ist256/'
      },
      {
        title: 'The Sea Voyage',
        type: "self-hosted resource",
        description: 'Digital Beaumont & Fletcher',
        url: 'https://tsv-dbfp.libraries.psu.edu',
        image: 'https://tsv-dbfp.libraries.psu.edu/content/basetext/basetext-act-02/'
      },
      {
        title: 'Eberly ODL',
        type: "self-hosted website",
        description: 'Custom site for Eberly Office of Digital Learning',
        url: 'https://odl.science.psu.edu/',
        image: 'https://odl.science.psu.edu/',
      },

      
    ];
    this.stats = {};
    this.year = new Date().getFullYear();
    this.image = '';
    let base = '';
    if (
      window.location.origin.startsWith("http://127.0.0.1") ||
      window.location.origin.startsWith("http://localhost")
    ) {
      base = window.location.origin
        .replace(/127.0.0.1:8(.*)/, "localhost:3000")
        .replace(/localhost:8(.*)/, "localhost:3000");
    }
    fetch(`${base}/api/stats`).then((res) => {
      if (res.ok) {
        return res.json();
      }
      else {
        this.stats = null;
      }
    }
    ).then((data) => {
      this.stats = data.data.overall;
    }).catch((e) => {
      this.stats = null;
    });
    setTimeout(() => {
      this.shadowRoot.querySelector('.hax')._doGlitch();
    }, 1000);
    setTimeout(() => {
      this.shadowRoot.querySelector('.hax')._doGlitch();
    }, 5000);
    setTimeout(() => {
      this.shadowRoot.querySelector('.hax')._doGlitch();
    }, 10000);
    setTimeout(() => {
      this.shadowRoot.querySelector('.create').innerHTML = "COURSES";
      this.shadowRoot.querySelector('.create')._doGlitch();
    }, 4000);
    setTimeout(() => {
      this.shadowRoot.querySelector('.create').innerHTML = "PORTFOLIOS";
      this.shadowRoot.querySelector('.create')._doGlitch();
    }, 8000);

    setTimeout(() => {
      this.shadowRoot.querySelector('.create').innerHTML = "ANYTHING";
      this.shadowRoot.querySelector('.create')._doGlitch();
    }, 12000);
  }

  render() {
    return html`
    <header>
      <div class="logo-wrapper">
        <a href="https://www.psu.edu" title="Penn State" role="link">
          <img loading="lazy" decoding="async" fetchpriority="low" src="${makeUrl('images/Penn-State-Mark.png')}" alt="Nittany Lion Shield Penn State Mark" class="logo" />
        </a>
      </div>
      <div class="menu">
        <a href="https://hax.psu.edu/login.php" tabindex="-1" class="menu-item menu-login"><button>Login</button></a>
        <a href="#section-2" tabindex="-1" class="menu-item"><button data-target="section-2">HAX</button></a>
        <a href="#section-3" tabindex="-1" class="menu-item"><button data-target="section-3">Usage</button></a>
        <a href="#section-4" tabindex="-1" class="menu-item"><button data-target="section-4">Users</button></a>
        <a href="#section-5" tabindex="-1" class="menu-item"><button data-target="section-5">Examples</button></a>
        <a href="#section-6" tabindex="-1" class="menu-item"><button data-target="section-6">About</button></a>
        <a href="#section-7" tabindex="-1" class="menu-item"><button data-target="section-7">FAQ</button></a>
      </div>
    </header>
    <main>
      <page-section id="section-1" full class="section top" filter accent-color="blue" fold scroller scroller-label="Let's learn about HAX" image="${makeUrl('images/splash.jpg')}">
        <h1><span class="text">Create <future-terminal-text white glitch class="create">WEBSITES</future-terminal-text></span>
          <div>
            <span class="text">easily with </span><future-terminal-text glitch class="hax">HAX</future-terminal-text>
          </div>
        </h1>
        <p class="entice-wrapper"><span class="psu-entice">Part of <strong>Penn State</strong>?</span></p>
        <simple-cta slot="buttons" link="https://hax.psu.edu/login.php" accent-color="blue" dark>Log in</simple-cta>
      </page-section>
      <page-section id="section-2" class="section" scroller scroller-label="By the numbers">
        <div class="section-style-1">
          <h2>What is HAX?</h2>
          <hr class="side-line" />
          <p><strong>A radically simple approach to <em>web authoring</em> and <em>content ownership</em>.</strong></p>
          <p>HAX is built on the premise
            that any and everyone should be able to create rich, engaging content without the need for complex platforms, installations or vendor lock-in.
            The HAX block system allows for sustainable content creation that is easy to click and build for novices while outputting clean, semantic HTML for experts.
          </p>
        </div>
      </page-section>
      <page-section id="section-3" class="section" accent-color="orange">
      ${this.stats != null ? html`
        <h2>By the numbers</h2>
        <div class="container">
          <div class="square">
            <count-up end="${this.stats.site_count}" suffixtext=" sites">
              <div slot="suffix">Built with HAX</div>
            </count-up>
          </div>
          <div class="square square-2">
            <count-up end="${this.stats.user_count}" suffixtext=" users">
              <div slot="suffix">Creating with HAX</div>
            </count-up>
          </div>
          <div class="square square-3">
            <count-up end="${this.stats.total_pages}" suffixtext=" pages">
              <div slot="suffix">of unique content</div>
            </count-up>
          </div>
        </div>
        ` : nothing}
      </page-section>
      <page-section id="section-4" accent-color="blue" bg="var(--primary-color-2)" filter fold class="section">
        <h2>Who is HAX for?</h2>
        <grid-plate layout="1-1-1">
          <p slot="col-1">
            <strong>Faculty</strong> - Build a course website, a research website, or a personal website
          </p>
          <p slot="col-2">
            <strong>Students</strong> - Build a portfolio, a resume, or a personal website
          </p>
          <p slot="col-3">
            <strong>Staff</strong> - Build a department website, a project website, or a personal website
          </p>
        </grid-plate>
      </page-section>
      <page-section id="section-5" class="section">
        <h2>Examples</h2>
        <p>Here are some example of real courses and websites using HAX in production.</p>
        <play-list id="examplestemplate" loop></play-list>
      </page-section>
      <page-section id="section-6" class="section" fold>
        <grid-plate layout="1-1">
          <div slot="col-1">
            <h3>About</h3>
            <p>
              HAX is a service provided through a collaboration between Penn State College of Arts and Architecture,
              Eberly College of Science, College of Information Sciences and Technology, and University libraries. The platform is powered
              by HAXcms, originally developed to power 100s of high scale online courses. Interested in collaborating? Contact <a href="mailto:bmr1@psu.edu">Bill Rose, Product Owner</a>.
            </p>
          </div>
          <div slot="col-2">
            <h3>Privacy policy</h3>
            <p>
            Penn State IT does not monitor websites and does not assume responsibility for any published content.
            The content authors are responsible for the content of their websites.
            Use of this service is governed by <a href="https://security.psu.edu/awareness/psu-policies/" target="_blank" rel="nofollow noopener">Penn State policies and guidelines</a>, including 
            <a href="https://policy.psu.edu/policies/ad54" target="_blank" rel="nofollow noopener">Penn State IT Web Services Policy</a>.
            </p>
          </div>
        </grid-plate>
      </page-section>
      <page-section id="section-7" class="section">
        <div class="section-style-1">
          <h2>Frequently Asked Questions</h2>
          <hr class="side-line" />
          <details>
            <summary>
              Who can use HAX?
            </summary>
            <p>
              Anyone, anywhere! Thanks to HAX being open source, all you need is a web server and a domain name to get started. We also support publishing directly to GitHub pages and other static publishing tools for advanced developer use-cases. If you are part of Penn State though you can just click <a href="https://hax.psu.edu/login.php">log in</a> to get started immediately!
            </p>
          </details>
          <details>
            <summary>
              Who supports HAX?
            </summary>
            <p>
              The HAX user community is supported internal to Penn State by a collaboration between several units including the College of Arts and Architecture,
              Eberly College of Science, College of Information Sciences and Technology, and University Libraries. HAX also receives contributions from groups outside of Penn State including Buttercups LLC and community members at large.
            </p>
          </details>
          <details>
            <summary>
              How do I join the community?
            </summary>
            <p>
              Join our community Discord channel to get support from the community and the HAX team. <a href="https://bit.ly/hax-discord">Join the HAX Discord</a>
            </p>
          </details>
          <details>
            <summary>
              Why was HAX created?
            </summary>
            <div>
              <p>
                HAX is a response to a lack of products existing to meet the needs of producing accessible and engaging web content in online course environments.
                The university has a rich history of building a mix of custom, open source and buying repurposed commercial products with varying success.
              </p>
              <p>
                HAX was born out of a university Request For Information (RFI) that sought to build a custom Drupal Instructional Content management System (iCMS).
                After requirements were gathered by stakeholders across the university, it was determined that the best path forward was to build a new kind of solution
                as the system requirements described were far beyond what any commercial product was offering, and no vendors responded to the Request for proposal after initial RFI process.
              </p>
            </div>
          </details>
          <details>
            <summary>
              How are decisions made?
            </summary>
            <p>
              Decisions about the platform are influenced by a mix of needs from students, faculty and staff either taking courses delivered via the platform or actively building material with the platform.
              The direction of HAX is steered by the <em>Core Product Development team</em> which meets monthly and is made up of representatives from any
              group contributing development, design, or other skillsets toward the platform's development and sustainment. If you would like to
              join the <em>Core Product Development team</em> please contact <a href="mailto:bmr1@psu.edu">Bill Rose, Product Owner</a>.
            </p>
          </details>
          <details>
            <summary>
              What's with the 8-bit RPG administration design?
            </summary>
            <div>
            <p>Our 8-bit vibe was a design challenge presented to four College of IST students in the Spring of 2022. They were tasked with
              creating an over-world design that was fun, inviting, creative, and unique. The team took these requirements and built an
              experience that is playful, easy to use, and feels more like playing a video game than building a website.
            </p>
            <div class="rpg-container">
              <rpg-character></rpg-character>
              <rpg-character></rpg-character>
              <rpg-character></rpg-character>
              <rpg-character></rpg-character>
              <rpg-character></rpg-character>
              <rpg-character></rpg-character>
            </div>
            <p>Each RPG style character is unique to the user logging in and helps provide a humanizing and playful element to other aspects
              of what otherwise would be a mundane administrative interface. Websites produced by HAX can be a mix of professional and platful
              but the 8-bit design helps you designate between the admin task and what end-users see.
            </p>
            </div>
          </details>
        </div>
      </page-section>
    </main>
    <footer>
      <div class="footer-inner">
        <div class="footer-logo">
          <a href="https://www.psu.edu" title="Penn State" role="link">
            <img loading="lazy" decoding="async" fetchpriority="high" src="${makeUrl('images/Penn-State-Mark.png')}" alt="Nittany Lion Shield Penn State Mark" class="logo" />
          </a>
        </div>
        <div class="footer-left">
          <ul>
            <li><a href="https://www.psu.edu/web-privacy-statement" role="link">Privacy Statement</a></li>
            <li><a href="https://policy.psu.edu/policies/ad85" role="link">Non Discrimination</a></li>
            <li><a href="https://www.psu.edu/accessibilitystatement" role="link">Accessibility</a></li>
            <li><a href="https://policy.psu.edu/policies/hr11" role="link">Equal Opportunity</a></li>
            <li><a href="https://www.psu.edu/legal-statements" role="link">Legal Statements</a></li>
          </ul>
          <ul>
            <li><a href="https://www.psu.edu/copyright-information/index.html" role="link">The Pennsylvania State University © <span id="YEAR">${this.year}</span></a></li>
            <li><a href="https://hax.psu.edu/login.php" role="link">Login</a></li>
            <li class="footer-svg"><img loading="lazy" decoding="async" fetchpriority="high" src="${makeUrl('images/we-are-penn-state.svg')}" alt="We Are Penn State"></li>
          </ul>
        </div>
      </div>
      <scroll-button id="top" label="Top"></scroll-button>
    </footer>
    `;
  }
}
// make URL for build routine accurate
function makeUrl(path) {
  return new URL(`../assets/${path}`, import.meta.url).href;
}

customElements.define('hax-psu', HaxPsu);
