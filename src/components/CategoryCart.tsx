interface propsType{
    img: string;
    name: string;
    count: string;
}

const CategoryCart:React.FC<propsType> = ({img,name,count}) => {
  return (
    <div className="border border-gray-200 hover:border-gray-300 cursor-pointer hover:scale-125 transition-transform rounded-lg">
        <div className="flex justify-between items-center p-6">
            <div className="space-y-4">
                <h3 className="font-medium text-xl">{name}</h3>
                <p className="text-gray-500">{count}</p>
            </div>
            <img className="w-[100px] rounded-lg" src={img} alt={name} />
        </div>
    </div>
  )
}

export default CategoryCart