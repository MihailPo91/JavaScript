function create(words) {
   const targetDiv = document.getElementById('content');

   words.forEach(element => {
      
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.style.display = 'none';
      p.textContent = element;
      div.appendChild(p); 
     
      targetDiv.appendChild(div);

      div.addEventListener('click', () => { p.style.display = 'block' })
   });
}