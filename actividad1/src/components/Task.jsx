
export function Task({ text, onDelete }) {
  return (
    <div
      className="d-flex justify-content-between align-items-center px-3 py-2 mb-2"
      style={{
        backgroundColor: '#343a40',
        borderRadius: '5px',
        width: '600px',
      }}
    >
      <p className="m-0">{text}</p>
      <button className="btn btn-sm btn-danger" onClick={onDelete}>Delete</button>
    </div>
  );
}