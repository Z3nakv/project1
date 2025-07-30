import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import { NavLink, useLocation } from "react-router";
import { useAppStore } from "../stores/useAppStore";

function Header() {

    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: ''
    })

    const { pathname } = useLocation();

    const isHome = useMemo(() => pathname === '/', [pathname]);

    const fetchCategories = useAppStore((state) => state.fetchCategories);
    const categories = useAppStore((state) => state.categories);

    useEffect(() => {
        fetchCategories();
    }, []); 

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        console.log('from handle change');
        
        setSearchFilters({
            ...searchFilters,
            [e.target.name]: e.target.value,
        })
    }

  return (
    <header className={isHome ? "bg-[url('/public/bg.jpg')] bg-center bg-cover" : "bg-slate-800"}>

      <div className="container px-5 py-16 mx-auto" >

            <div className="flex justify-between items-center">
                <div className="text-white">
                    <img className="w-32" src="/public/logo.svg" alt="logo" />
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
                </nav>
            </div>

            {
            isHome && 
            <form className="p-10 my-32 space-y-6 bg-orange-400 rounded-lg">
                
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
                        <label htmlFor="input2" className="text-white font-bold uppercase">categoria</label>
                        <select 
                        name="" 
                        id="" 
                        className="w-full mx-0 bg-white border-0 border-gray-300 rounded-lg p-3 focus:outline-none">
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
                className="w-full p-2 font-extrabold text-white uppercase bg-orange-800 rounded-lg cursor-pointer hover:bg-orange-900">
                    buscar recetas
                </button>
            </form>
            }
      </div>

    </header>
  );
}

export default Header;
