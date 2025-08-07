import { type JSX } from "react";
import { useAppStore } from "../stores/useAppStore";
import type { Recipe } from "../types";
import Skeleton from "../skeleton/Skeleton";

function Modal() {
  const modal = useAppStore((state) => state.modal);
  const selectedRecipe = useAppStore((state) => state.selectedRecipe);
  const closeModal = useAppStore((state) => state.closeModal);
  const favoriteExists = useAppStore((state) => state.favoriteExists);
  const handleClickFavorites = useAppStore(
    (state) => state.handleClickFavorites
  );

  const renderIngredients = () => {
    const ingredients: JSX.Element[] = [];
    for (let i = 1; i <= 6; i++) {
      const ingredient = selectedRecipe[`strIngredient${i}` as keyof Recipe];
      const measure = selectedRecipe[`strMeasure${i}` as keyof Recipe];
      if (ingredient && measure) {
        ingredients.push(
          <li key={i} className="text-lg font-normal">
            {ingredient} - {measure}
          </li>
        );
      }

    }
    return ingredients;
  };


  return (
    modal && (
      <>
        <div
          className="fixed inset-0 bg-black opacity-75 flex items-center justify-center"
          onClick={closeModal}
        ></div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center p-6 px-8 bg-white rounded-lg shadow-lg h-max sm:w-96 md:w-128 w-98">
          <div
            className="absolute text-black text-lg font-bold top-2 right-4 cursor-pointer"
            onClick={closeModal}
          >
            X
          </div>
          <div className="flex flex-col items-center justify-center">
            {
              selectedRecipe.strDrinkThumb 
              ?
              <img
              src={selectedRecipe.strDrinkThumb}
              alt={selectedRecipe.strDrink}
              className="h-100 w-90 object-cover rounded-lg mb-2"/>
              : <Skeleton design="h-110 w-80 mb-2 bg-gray-300 rounded-lg" />
            }
            {
              selectedRecipe.strDrink 
              ? <h2 className="text-2xl font-bold mb-2">
                  {selectedRecipe.strDrink}
                </h2>
              : <Skeleton design="h-8 w-90 mb-2 bg-gray-300 rounded-lg" />
            }
            <h3 className="text-lg font-semibold underline">
              Ingredients and Measures
            </h3>
            {
              selectedRecipe.strIngredient1 
              ?
              <ul className="list-disc list-inside mt-2">
              {renderIngredients()}
            </ul>
            :
            <>
              <Skeleton design="h-4 w-50 mb-2 bg-gray-300 rounded-lg" />
              <Skeleton design="h-4 w-50 mb-2 bg-gray-300 rounded-lg" />
              <Skeleton design="h-4 w-50 mb-2 bg-gray-300 rounded-lg" />
              <Skeleton design="h-4 w-50 mb-2 bg-gray-300 rounded-lg" />
            </>
            }
            {
              selectedRecipe.strInstructions 
              ? <p className="text-gray-700 text-lg">
                  {selectedRecipe.strInstructions}
                </p>
              : <Skeleton design="h-4 w-80 mb-2 bg-gray-300 rounded-lg" />
            }
            <button
              className="bg-orange-500 mt-4 text-white py-2 px-4 rounded cursor-pointer hover:bg-orange-600"
              onClick={() => handleClickFavorites(selectedRecipe)}
            >
              {favoriteExists(selectedRecipe.idDrink)
                ? "Remove from Favorites"
                : "Add to Favorites"}
            </button>
          </div>
        </div>
      </>
    )
  );
}

export default Modal;
