window.addEventListener("DOMContentLoaded", () => {
    function req() {
      const request = new XMLHttpRequest();
      request.open("GET", "http://localhost:3000/people");
      //run npx json-server db.json (data file)
      request.setRequestHeader("Content-type", "application/json; charset=utf-8");
      request.send();
  
      request.addEventListener("load", function() {
        if (request.readyState === 4) {
          let data = JSON.parse(request.response);
          console.log(data);
  
          data.forEach(item => {
            let card = document.createElement("div");
            card.classList.add("card");
            
            let icon;
            if (item.sex === "male") {
              icon = "icons/mars.png";
            } else {
              icon = "icons/female.png";
            }
            
            card.innerHTML = `
              <img src="${item.photo}" alt="photo">
              <div class="name">${item.name} ${item.surname}</div>
              <div class="sex">
                <img src=${icon} alt="sex">
              </div>
              <div class="age">${item.age}</div>
            `; 
            document.querySelector(".app").appendChild(card);
          });
        } else {
          console.error("Something went wrong");
        }
      });
    }
    document.querySelector("button").addEventListener("click", req, {"once": true}); //an option where the loading happens on a single click
  });