let protection = "OFF"

function funPretraga(){
   for (let i = 0; i < 6; i++) {
      document.getElementById("myData" + String(i+1)).innerHTML = ""
   }
   const id = document.getElementById("pretraga").value;
   if (protection == "OFF"){
      console.log(protection)
      axios.post(window.location.protocol + "/sqlInjection/podaci", {id:id})
      .then((result) => {
      for (let i = 0; i < result.data.length; i++) {
         document.getElementById("myData" + String(i+1)).innerHTML = JSON.stringify(result.data[i])
      }
      
      })
      .catch((err) => console.log(err))
   }
   else {

      console.log(protection)
      if(!isNaN(id)) {
         axios.post(window.location.protocol + "/sqlInjection/podaci", {id:id})
         .then((result) => {
            for (let i = 0; i < result.data.length; i++) {
               document.getElementById("myData" + String(i+1)).innerHTML = JSON.stringify(result.data[i])
            }
         })
         .catch((err) => {
            console.log(err)
         })
      } else {
         document.getElementById("myData1").innerHTML = "WRONG INPUT!"
      }
   }

};

function turnItOn() {
   if(document.getElementById("switch1").checked) {
      document.getElementById("message").textContent = "Protected"
      protection = "ON"
   }
   else {
      document.getElementById("message").textContent = "Unprotected"
      protection = "OFF"
   }
}

