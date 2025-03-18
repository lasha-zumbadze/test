import { useParams } from "react-router";
import useComments from "../../../hooks/useComments";

function Comments() {
  const { id: postId } = useParams();
  const { loadingComments, comments, error } = useComments(postId);

  if (loadingComments) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white pb-6 px-6 flex flex-col gap-3">
      <div className="border-b border-gray-200 py-2 text-sm text-gray-500">
        {comments.length} Comments
      </div>
      {comments.map((comment, i) => (
        <div key={i} className="bg-gray-50 rounded-md p-2">
          <span className="text-blue-500">{comment.email}</span>
          <div className="flex flex-col gap-2 pl-4">
            <h4 className="font-semibold text-gray-800">{comment.name}</h4>
            <p className="text-gray-600 text-justify">{comment.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
