import React from "react";
import { useLoaderData } from "react-router";
import Blog from "../../pages/Blog/Blog";

const Blogs = () => {
	const blogdata = useLoaderData();
	console.log(blogdata);

	return (
		<div className="bg-base-200 min-h-screen py-10">
			{" "}
			{/* Light background for page */}
			<h1 className="text-3xl font-bold text-center mb-8">Blogs</h1>
			<div className="flex flex-col gap-6 max-w-7xl rounded-full mx-auto px-4">
				{blogdata.map((blog) => (
					<div className="bg-white p-6 rounded-md shadow-md" key={blog.id}>
						<Blog blog={blog} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Blogs;
