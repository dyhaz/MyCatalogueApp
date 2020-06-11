class SearchBar extends HTMLElement {

  connectedCallback() {
    this.placeholder = this.getAttribute("placeholder") || "Search";

    this.innerHTML = `
    <div class="md-form mt-0">
        <input class="form-control" type="text" placeholder="${this.placeholder}" aria-label="Search">
     </div>
   `;
  }
}

customElements.define("search-bar", SearchBar);
