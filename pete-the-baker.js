function isAvailable(recipe, available) {
    for (let key in recipe) {
      if (recipe.hasOwnProperty(key)) {
        if (!(key in available && available[key] >= recipe[key])) {
          return false;
        }
      }
    }
    return true;
  }
  
  function cakes(recipe, available) {
    const isAva = isAvailable(recipe, available);
  
    const cakeCounts = [];
  
    if (isAva) {
      for(let key in recipe) {
        const cakeCount = Math.floor(available[key] / recipe[key]);
        cakeCounts.push(cakeCount)
      }
      return Math.min(...cakeCounts)
    }
    return 0;
  }