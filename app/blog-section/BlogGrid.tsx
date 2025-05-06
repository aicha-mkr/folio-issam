import BlogCard from "./BlogCard";
import { blogDetails } from "./blogDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";

const Blog = () => {
  return (
    <section className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-32">
    
      <div className="lg:w- [850px] grid w-[90%] max-w-[1200px] grid-cols-1 grid-rows-3 place-content-center place-items-center gap-x-6 gap-y-6 sm:grid-rows-2 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-1">
        {blogDetails.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog.title}
              image={blog.image}
              url={blog.url}
              date={blog.date}
              available={blog.available}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
