import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/play-list/play-list.js";
import "@lrnwebcomponents/grid-plate/grid-plate.js";
import "@lrnwebcomponents/count-up/count-up.js";
import "@lrnwebcomponents/simple-cta/simple-cta.js";
import "@lrnwebcomponents/page-section/page-section.js";
import "@lrnwebcomponents/future-terminal-text/future-terminal-text.js";

export class HaxPsu extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      subTitle: { type: String },
      stats: { type: Object },
      image: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        --hax-psu-square-1: #1a2b42;
        --hax-psu-square-2: #2c3e50;    
        --hax-psu-square-3: #4776b7;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: var(--primary-color-1);
        margin: 0 auto;
        text-align: center;
        background-color: white;
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
        font-family: "Open Sans",Helvetica,Arial,Lucida,sans-serif;
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

      .logo-wrapper a {
        display: block;
      }

      main {
        flex-grow: 1;
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
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
      }

      .section.top {
        text-align: left;
      }
      .section:not(.top) {
        padding: 24px 0;
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
        line-height: 42px;
        font-size: 22px;
      }

      .square {
        color: white;
        width: 300px;
        height: 200px;
        background-color: var(--hax-psu-square-1);
      }

      .square-2 {
        background-color: var(--hax-psu-square-2);
      }

      .square-3 {
        background-color: var(--hax-psu-square-3);  
      }

      future-terminal-text {
        overflow-wrap: break-all;
        line-height: 36px;
        font-size: 18px;
        text-align: left;
        --future-terminal-text-color: white;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'HAX @ PSU';
    this.subTitle = 'What is HAX?';
    this.stats = {};
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
      this.shadowRoot.querySelector('.create').innerHTML = "online courses";
      this.shadowRoot.querySelector('.create')._doGlitch();
    }, 4000);
    setTimeout(() => {
      this.shadowRoot.querySelector('.create').innerHTML = "portfolios";
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
          <a href="https://psu.edu/">
            <img src="https://sites.psu.edu/files/2023/03/Penn-State-Mark.png" alt="Penn State Logo" class="logo" />
          </a>
        </div>
      </header>
      <main>
        <page-section class="section top" filter background-color="blue" accent-color="blue" fold scroller image="${this.image}">
          <h1><span class="text">Create <future-terminal-text white
              glitch class="create">websites</future-terminal-text></span><div>
                <span class="text">easily with </span><future-terminal-text
              glitch class="hax">HAX</future-terminal-text></div></h1>
          <p class="entice-wrapper"><span class="psu-entice">Part of <strong>Penn State</strong>?</span></p>
          <simple-cta slot="buttons" link="https://haxtheweb.org/" accent-color="blue" dark>Log in</simple-cta>
        </page-section>
        <page-section fold scroller class="section">
        <div class="section-style-1">
          <h2>${this.subTitle}</h2>
          <p><strong>A radically simple approach to <em>web authoring</em> and <em>content ownership</em>.</strong></p>
          <p>HAX is built on the premise
            that any and everyone should be able to create rich, engaging content without the need for complex platforms, installations or vendor lock-in.
            The HAX block system allows for sustainable content creation that is easy to click and build for novices while outputting clean, semantic HTML for experts.
          </p>
        </div>
        </page-section>

        <h2>HAX: By the numbers</h2>
        <div class="container">
          <div class="square">
          <count-up end="${this.stats.site_count}"></count-up>
              <h2>${this.stats.site_count} sites</h2>
              <p>Built with HAX</p>
          </div>
          <div class="square square-2">
          <count-up end="${this.stats.user_count}"></count-up>
              <h2>${this.stats.user_count} users</h2>
              <p>Building with HAX</p>
          </div>
          <div class="square square-3">
          <count-up end="${this.stats.total_pages}"></count-up>
              <h2>${this.stats.total_pages} pages</h2>
              <p>of unique content</p>
          </div>
        </div>
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
        <h2>HAX in action</h2>
        <play-list>
          <template>
            <div>Cool content</div>
            <div>more example content</div>
          </template>
        </play-list>
    </main>
    `;
  }
}

customElements.define('hax-psu', HaxPsu);
