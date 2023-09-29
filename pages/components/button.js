import Link from "next/link";

export default function Button({ id }) {
  return (
    <div className="w-4/5 mx-auto mt-3">
      <Link
        href={`/blog/${id}`}
        className="bg-blue-800 w-24 px-5 py-1 h-7 text-white rounded-sm"
      >
        ဆက်ဗဵု
      </Link>
    </div>
  );
}
