export default function ImgnTitle({ dataUrl, title }) {
  return (
    <>
      <div className="m-auto">
        <img
          className="mt-2"
          src={dataUrl}
          width={300}
          height={300}
          alt={title}
        />
        <h1 className="mt-3 text-l">{title}</h1>
      </div>
    </>
  );
}
