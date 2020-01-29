function addData(){
  var contained = document.getElementById("text").value;
  console.log("value to be added: ", contained);
  var codeword = document.getElementById("code").value;
  console.log("code to be added: ", codeword);
  db.collection("data").doc(codeword).set({
    value: contained
  });
}

function getData(){
  var codeworda = document.getElementById("retrieve").value;
  var docRef = db.collection("data").doc(codeworda);

  docRef.get().then(function(doc) {
      if (doc.exists) {
          document.getElementById("given").innerHTML = doc.data().value;
      } else {
          // doc.data() will be undefined in this case
          document.getElementById("given").innerHTML = "No such data!";
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
}
