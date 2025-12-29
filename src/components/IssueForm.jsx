import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";

function IssueForm({ issues }) {
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [assigneeName, setAssigneeName] = useState("");
  const [assigneeEmail, setAssigneeEmail] = useState("");

  const [error, setError] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [pendingIssue, setPendingIssue] = useState(null);

  const createIssue = async (issueData) => {
    try {
      await addDoc(collection(db, "issues"), issueData);

      setTitle("");
      setDescription("");
      setPriority("Low");
      setAssigneeName("");
      setAssigneeEmail("");
      setShowConfirm(false);
      setPendingIssue(null);
    } catch {
      setError("Failed to create issue.");
    }
  };

  const handleCreateIssue = async () => {
    setError("");

    if (!title || !description || !assigneeName || !assigneeEmail) {
      setError("Please fill all fields.");
      return;
    }

    const issueData = {
      title,
      description,
      priority,
      status: "Open",
      assignedTo: {
        name: assigneeName,
        email: assigneeEmail
      },
      createdBy: user.email,
      createdAt: Timestamp.now()
    };

    const similar = issues.find(issue =>
      issue.title.toLowerCase().includes(title.toLowerCase())
    );

    if (similar) {
      setPendingIssue(issueData);
      setShowConfirm(true);
      return;
    }

    await createIssue(issueData);
  };

  return (
    <div className="card">
      <h3>Create Issue</h3>

      {/* ERROR MESSAGE */}
      {error && <div className="error-box">{error}</div>}

      {/* CONFIRMATION BOX */}
      {showConfirm && (
        <div className="confirm-box">
          A similar issue already exists. Do you want to create this issue anyway?
          <div className="confirm-actions">
            <button
              className="cancel"
              onClick={() => {
                setShowConfirm(false);
                setPendingIssue(null);
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => createIssue(pendingIssue)}
            >
              Create Anyway
            </button>
          </div>
        </div>
      )}

      <input
        placeholder="Issue Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Issue Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <select
        value={priority}
        onChange={e => setPriority(e.target.value)}
      >
        <option value="Low">Low Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="High">High Priority</option>
      </select>

      <input
        placeholder="Assign To (Name)"
        value={assigneeName}
        onChange={e => setAssigneeName(e.target.value)}
      />

      <input
        placeholder="Assign To (Email)"
        value={assigneeEmail}
        onChange={e => setAssigneeEmail(e.target.value)}
      />

      <button onClick={handleCreateIssue}>
        Create Issue
      </button>
    </div>
  );
}

export default IssueForm;