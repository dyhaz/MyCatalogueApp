import DataSource from "./data/data-source";
import * as bootbox from "bootbox";

const funcs = {
  main() {
    const getItem = () => {
      DataSource.getAnime().then(val => {
        console.log(val);
        funcs.renderAll(val.top);
      });
    };


    const insert = (item) => {
      // tuliskan kode di sini!
    };

    const update = (item) => {
      // tuliskan kode di sini!
    };

    const remove = (itemId) => {
      // tuliskan kode di sini!
    };


    document.addEventListener("DOMContentLoaded", () => {
      getItem();
    });
  },
  renderAll(items) {
    const listEl = document.querySelector("#list-item");
    let itemContent = "";
    listEl.innerHTML = "";
    listEl.innerHTML += `<div class="row pt-5"></div>`;

    items.forEach((v, k) => {
      if (k === 0 || k % 3 === 0) {
        itemContent += `<div class="row">`;
      }

      itemContent += `
                  <div class="col-md-4">
                    <album-item text="${v.title}" image="${v.image_url}" score="${v.score}" episodes="${v.episodes}" rated="${v.rated}"></album-item>
                  </div>
              `;

      if (k + 1 === items.length || (k + 1) % 3 === 0) {
        itemContent += `</div>`;
      }
    });

    listEl.innerHTML += itemContent;

    const buttons = document.querySelectorAll(".btn-view");
    buttons.forEach((button, key) => {
      button.addEventListener("click", event => {
        funcs.detail(items[key]);
      })
    })
  },
  detail(item) {
    let dialog = bootbox.dialog({
      message: '<div class="text-center"><i class="fa fa-spin fa-spinner"></i> Loading...</div>',
      closeButton: false
    }).on('shown.bs.modal', function () {
      DataSource.getAnimeDetail(item.mal_id).then(val => {
        console.log(val);
        val.synopsis = typeof val.synopsis === 'undefined' ? item.title : val.synopsis;
        let dialog = bootbox.dialog({
          title: item.title,
          message: `<div class="item-description">${val.trailer_url != null ? '<iframe width="100%" height="315" src="' + val.trailer_url + '">' +
            '</iframe>' : ''}<p class="mt-3">${val.synopsis.substr(0, 700)}&nbsp;${val.synopsis.length > 700 ? '' +
            '<a href="' + val.url + '">Read More</a>' : ''}</p></div>`,
          size: 'large',
          buttons: {
            cancel: {
              label: "Close",
              className: 'btn-danger',
              callback: function () {
                console.log('Custom cancel clicked');
              }
            },
            // noclose: {
            //   label: "I don't close the modal!",
            //   className: 'btn-warning',
            //   callback: function(){
            //     console.log('Custom button clicked');
            //     return false;
            //   }
            // },
            // ok: {
            //   label: "I'm an OK button!",
            //   className: 'btn-info',
            //   callback: function(){
            //     console.log('Custom OK clicked');
            //   }
            // }
          }
        });
      }, (error) => {
        bootbox.alert("An error occurred")
      }).finally(() => {
        bootbox.hideAll();
      });
    });
  }
};

export default funcs;
