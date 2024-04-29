import { ITask } from '../core/models/task.model';

export const mockTasks: ITask[] = [
  {
    name: 'Create homepage design',
    deadline: '2024-03-01',
    reporter: 'John Doe',
    status: 'to_do',
    priority: 'high',
  },
  {
    name: 'Implement user authentication',
    deadline: '2024-04-30',
    reporter: 'Alice Smith',
    status: 'in_progress',
    priority: 'medium',
  },
  {
    name: 'Write backend API endpoints',
    deadline: '2024-05-02',
    reporter: 'Bob Johnson',
    status: 'to_do',
    priority: 'high',
  },
  {
    name: 'Fix bugs in the user interface',
    deadline: '2024-05-03',
    reporter: 'Emma Wilson',
    status: 'done',
    priority: 'low',
  },
  {
    name: 'Refactor codebase for performance improvements',
    deadline: '2024-05-04',
    reporter: 'Chris Brown',
    status: 'to_do',
    priority: 'medium',
  },
  {
    name: 'Optimize database queries',
    deadline: '2024-04-05',
    reporter: 'Jessica Lee',
    status: 'to_do',
    priority: 'high',
  },
  {
    name: 'Deploy application to production servers',
    deadline: '2024-05-06',
    reporter: 'Mark Taylor',
    status: 'in_progress',
    priority: 'medium',
  },
  {
    name: 'Write documentation for API endpoints',
    deadline: '2024-05-07',
    reporter: 'Samantha Green',
    status: 'to_do',
    priority: 'low',
  },
  {
    name: 'Test application on multiple devices',
    deadline: '2024-05-08',
    reporter: 'Daniel Martinez',
    status: 'done',
    priority: 'high',
  },
  {
    name: 'Prepare presentation for stakeholders',
    deadline: '2024-05-09',
    reporter: 'Emily Anderson',
    status: 'to_do',
    priority: 'medium',
  },
];
