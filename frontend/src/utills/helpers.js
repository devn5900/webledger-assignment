
export const queryMaker=(query)=>{
    const queryString= Object.keys(query).map((key)=>{
        return `${key}=${query[key]}`
    }).join("&")
    return queryString;
}

export const sortBy = [
    "popularity",
    "healthiness",
    "price",
    "time",
    "random",
    "max-used-ingredients",
    "min-missing-ingredients",
    "alcohol",
    "caffeine",
    "copper",
    "energy",
    "calories",
    "calcium",
    "carbohydrates",
    "carbs",
    "choline"
  ];
  