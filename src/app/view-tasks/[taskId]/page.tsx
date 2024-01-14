import TaskDetails from "./_component/TaskDetails";

export default function Page({
	params: { taskId },
}: {
	params: { taskId: string };
}) {
	return <TaskDetails taskId={taskId} />;
}
