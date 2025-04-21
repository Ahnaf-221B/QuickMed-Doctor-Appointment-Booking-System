import React from "react";
import { LuCalendarHeart } from "react-icons/lu";
const Blog = ({ blog }) => {
	const { question, answer, added_at } = blog;

	return (
		<div className="w-full">
			<div className="  ">
				<div className="font-semibold mb-6 pb-4 border-b-2 border-dashed text-lg border-[#0F0F0F20]">
					{question}
				</div>
				<div className="text-sm mb-6 pb-4 border-b-2 border-dashed border-[#0F0F0F20]">
					{answer}
				</div>
				<div className="text-md  text-gray-500 mt- flex items-center gap-2 ">
					<LuCalendarHeart size={20} /><span>Added at</span>
					{added_at}
				</div>
			</div>
		</div>
	);
};

export default Blog;
