function fetchDataWithCallback(callback) {
  setTimeout(function() {
    let error =Math.random() <0.5;
    try{
        if (error) {
            throw new Error("Failed to fetch");
        } else {
            callback("Data fetched");
        } 
    } catch (err) {
        console.error("Error:", err.message);
    }
  }, 2000);
}
const container = document.getElementById("data-container");
fetchDataWithCallback(function(message) {
    container.textContent = message;
});
