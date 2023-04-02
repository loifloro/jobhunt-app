export function searchJob() {
  let searchInput = document.getElementById("search-input").value;

  if (searchInput == "") {
    searchInput = "Python developer in Manila, Philippines";
  }

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "960880493dmsh2be7fbef2110576p1bd421jsndbcb8244a02b",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  fetch(
    "https://jsearch.p.rapidapi.com/search?query=" +
      searchInput +
      "&page=1&num_pages=1",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      console.log(response.data.length);
      let employerName = document.getElementsByClassName("employer-name");
      let jobDesc = document.getElementsByClassName("job-description");
      let jobTitle = document.getElementsByClassName("job-title");
      let jobCity = document.getElementsByClassName("job-city");
      let employmentType = document.getElementsByClassName("employment-type");
      let jobLink = document.getElementsByClassName("job-link");
      document.getElementById("search-title").innerHTML =
        "Search results for: " + searchInput;

      for (let i = 0; i < response.data.length; i++) {
        employerName[i].innerHTML = response.data[i].employer_name;
        jobDesc[i].innerHTML = response.data[i].job_description;
        jobTitle[i].innerHTML = response.data[i].job_title;
        jobCity[i].innerHTML = response.data[i].job_city;
        employmentType[i].innerHTML = response.data[i].job_employment_type;
        jobLink[i].href = response.data[i].job_apply_link;
      }
    })
    .catch((err) => console.error(err));
}

// response.data[0].employer_name;
// response.data[0].job_description;
// response.data[0].job_title;
// response.data[0].job_city;

// response.data[0].job_employment_type;
// response.data[0].job_apply_link;
