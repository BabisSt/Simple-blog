import React from "react";

import TrailerOfWeekEdit from "../TrailerOfWeekEdit";
import SoundtrackOfMonthEdit from "../SoundtrackOfMonthEdit";
import PinnedPostEdit from "../PinnedPostEdit";
import PopularPostsEdit from "../PopularPostsEdit";
import CarouselEdit from "../CarouselEdit";
export default function Widgets() {
 
  return (
	<div>
	<h2 className=" mx-20 text-2xl md:text-3xl mb-4 pb-1 w-auto font-bold text-gray-900 text-center mt-6 border-b-4 border-blue-900 rounded-lg">
		Επεξεργασία Widget
	</h2>
		<div className="sm:m-20 m-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 pt-1">
			<PinnedPostEdit link={"http://localhost:5173/post/1"}/>
			<TrailerOfWeekEdit link={"https://www.youtube.com/embed/7xALolZzhSM?si=fqdoM_Cx_CC17UDT"}/>
			<SoundtrackOfMonthEdit link={"https://www.youtube.com/embed/7xALolZzhSM?si=fqdoM_Cx_CC17UDT"}/>
			<PopularPostsEdit first_link={"https://www.youtube.com/embed/7xALolZzhSM?si=fqdoM_Cx_CC17UDT"}
				second_link={"https://www.youtube.com/embed/7xALolZzhSM?si=fqdoM_Cx_CC17UDT"}
				third_link={"https://www.youtube.com/embed/7xALolZzhSM?si=fqdoM_Cx_CC17UDT"}
			/>
			<CarouselEdit first_link={"https://www.youtube.com/embed/7xALolZzhSM?si=fqdoM_Cx_CC17UDT"}
				second_link={"https://www.youtube.com/embed/7xALolZzhSM?si=fqdoM_Cx_CC17UDT"}
				third_link={"https://www.youtube.com/embed/7xALolZzhSM?si=fqdoM_Cx_CC17UDT"}
				forth_link={"https://www.youtube.com/embed/7xALolZzhSM?si=fqdoM_Cx_CC17UDT"}
			/>
		</div>
	</div>
  );
}
