import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/play-list/play-list.js";


export class HaxPsu extends LitElement {
  static get properties() {
    return {
      title: { type: String },
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
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      }

      main {
        flex-grow: 1;
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
    this.title = 'HAX Content Management System';
  }

  render() {
    return html`
        <main>
            <h1>${this.title}</h1>
            <button>Start building with HAX</button>
            <div class="container">
              <div class="square">
                  <h2>199 sites</h2>
                  <p>Built with HAX</p>
              </div>
              <div class="square square-2">
                  <h2>143 users</h2>
                  <p>Building with HAX</p>
              </div>
              <div class="square square-3">
                  <h2>7,203 pages</h2>
                  <p>of unique content</p>
              </div>
            </div>
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
