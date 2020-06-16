import "bootbox";
import * as bootbox from "bootbox";
import DataSource from "../data/data-source";
import funcs from "../main.js";

class SearchBar extends HTMLElement {

  search(text) {
    let dialog = bootbox.dialog({
      message: '<div class="text-center"><i class="fa fa-spin fa-spinner"></i> Loading...</div>',
      closeButton: false
    }).on('shown.bs.modal', function(){
      DataSource.searchAnime(text).then((result) => {
        console.log(result);
        funcs.renderAll(result);
      }, (error) => {
        bootbox.alert("An error occurred")
      }).finally(() => {
        bootbox.hideAll();
      });
    });

    return false;
  }

  connectedCallback() {
    this.placeholder = this.getAttribute("placeholder") || "search for anime, e.g Naruto";

    this.innerHTML = `
    <form class="form-inline d-flex justify-content-center md-form form-sm mt-2" onsubmit="return this.parentElement.search(this.searchbox.value)">
        <i class="fas fa-search" aria-hidden="true"></i>
        <input class="form-control form-control-sm ml-3 mr-3 w-75" id="searchbox" type="text" placeholder="${this.placeholder}" aria-label="Search">
        <button class="btn btn-primary btn-rounded btn-sm my-0" type="submit">Go</button>
     </form>
   `;
  }

}

customElements.define("search-bar", SearchBar);
