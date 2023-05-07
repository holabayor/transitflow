const ListItem = ({ list }) => (
  <ul className="">
    {list.map((item, index) => (
      <li
        key={index}
        className="flex items-center font-semibold text-[12px] gap-4 mb-2"
      >
        <img
          src={item.img}
          alt={item.name}
          className="w-[30px] object-contain"
        />
        {item.name}
      </li>
    ))}
  </ul>
);

export default ListItem;
