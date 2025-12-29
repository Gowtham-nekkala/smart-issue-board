import IssueCard from "./IssueCard";

function IssueList({ issues, setIssues }) {
    if (issues.length === 0) {
        return <div className="empty-state">No issues found 🚀</div>;
    }

    return (
        <div>
            {issues.map(issue => (
                <IssueCard
                    key={issue.id}
                    issue={issue}
                    setIssues={setIssues}
                />
            ))}
        </div>
    );
}

export default IssueList;
