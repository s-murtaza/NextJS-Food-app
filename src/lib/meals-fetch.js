import fs from 'node:fs/promises';

export default async function getMeals(){
    const meals = await fs.readFile('./src/lib/data/available-meals.json', 'utf8');
    return(JSON.parse(meals));
}

