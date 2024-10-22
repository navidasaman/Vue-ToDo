export interface TaskProps {
  addTask: (task: string) => void;
  deleteTask: (index: number) => void;
  tasks: string[];
}