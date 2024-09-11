interface propsType{
    size: string;
}

const CartCountBadge:React.FC<propsType> = ({size}) => {
  return (
    <div className={`absolute bg-red-600 text-white ${size} -right-3 -top-1 rounded-full flex justify-center`}>3</div>
  )
}

export default CartCountBadge