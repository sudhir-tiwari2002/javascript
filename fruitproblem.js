fruit =["orange","mango","banana","guvava"];
n=fruit.length

 if (fruit.length === 1) {
    console.log(`All ${fruit[0]}`);
  } else {
    // const lastFruit = fruit[n-1];
    const lastFruit =fruit.pop()
    const secondLastFruit = fruit.slice(n-2)
    
    console.log(`All ${fruit.join(', ')}  & ${lastFruit}`);
  }

