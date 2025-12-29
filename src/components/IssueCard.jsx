import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

function IssueCard({ issue }) {
  const isDone = issue.status === "Done";

  const handleStatusChange = async (newStatus) => {
    // Extra safety (even if dropdown somehow triggers)
    if (issue.status === "Done") {
      return;
    }

    // Rule: Open → Done not allowed
    if (issue.status === "Open" && newStatus === "Done") {
      alert("Issue must move to In Progress before Done.");
      return;
    }

    try {
      await updateDoc(doc(db, "issues", issue.id), {
        status: newStatus
      });
    } catch {
      alert("Failed to update status.");
    }
  };

  return (
    <div className="card issue-card">
      <span className={`badge ${issue.priority.toLowerCase()}`}>
        {issue.priority} Priority
      </span>

      <h4>{issue.title}</h4>
      <p>{issue.description}</p>

      <p>
        <b>Assigned To:</b>{" "}
        {issue.assignedTo?.name} ({issue.assignedTo?.email})
      </p>

      {/* STATUS DROPDOWN */}
      <select
        value={issue.status}
        disabled={isDone}
        onChange={e => handleStatusChange(e.target.value)}
        style={{
          cursor: isDone ? "not-allowed" : "pointer",
          opacity: isDone ? 0.7 : 1
        }}
      >
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      {/* Optional helper text */}
      {isDone && (
        <p style={{ marginTop: "8px", fontSize: "13px", color: "#6b7280" }}>
          This issue is marked as Done and cannot be changed.
        </p>
      )}
    </div>
  );
}

export default IssueCard;
