function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      const tableDefs = Array.from(document.getElementsByTagName('td'));
      let searchInput = document.getElementById('searchField').value;

      for (let i = 1; i < tableDefs.length; i++) {
         if (tableDefs[i].parentElement.classList.contains('select')) {
            tableDefs[i].parentElement.classList.remove('select');
         }

      }

      for (let i = 1; i < tableDefs.length; i++) {

         if (tableDefs[i].textContent.includes(searchInput)) {
            tableDefs[i].parentElement.classList.add('select');
            searchInput.value = '';
         }

      }

      if (document.getElementById('searchField').value !== '') {
         document.getElementById('searchField').value = '';
      }

   }
}