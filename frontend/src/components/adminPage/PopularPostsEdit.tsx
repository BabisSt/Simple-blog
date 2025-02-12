import React, { useState } from "react";

interface PopularPostsEditProps {
	first_link : string,
	second_link : string,
	third_link : string
}

export default function PopularPostsEdit({first_link, second_link, third_link} : PopularPostsEditProps) {
	const [edit, setEdit] = useState(true);
	const [editFirstLink, setEditFirstLink] = useState(first_link);
	const [editSecondLink, setEditSecondLink] = useState(second_link);
	const [editThirdLink, setEditThirdLink] = useState(third_link);
	const handleEdit = () => {
		setEdit(!edit);
	};

	const handleFirstChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setEditFirstLink(e.target.value)
	};
	const handleSecondChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setEditSecondLink(e.target.value)
	};
	const handleThirdChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setEditThirdLink(e.target.value)
	};
	const getInputClass = () => 
		edit === true
		? "bg-gray-50" 
		: "bg-white"
	
		const getButtonClass = () => 
			edit
				? "bg-indigo-500 text-white hover:bg-indigo-600 bg-opacity-100" 
				: "bg-green-500 text-black hover:bg-green-600 bg-opacity-100";
		

  return (
	<div>
		<div className="shadow-md rounded-lg p-4 bg-blue-900 w-full h-[300px]">
		<h3 className="text-lg  text-white font-bold mb-2">📌 Δημοφιλή Άρθρα</h3>
		<div className="shadow-md rounded-lg bg-blue-900 mt-2">
			<textarea onChange={handleFirstChangeInput} 
			className={`${getInputClass} ${"text-center py-2 border-blue-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "}`}
			value={editFirstLink} disabled={edit === true ? true : false} />		
		</div>
		<div className="shadow-md rounded-lg bg-blue-900 mt-2">
			<textarea onChange={handleSecondChangeInput} 
			className={`${getInputClass} ${"text-center py-2 border-blue-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "}`}
			value={editSecondLink} disabled={edit === true ? true : false} />		
		</div>
		<div className="shadow-md rounded-lg bg-blue-900 mt-2">
			<textarea onChange={handleThirdChangeInput} 
			className={`${getInputClass} ${"text-center py-2 border-blue-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "}`}
			value={editThirdLink} disabled={edit === true ? true : false} />		
		</div>
		</div>
		
		<div className="flex justify-center mt-4">
		<button 
			type="button" 
			onClick={handleEdit} 
			className={`${getButtonClass()} py-2 px-6 rounded-lg transition bg-opacity-100`}>
			{edit ? "Επεξεργασία" : "Αποθήκευση" }
		</button>

		</div>
	</div>
  );
}
