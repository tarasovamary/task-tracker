type StatusType = 'to_do' | 'in_progress' | 'done';
type PriorityType = 'low' | 'medium' | 'high';

export interface ITask {
  id: string;
  name: string;
  deadline: string;
  reporter: string;
  status: StatusType;
  priority: PriorityType;
}
