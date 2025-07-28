import { Typography } from "antd";
import { mockBlogs } from "../../../stores/blog.mock";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const BlogListPage = () => {
  const navigate = useNavigate();
  return (
    <div className="p-8 bg-gray-50 d-flex justify-center items-center w-screen">
      <div className="container w-[1120px] mx-auto">
        <Title level={2} className="mb-6 text-blue-700">Top International Destinations</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockBlogs.map(blog => (
            <div
              key={blog.id}
              className="rounded-xl border-2 w-[350px] h-[400px] cursor-pointer border-blue-200 shadow-xl transition-transform duration-200 hover:scale-105 hover:border-blue-400 bg-white/90 overflow-hidden p-0 flex flex-col"
              onClick={() => navigate(`/blogs/${blog.id}`)}
            >
              <div className="relative flex-1 flex flex-col justify-end">
                <img
                  alt={blog.destination}
                  src={blog.images[0]}
                  className="w-full h-full object-cover absolute inset-0 z-0"
                />
                {/* Overlay text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 flex flex-col justify-end p-6">
                  <div className="mb-2 text-left">
                    <span className="text-white text-xl text-left font-bold drop-shadow-lg text-[25px]">
                      {blog.destination}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-white">Explore Packages</span>
                    <span className="text-white text-lg font-bold ">
                      {blog.price.toLocaleString()}₫
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListPage; 