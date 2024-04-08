const firebaseConfig = {
    apiKey: "AIzaSyA1G7oqHxNw1_Nvc_9-GV8QGVn73POIC04",
    authDomain: "notificationdb-5f3b0.firebaseapp.com",
    databaseURL: "https://notificationdb-5f3b0-default-rtdb.firebaseio.com",
    projectId: "notificationdb-5f3b0",
    storageBucket: "notificationdb-5f3b0.appspot.com",
    messagingSenderId: "486927644741",
    appId: "1:486927644741:web:26d81d50d229f4f72c4b2c"
  };


  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //created reference for database
   var  notificationdbDB =  firebase.database().ref('notificationdb');
   document.getElementById('notificationdb').addEventListener('submit',submitForm);

   function submitForm(e) 
   {
    e.preventDefault();
    
    var bidamt = getElementVal('bidamt')

    saveMessages(bidamt);

    document.querySelector(".alert").style.display = "block";

   // remove the alert
    setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
    }, 3000);

    // to reset the form
     document.getElementById("notificationdb").reset();

   }

    const saveMessages = (bidamt) =>{
        var newnotificationdb =  notificationdbDB.push();

        newnotificationdb.set({
            bidamt : bidamt,

        })
    }
    
    
   
    
    const getElementVal = (id) => {
    return document.getElementById(id).value;
    };

