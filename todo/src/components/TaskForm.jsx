import { useState, useEffect } from "react";

const TaskModal = ({ task, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    id: "",
    assignedTo: "",
    status: "Not Started",
    dueDate: "",
    priority: "Normal",
    comments: "",
  });

  useEffect(() => {
    if (task) setFormData(task);
  }, [task]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-gray-50 border border-gray-600 rounded shadow-lg w-full max-w-2xl mx-4 sm:mx-8">
        <h2 className="text-2xl font-medium text-gray-800 text-center border-b border-gray-400 py-4">
          {task ? "Edit Task" : "New Task"}
        </h2>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Assigned To */}
            <div>
              <label className="block mb-1 text-gray-700">
                <span className="text-red-500">*</span> Assigned To
              </label>
              <input
                type="text"
                name="assignedTo"
                value={formData.assignedTo}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded focus:ring focus:ring-yellow-300"
                required
              />
            </div>

            {/* Status */}
            <div>
              <label className="block mb-1 text-gray-700">
                <span className="text-red-500">*</span> Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded focus:ring focus:ring-yellow-300"
                required
              >
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Due Date */}
            <div>
              <label className="block mb-1 text-gray-700">
                Due Date
              </label>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded focus:ring focus:ring-yellow-300"
                required
              />
            </div>

            {/* Priority */}
            <div>
              <label className="block mb-1 text-gray-700">
                <span className="text-red-500">*</span> Priority
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded focus:ring focus:ring-yellow-300"
                required
              >
                <option value="Low">Low</option>
                <option value="Normal">Normal</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>

          {/* Comments */}
          <div>
            <label className="block mb-1 text-gray-700">Description</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="w-full resize-none border px-3 py-2 rounded focus:ring focus:ring-yellow-300"
              rows="4"
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 border-t border-gray-400 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 bg-yellow-200 text-gray-700 border border-yellow-400 rounded hover:bg-yellow-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gray-700 text-yellow-200 border border-gray-50 rounded hover:bg-gray-800"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
