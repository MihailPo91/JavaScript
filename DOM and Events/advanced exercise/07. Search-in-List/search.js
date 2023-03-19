function search() {
   const searchText = document.getElementById('searchText').value;
   const result = document.getElementById('result');
   const liElements = Array.from(document.getElementsByTagName('li'));

   let modifiedNumber = 0;

   for (const li of liElements) {
      if (li.textContent.includes(searchText)) {
         li.style.textDecoration = 'underline';
         li.style.fontWeight = 'bold';
         console.log(li.textContent);
         modifiedNumber++;
      }
   }
   result.textContent = `${modifiedNumber} matches found`;
}
