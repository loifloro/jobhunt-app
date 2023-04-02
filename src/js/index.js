import "../main.scss";
import "bootstrap";
import { searchJob } from "./searchJob";

const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  searchJob();
});

window.addEventListener("load", () => {
  searchJob();
});
