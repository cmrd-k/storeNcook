export interface Ingredient{
    name: string,
    amount: number,
    unit: string,
}
export interface Recipe{
    author: string, 
    category: string, 
    name: string, 
    ingredients: Ingredient[], 
    instructions: string[], 
    searchTerm : string[],
    dateTs: number
}
export interface RecipeCollection{
    author: string,
    Recipes: Recipe[],
}