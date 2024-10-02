
import getMeals from "@/lib/meals-fetch";
import MealCategory from "@/components/meal-category";
import CartModal from "@/components/cart";
import CheckoutModal from "@/components/checkout";

export default async function Home() {
  const meals = await getMeals();
  const {appetizers, main_courses, desserts, drinks} = meals;
  return (
      <main >
        <MealCategory category={'Appetizers'} categoryItems={appetizers}/>
        <MealCategory category={'Main Courses'} categoryItems={main_courses}/>
        <MealCategory category={'Desserts'} categoryItems={desserts}/>
        <MealCategory category={'drinks'} categoryItems={drinks}/>
      </main>
  );
}
