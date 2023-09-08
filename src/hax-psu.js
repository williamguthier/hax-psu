import { LitElement, html, render, css } from 'lit';
import "@lrnwebcomponents/play-list/play-list.js";
import "@lrnwebcomponents/grid-plate/grid-plate.js";
import "@lrnwebcomponents/count-up/count-up.js";
import "@lrnwebcomponents/simple-cta/simple-cta.js";
import "@lrnwebcomponents/page-section/page-section.js";
import "@lrnwebcomponents/future-terminal-text/future-terminal-text.js";
import "@lrnwebcomponents/simple-img/simple-img.js";

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

      .psu-entice {
        color: white;
        background-color: #00000088;
        padding: 8px;
        font-size: 20px;
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
    `;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    setTimeout(() => {
      this.renderExamplesTemplate();
    }, 0);
    setTimeout(() => {
      if (window.location.hash) {
        const nextTarget = this.shadowRoot.querySelector(`${window.location.hash}`);
        console.log(nextTarget);
        if (nextTarget && nextTarget.scrollIntoView) {
          nextTarget.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, 1000);
  }

    // because of how processed <template> tags work in lit (illegal) we have to specialized way of rendering
  // so that the play-list element is empty for a second and then we template stamp it into placee
  renderExamplesTemplate() {
    let template = document.createElement("template");
    render(
      html`${this.examples.map(
        (item) =>
          html`
            <div style="display:flex;">
              <simple-img fetchpriority="low" decoding="async" src="https://screenshoturl.elmsln.vercel.app/api/screenshotUrl?quality=10&render=img&urlToCapture=${item.image}">
              </simple-img>
              <div style="margin: 0 0 0 16px;">
                <h3><a href="${item.url}" target="_blank" rel="noopener">${item.title}</a></h3>
                <div><strong>${item.type}</strong></div>
                <p>${item.description}</p>
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
      return res.json();
    }
    ).then((data) => {
      this.stats = data.data.overall;
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

  scrollToTarget(e) {
    if (e.target.dataset && e.target.dataset.target) {
      const nextTarget = this.shadowRoot.querySelector(`#${e.target.dataset.target}`);
      if (nextTarget && nextTarget.scrollIntoView) {
        nextTarget.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  render() {
    return html`
    <header>
      <div class="logo-wrapper">
        <a href="https://www.psu.edu" title="Penn State" role="link">
          <img decoding="async" src="https://sites.psu.edu/files/2023/03/Penn-State-Mark.png" alt="Nittany Lion Shield Penn State Mark" class="logo" />
        </a>
      </div>
      <div class="menu">
        <a href="https://hax.psu.edu/login.php" tabindex="-1" class="menu-item menu-login"><button>Login</button></a>
        <a href="#section-2" tabindex="-1" class="menu-item" @click="${this.scrollToTarget}"><button data-target="section-2">Community</button></a>
        <a href="#section-3" tabindex="-1" class="menu-item" @click="${this.scrollToTarget}"><button data-target="section-3">Features</button></a>
        <a href="#section-4" tabindex="-1" class="menu-item" @click="${this.scrollToTarget}"><button data-target="section-4">Testimonials</button></a>
        <a href="#section-5" tabindex="-1" class="menu-item" @click="${this.scrollToTarget}"><button data-target="section-5">Examples</button></a>
        <a href="#section-6" tabindex="-1" class="menu-item" @click="${this.scrollToTarget}"><button data-target="section-6">About</button></a>
        <a href="#section-7" tabindex="-1" class="menu-item" @click="${this.scrollToTarget}"><button data-target="section-7">FAQ</button></a>
      </div>
    </header>
    <main>
      <page-section id="section-1" full class="section top" filter accent-color="blue" fold scroller scroller-label="Let's learn about HAX" image="${this.image}">
        <h1><span class="text">Create <future-terminal-text white
            glitch class="create">WEBSITES</future-terminal-text></span><div>
              <span class="text">easily with </span><future-terminal-text
            glitch class="hax">HAX</future-terminal-text></div></h1>
        <p class="entice-wrapper"><span class="psu-entice">Part of <strong>Penn State</strong>?</span></p>
        <simple-cta slot="buttons" link="https://hax.psu.edu/login.php" accent-color="blue" dark>Log in</simple-cta>
      </page-section>
      <page-section id="section-2" class="section" scroller scroller-label="By the numbers">
        <div class="section-style-1">
          <h2>What is HAX?</h2>
          <p><strong>A radically simple approach to <em>web authoring</em> and <em>content ownership</em>.</strong></p>
          <p>HAX is built on the premise
            that any and everyone should be able to create rich, engaging content without the need for complex platforms, installations or vendor lock-in.
            The HAX block system allows for sustainable content creation that is easy to click and build for novices while outputting clean, semantic HTML for experts.
          </p>
        </div>
      </page-section>
      <page-section id="section-3" class="section" accent-color="orange">
        <h2>HAX: By the numbers</h2>
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
      </page-section>
      <page-section id="section-4" accent-color="blue" bg="var(--primary-color-2)" filter fold class="section">
        <h2>Who is HAX for?</h2>
        <grid-plate layout="1-1-1" disable-responsive>
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
        <h2>HAX in action</h2>
        <play-list id="examplestemplate" loop></play-list>
      </page-section>
      <page-section id="section-6" class="section">
        <grid-plate layout="1-1" disable-responsive>
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
    </main>
    <footer>
      <div class="footer-inner">
        <div class="footer-logo">
          <a href="https://www.psu.edu" title="Penn State" role="link">
            <img decoding="async" src="https://sites.psu.edu/files/2023/03/Penn-State-Mark.png" alt="Nittany Lion Shield Penn State Mark" class="logo" />
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
            <li class="footer-svg"><img decoding="async" src="https://www.psu.edu/psu-edu-assets/images/shared/we-are-penn-state.svg" alt="We Are Penn State"></li>
          </ul>
        </div>
      </div>
    </footer> 
    `;
  }
}

customElements.define('hax-psu', HaxPsu);
