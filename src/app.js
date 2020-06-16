import "./css/main.css";
import "./css/normalize.css";
import "./scss/app.scss";
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import 'regenerator-runtime';
import './js/vendor/modernizr-3.7.1.min.js';
import "./js/plugins.js";
import "./js/components/image-figure.js";
import "./js/components/search-bar";
import "./js/components/album-item";
import funcs from "./js/main.js";

funcs.main();
document.addEventListener("DOMContentLoaded", funcs);
