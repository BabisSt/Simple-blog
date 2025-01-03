import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * To show nav footer on main pages
 * (value: boolean): This part indicates that the function takes a single argument named value, which must be of type boolean.
 * => void: This indicates that the function does not return any value (void means no return).
 */
interface WelcomePageProps {
  setShowNavFooter: (value: boolean) => void;
}

export default function homePage({ setShowNavFooter }: WelcomePageProps) {

  const navigate = useNavigate(); //redirect to another page


  useEffect(() => {
	setShowNavFooter(true);
  }, []);

  return (
	<div>

	  <h1 className="flex flex-row justify-center pt-5 mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
		<span className="text-transparent bg-clip-text bg-gradient-to-r to-stone-500 from-red-700">
		  Raporto
		</span>
	  </h1>
	  <p className="flex flex-row justify-center text-lg font-normal lg:text-xl text-gray-500">
		cineraporto.gr
	  </p>


	</div>
  );
}