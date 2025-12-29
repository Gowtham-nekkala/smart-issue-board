import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Navbar from "../components/Navbar";
import IssueForm from "../components/IssueForm";
import IssueList from "../components/IssueList";

function Dashboard() {
  const [issues, setIssues] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");

  useEffect(() => {
    const q = query(
      collection(db, "issues"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const issueData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setIssues(issueData);
    });

    return unsubscribe;
  }, []);

  const filteredIssues = issues.filter(issue => {
    const statusMatch = statusFilter
      ? issue.status === statusFilter
      : true;
    const priorityMatch = priorityFilter
      ? issue.priority === priorityFilter
      : true;
    return statusMatch && priorityMatch;
  });

  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <h2>Dashboard</h2>

        <IssueForm issues={issues} setIssues={setIssues} />

        <div className="filters">
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>

          <select
            value={priorityFilter}
            onChange={e => setPriorityFilter(e.target.value)}
          >
            <option value="">All Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <IssueList issues={filteredIssues} />
      </div>
    </>
  );
}

export default Dashboard;
