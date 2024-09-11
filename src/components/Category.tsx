import CategoryCart from "./CategoryCart"

const data = [
    {
        id: 0,
        name: "Fresh Fruits",
        count: "9 products",
        img: "/fruits.png"
    },
    {
        id: 1,
        name: "Fresh Vegs",
        count: "8 products",
        img: "/veg.jpg"
    },
    {
        id: 2,
        name: "Canned Goods",
        count: "10 products",
        img: "/cans.jpg"
    },
    {
        id: 3,
        name: "Bread & Bakery",
        count: "12 products",
        img: "/bread.jpg"
    },
    {
        id: 4,
        name: "Fishes",
        count: "10 products",
        img: "/fish.jpg"
    },
    {
        id: 5,
        name: "Eggs & Dairy",
        count: "7 products",
        img: "/eggs.jpg"
    },
    {
        id: 6,
        name: "Soft Drinks",
        count: "5 products",
        img: "/drinks.jpg"
    },
    {
        id: 7,
        name: "Fresh Fruits",
        count: "9 products",
        img: "/fruits.png"
    }
]

const Category = () => {
  return (
    <div className="container pt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((el) => (<CategoryCart key={el.id} img={el.img} name={el.name} count={el.count}/>))}
        </div>
    </div>
  )
}

export default Category