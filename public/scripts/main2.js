function turnItOn2() {
   if(document.getElementById("switch2").checked) {
      document.getElementById("message2").textContent = "Protected"
      if (document.getElementById("link-button")) {
         document.getElementById("link-button").href = "/brokenaccess/adminpageprotected?user=admin"
         console.log(document.getElementById("link-button").href)
      }
      else {
         document.getElementById("link-button-user").href = "/brokenaccess/adminpageprotected?user=user"
         console.log(document.getElementById("link-button-user").href)
      }
   }
   else {
      document.getElementById("message2").textContent = "Unprotected"
      if (document.getElementById("link-button")) {
         document.getElementById("link-button").href = "/brokenaccess/adminpage?user=admin"
         console.log(document.getElementById("link-button").href)
      }
      else {
         document.getElementById("link-button-user").href = "/brokenaccess/adminpage?user=user"
         console.log(document.getElementById("link-button-user").href)
      }
   }
}