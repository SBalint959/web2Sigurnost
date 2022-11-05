function funPretraga(){
   const id = document.getElementById("pretraga").value;
   console.log(id)
   axios.post(window.location.protocol + "/sqlInjection/podaci", {id:id})
   .then((result) => {
   for (let i = 0; i < result.data.length; i++) {
      document.getElementById("myData" + String(i+1)).innerHTML = JSON.stringify(result.data[i])
   }
   
   })
   .catch((err) => console.log(err))

};

