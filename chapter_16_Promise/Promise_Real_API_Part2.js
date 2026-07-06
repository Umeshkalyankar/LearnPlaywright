let apiCall = new Promise(function (resolve, reject) {
    reject("500 eroor")
});

apiCall.then(function (data) {
    console.log("Success or Resolve");
}).catch(function (error) {
    console.log(error)
});

// .catch - only runs when promise is rejected &
// .then - will completely skipped in this case