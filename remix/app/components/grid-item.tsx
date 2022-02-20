import { Image } from "@crystallize/react-image";
import { Link } from "remix";

export const GridItem = ({ cell }) => {
  const getLastItem = (url) => url.substring(url.lastIndexOf("/") + 1);

  let colors = [
    "bg-background1",
    "bg-background2",
    "bg-background3",
    "bg-background4",
    "bg-background5",
  ];
  let bgColor = colors[Math.floor(Math.random() * colors.length)];

  return cell.layout.colspan === 3 ? (
    <Link to={getLastItem(cell.item.path)}>
      <div className="flex relative lg:flex-row flex-col">
        <Image
          {...cell.item.variants[0]?.images[0]}
          className="lg:absolute lg:top-0 lg:bottom-0 lg:right-0  lg:w-8/12 overflow-hidden rounded-r-xl"
        />
        <div className="flex flex-col justify-evenly lg:w-128  px-5 bg-background1 h-80 p-5 rounded-xl w-full lg:items-start items-center">
          <div className="w-60 lg:text-left text-center">
            <h2 className="text-3xl font-bold">{cell.item.name}</h2>
            <p className="mt-4">${cell.item.variants[0]?.price}</p>
          </div>
          <div className="flex gap-1">
            {cell.item.topics?.map((topic) => (
              <div
                className="text-sm bg-grey px-2 py-1 rounded-2xl"
                key={topic.name}
              >
                {topic.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <Link to={getLastItem(cell.item.path)}>
      <div
        className={`flex flex-col ${bgColor} px-5 py-7 rounded-xl lg:h-106 h-full`}
      >
        <div className="flex justify-between items-start">
          <div className="flex gap-1">
            {cell.item.topics?.map((topic) => (
              <div
                className="text-sm bg-grey px-2 py-1 rounded-2xl"
                key={topic.name}
              >
                {topic.name}
              </div>
            ))}
          </div>
          <p className="self-end">${cell.item.variants[0]?.price}</p>
        </div>
        <Image {...cell.item.variants[0]?.images[0]} />
        <h2 className="text-3xl font-bold text-center w-40 m-auto">
          {cell.item.name}
        </h2>
      </div>
    </Link>
  );
};
