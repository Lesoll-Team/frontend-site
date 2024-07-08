const BodyMessage = ({ messageSelected }) => {
  return messageSelected.email ? (
    <div>
      <h2 className="text-xl font-bold mb-4">Message Details</h2>
      <p className="mb-2">
        <strong>Email:</strong> {messageSelected.email}
      </p>
      <p className="mb-2">
        <strong>Phone:</strong> {messageSelected.phone}
      </p>
      <p className="mb-2">
        <strong>Subject:</strong> {messageSelected.subject}
      </p>
      <p className="mb-4">
        <strong>Message:</strong> {messageSelected.message}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Created At:</strong>{" "}
        {new Date(messageSelected.createdAt).toLocaleString()}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Updated At:</strong>{" "}
        {new Date(messageSelected.updatedAt).toLocaleString()}
      </p>
    </div>
  ) : (
    <div className="w-full  h-screen justify-center flex items-center">
      loading ...
    </div>
  );
};
export default BodyMessage;
