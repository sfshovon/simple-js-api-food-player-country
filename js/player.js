const searchPlayer= async () => {
  const searchField = document.getElementById('player-search-field');
  const searchText = searchField.value;
  if(searchText == ''){
    alert("Invalid Input! Write something to display");
  }
  else{
    const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchText}`;
    const response = await fetch(url);
    const data = await response.json();
    displayPlayers(data.player);
  }  
}
//Press Enter to Search
document.getElementById("player-search-field")
  .addEventListener("keyup", function(e) {
  e.preventDefault();
  if((e.key == "Enter" && e.value != "")) {
    document.getElementById("searchPlayerBtn").click();
  }
});
const displayPlayers = players => {
  const searchResult =document.getElementById('player-search-result');
  searchResult.textContent = '';
    players.forEach(player => {
      const div = document.createElement('div');
        div.innerHTML = 
        `<div class="card w-96 bg-base-100 shadow-xl md:w-80 sm:w-48">
          <figure>
            <img src=${player.strThumb} class="rounded-xl h-56 w-96" alt="Player Image" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-2xl font-bold inline-block">${player.strPlayer}</h2>
            <h2 class="text-xl font-semibold">National Team: ${player.strTeam2}</h2>
            <h2 class="text-xl font-semibold">Club: ${player.strTeam}</h2>
            <h2 class="text-xl font-semibold">Date of Birth: ${player.dateBorn}</h2>
            <h2 class="text-xl font-semibold">Position: ${player.strPosition}</h2>
            <h2 class="text-xl font-semibold">Weight: ${player.strWeight}</h2>
          </div>
         </div>
        `;
    searchResult.appendChild(div);
  }) 
}

