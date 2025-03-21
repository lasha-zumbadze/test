import { usePostContext } from "../../context/PostContext";

function Pagination() {
  const { page, totalPage, setPage } = usePostContext();

  return (
    <div className="flex items-center justify-between py-8">
      <button
        className={`border border-gray-300 w-28 py-1.5 text-blue-500 bg-white rounded-md text-lg transition-all ${
          page <= 1
            ? "cursor-not-allowed"
            : "cursor-pointer hover:-translate-y-0.5 hover:shadow-md"
        }`}
        onClick={() => {
          setPage((prev) => (prev > 1 ? prev - 1 : prev));
        }}
        disabled={page <= 1}
      >
        Previous
      </button>

      <div className="text-gray-500 text-lg text-center hidden md:block">
        {page >= totalPage ? "Last Page" : `Page ${page} of ${totalPage}`}
      </div>

      <button
        className={`border border-gray-300 w-28 py-1.5 text-blue-500 bg-white rounded-md text-lg transition-all ${
          page >= totalPage
            ? "cursor-not-allowed"
            : "cursor-pointer hover:-translate-y-0.5 hover:shadow-md"
        }`}
        onClick={() => {
          setPage((prev) => (prev < totalPage ? prev + 1 : prev));
        }}
        disabled={page >= totalPage}
      >
        next
      </button>
    </div>
  );
}

export default Pagination;
