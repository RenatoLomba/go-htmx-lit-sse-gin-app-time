import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("timing-controls")
export class Controls extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  render() {
    console.log(this.children);
    return html`teste`;
  }
}
