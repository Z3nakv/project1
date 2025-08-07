import { useMemo, useState, type ChangeEvent } from "react";
import { NavLink, useLocation } from "react-router";
import { useAppStore } from "../stores/useAppStore";

function Header() {

    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: ''
    })

    const { pathname } = useLocation();

    const isHome = useMemo(() => pathname === '/', [pathname]);

    const categories = useAppStore((state) => state.categories);
    const searchRecipes = useAppStore((state) => state.searchRecipes);
    const showNotification = useAppStore((state) => state.showNotification);


    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        
        setSearchFilters({
            ...searchFilters,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(Object.values(searchFilters).includes('')) {
            showNotification({
                text: 'Debe ingresar un ingrediente y seleccionar una categoría',
                error: true
            });
            return;
        }
        searchRecipes(searchFilters)
    }

  return (
    <header className={isHome ? "bg-[url('/bg.jpg')] bg-center bg-cover" : "bg-slate-800"}>

      <div className="container px-5 py-16 mx-auto" >

            <div className="flex justify-between items-center">
                <div className="text-white">
                    <img className="w-32" src="/logo.svg" alt="logo" />
                </div>
                
                <nav className="flex space-x-4 text-white uppercase font-bold">
                    <NavLink 
                    to={'/'}
                    className={({ isActive }) => 
                    isActive 
                    ? 'text-orange-500 uppercase font-bold' 
                    : 'text-white uppercase font-bold'
                }
                    >
                        inicio
                    </NavLink>
                    <NavLink 
                    to={'/favoritos'}
                    className={({ isActive }) => 
                    isActive 
                    ? 'text-orange-500 uppercase font-bold' 
                    : 'text-white uppercase font-bold'
                    }
                    >
                        favoritos
                    </NavLink>
                    <NavLink 
                    to={'/generate'}
                    className={({ isActive }) => 
                    isActive 
                    ? 'text-orange-500 uppercase font-bold' 
                    : 'text-white uppercase font-bold'
                    }
                    >
                        Generar con AI
                    </NavLink>
                </nav>
            </div>

            {
            isHome && 
            <form 
            className="p-10 my-32 space-y-6 bg-orange-400 rounded-lg shadow md:w-1/2 2xl:w-1/3"
            onSubmit={handleSubmit}
            >
                
                    <div className="space-y-4">
                        <label 
                        htmlFor="ingredient" 
                        className="text-white font-bold uppercase">nombre o ingredientes</label>
                        <input 
                        type="text" 
                        id="ingredient"
                        name="ingredient"
                        className="w-full mx-0 bg-white border-0 border-gray-300 rounded-lg p-3 focus:outline-none" 
                        placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Café"
                        onChange={handleChange}
                        value={searchFilters.ingredient}
                        />
                    </div>

                    <div className="space-y-4">
                        <label htmlFor="category" className="text-white font-bold uppercase">categoria</label>
                        <select 
                        name="category" 
                        id="category" 
                        className="w-full mx-0 bg-white border-0 border-gray-300 rounded-lg p-3 focus:outline-none"
                        onChange={handleChange}
                        // value={searchFilters.category}
                        >
                            <option value="">--seleccione--</option>
                            {categories.drinks.map((category) => (
                                <option 
                                key={category.strCategory} 
                                value={category.strCategory}>
                                    {category.strCategory}
                                </option>
                            ))}
                        </select>
                    </div>
                
                <button 
                className="w-full p-2 font-extrabold text-white uppercase bg-orange-800 rounded-lg cursor-pointer hover:bg-orange-900"
                >
                    buscar recetas
                </button>
            </form>
            }
      </div>

    </header>
  );
}

export default Header;
