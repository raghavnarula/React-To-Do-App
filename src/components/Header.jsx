
const Header = ({text,bg,count}) => {
  return (
    
      <div className={`${bg} flex flex-row gap-2 pl-4 rounded-md uppercase text-white py-2`}>
        {text}
        <div className="rounded-full px-1 justify-center items-center flex text-black bg-white">
        {count}
        </div>
      </div>
  )
}

export default Header