import BlogCard from "./components/BlogCard";

const data = [
  {
    img: "/cut_fruits.jpg",
    title: "Healthy Food Healthy Life",
    date: "sep 10, 2024",
    comment: 8,
  },
  {
    img: "/helthy.jpg",
    title: "Healthy Food Healthy Life",
    date: "sep 11, 2024",
    comment: 1,
  },
  {
    img: "/liqvid.jpg",
    title: "Healthy Food Healthy Life",
    date: "sep 13, 2024",
    comment: 6,
  },
];

const BlogSection = () => {
  return (
    <div className="container pt-16">
      <h2 className="font-bold text-2xl">Latest News</h2>
      <p className="text-gray-500">
        Present posts in a best way to highlight interesting moments of your
        blog.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((el) => (
          <BlogCard
            key={el.date}
            img={el.img}
            title={el.title}
            date={el.date}
            comment={el.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
