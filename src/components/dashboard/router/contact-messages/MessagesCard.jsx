const MessagesCard = ({ message, messageId }) => {
  return (
    <div className="text-start w-full">
      <div className="text-sm  flex justify-between font-semibold text-gray-900">
        {message.email}
        <span>{message.phone}</span>
      </div>
      <div
        className={`mt-1 text-sm text-gray-700 ${messageId !== message._id && "line-clamp-2"}  md:line-clamp-2`}
      >
        {message.message}
      </div>
      <div className="mt-2 text-xs text-gray-500">
        {new Date(message.createdAt).toLocaleString()}
      </div>
    </div>
  );
};
export default MessagesCard;
