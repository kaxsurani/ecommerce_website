const BannerSection = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="overflow-hidden rounded-lg">
          <img
            className="hover:scale-125 cursor-pointer transition-transfor size-64 w-10/12"
            src="/flour.jpg"
            alt="banner"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            className=" hover:scale-125 cursor-pointer transition-transform size-64 w-10/12"
            src="/drinks.jpg"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
