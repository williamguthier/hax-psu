import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/play-list/play-list.js";
import "@lrnwebcomponents/grid-plate/grid-plate.js";
import "@lrnwebcomponents/count-up/count-up.js";


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
        color: #1a2b42;
        max-width: 1300px;
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
        padding: 16px;
        background-color: #1a2b42;
      }

      main {
        flex-grow: 1;
        padding: 32px;
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
    `;
  }

  constructor() {
    super();
    this.title = 'HAX @ PSU';
    this.subTitle = 'Content Management System';
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
  }

  render() {
    return html`
      <header>
        <a href="https://psu.edu/"><img src="https://sites.psu.edu/files/2023/03/Penn-State-Mark.png" alt="Penn State Logo" class="logo" /></a>
      </header>
      <main>
        <img src="${this.image}" alt="HAX the web mascot" />
        <h1>${this.title}</h1>
        <h2>${this.subTitle}</h2>
        <p>Build your own website fast, free, forever, with HAX</p>
        <h3>Part of Penn State?</h3>
        <a class="tease-link" href="https://hax.psu.edu/login.php"><button>Start building with HAX</button></a>

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
