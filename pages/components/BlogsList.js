import Blog from "../blog/index.js";

export default function BlogsList() {
  return (
    <>
      <article className="w-full mx-auto bg-[whitesmoke]">
        <Blog showButton={true} />
      </article>
    </>
  );
}
