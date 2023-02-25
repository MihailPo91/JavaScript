function distanceIsValid(x1, y1, x2, y2) {
    // Calculate the distances between the points and the origin using the distance formula
    const d1 = Math.sqrt(x1*x1 + y1*y1);
    const d2 = Math.sqrt(x2*x2 + y2*y2);
    const d3 = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
    
    // Check if each distance is an integer
    const isValid1 = Number.isInteger(d1);
    const isValid2 = Number.isInteger(d2);
    const isValid3 = Number.isInteger(d3);
    
    // Print the results for each comparison
    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid1 ? 'valid' : 'invalid'}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid2 ? 'valid' : 'invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid3 ? 'valid' : 'invalid'}`);
  }


  distanceIsValid(2, 1, 1, 1);