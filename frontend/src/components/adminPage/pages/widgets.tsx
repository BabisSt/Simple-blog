import React from "react";

import TrailerOfWeekEdit from "../TrailerOfWeekEdit";
export default function Widgets() {
 
  return (
	<div>
	<h2 className="text-2xl md:text-3xl mb-4 pb-1 font-bold text-gray-900 text-center mt-6">
		Επεξεργασία Widget
	</h2>
		<div className="m-20 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 pt-1">
			<TrailerOfWeekEdit link={"https://www.youtube.com/embed/7xALolZzhSM?si=fqdoM_Cx_CC17UDT"}/>
	
		</div>
	</div>
  );
}
