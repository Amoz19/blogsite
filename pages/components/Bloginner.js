import { useState } from "react";
import Button from "./button";
import Ed from "./adminDashboard/edit&delete";
import ImgnTitle from "./adminDashboard/image&title";
import CreateDate from "./CreateDate";

export default function BlogInner({
  id,
  url,
  title,
  description,
  showButton,
  showAdminDash,
  createdTime,
}) {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore((prevState) => !prevState);
  };

  return (
    <div
      key={id}
      className="mx-auto border-b border-slate-300 pb-4 mb-2 grid place-content-center"
    >
      {/* <div> */}
      <ImgnTitle dataUrl={url} title={title} />
      {/* <div className="absolute bg-blue-400 text-white">
          
        </div> */}
      {/* </div> */}
      <div className="flex justify-between items-center">
        {showButton && <Button id={id} />}
        {showButton && <CreateDate createdTime={createdTime} format="md" />}
      </div>

      {showAdminDash && (
        <div className="w-4/5 m-auto">
          {description && (
            <div className="flex">
              <p
                dangerouslySetInnerHTML={{
                  __html: showMore
                    ? description
                    : description.slice(0, 5) + "...",
                }}
                onClick={toggleShowMore}
              ></p>
            </div>
          )}
          <Ed id={id} title={title} description={description} />
        </div>
      )}
    </div>
  );
}
