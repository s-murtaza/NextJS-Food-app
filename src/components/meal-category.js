import MealItem from "@/components/meal-items";

export default function MealCategory({ category, categoryItems }) {
  return (
    <div id={category}>
      <h1 className="text-center tracking-widest font-2xl font-light mt-16 mb-4 text-yellow-500">{category}</h1>
      <ul id="meals">
        {categoryItems &&
          categoryItems.map((meal) => (
            <MealItem key={meal.id} currentMeal={meal} />
          ))}
      </ul>
    </div>
  );
}
