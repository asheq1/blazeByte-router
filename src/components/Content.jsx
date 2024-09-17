import { useLoaderData } from "react-router-dom";
import placeholderImage from "../assets/404.jpg"

const Content = () => {
    const blog = useLoaderData()
    const {cover_image, title, description, published_at, id, tags} = blog;

    return (
        <div 
            to={`/blog/${id}`}
            rel="noopener noreferrer" href="#" 
            className=" mx-auto group p-2 hover:no-underline
             border border-opacity-30 focus:no-underline dark:bg-gray-50">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" 
                src={cover_image || placeholderImage} />
            <div>
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                    {
                        tags.map((tag, idx) => <a 
                            key={idx}
                            rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm 
                        hover:underline dark:bg-violet-600 dark:text-gray-50">
                        #{tag}</a>)
                    }
                </div>
            </div>
            
           
        </div>
    );
};

export default Content;