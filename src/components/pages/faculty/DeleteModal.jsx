import { useEffect } from "react";
import toast from "react-hot-toast";

function DeleteModal({ setDeleteOpen, dispatch, deleteOpen, index }) {
  const handleDelete = () => {
    dispatch({
      type: "deleteFaculty",
      payload: { id: index },
    });
    toast.success("Faculty deleted successfully.");
    setDeleteOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setDeleteOpen(false);
      }
    };

    if (deleteOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [deleteOpen, setDeleteOpen]);

  return (
    <div>
      <div
        className="bg-[#0000008f] fixed top-0 left-0 w-full h-screen backdrop-blur-[2px] z-10"
        onClick={() => {
          setDeleteOpen(false);
        }}
      ></div>
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-10 flex flex-col gap-5 rounded-md">
        <h3 className="text-2xl">
          Are you sure you want to delete the faculty?
        </h3>

        <div className="flex justify-between">
          <button
            className="text-gray-500 cursor-pointer border-b hover:text-gray-700 transition-all text-xl"
            onClick={() => setDeleteOpen(false)}
          >
            Cancel
          </button>
          <button
            className="text-gray-500 cursor-pointer border-b hover:text-gray-700 transition-all text-xl"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
