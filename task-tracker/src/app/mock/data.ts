import { ITask } from '../core/models/task.model';

export const mockTasks: ITask[] = [
  {
    id: 'db28dce5-b063-4fac-8255-3d0647f23f60',
    name: 'Create homepage design',
    deadline: '2024-03-01',
    reporter: 'John Doe',
    status: 'to_do',
    priority: 'high',
  },
  {
    id: 'fa880b6f-636a-4cb4-b125-8725e7a9cf04',
    name: 'Implement user authentication',
    deadline: '2024-04-30',
    reporter: 'Alice Smith',
    status: 'in_progress',
    priority: 'medium',
  },
  {
    id: 'e47ec9b8-54e8-4ba5-bd3f-5d1f446bba82',
    name: 'Write backend API endpoints',
    deadline: '2024-05-02',
    reporter: 'Bob Johnson',
    status: 'to_do',
    priority: 'high',
  },
  {
    id: '64c001f4-867b-4c88-96ef-3e7d14ad80fa',
    name: 'Fix bugs in the user interface',
    deadline: '2024-05-03',
    reporter: 'Emma Wilson',
    status: 'done',
    priority: 'low',
  },
  {
    id: '9a732ce1-b3d1-46bd-aa3a-35a6db3ab971',
    name: 'Refactor codebase for performance improvements',
    deadline: '2024-05-04',
    reporter: 'Chris Brown',
    status: 'to_do',
    priority: 'medium',
  },
  {
    id: '0d05719f-df96-4a86-9708-26b6914beba5',
    name: 'Optimize database queries',
    deadline: '2024-04-05',
    reporter: 'Jessica Lee',
    status: 'to_do',
    priority: 'high',
  },
  {
    id: 'a19753e8-c31a-4935-a7f0-e0855855f3b7',
    name: 'Deploy application to production servers',
    deadline: '2024-05-06',
    reporter: 'Mark Taylor',
    status: 'in_progress',
    priority: 'medium',
  },
  {
    id: '2d4abb65-69f8-4dff-bf08-ef531b44f5f6',
    name: 'Write documentation for API endpoints',
    deadline: '2024-05-07',
    reporter: 'Samantha Green',
    status: 'to_do',
    priority: 'low',
  },
  {
    id: 'f31302b6-3e7d-4232-9da7-e5d7fc5cd22d',
    name: 'Test application on multiple devices',
    deadline: '2024-05-08',
    reporter: 'Daniel Martinez',
    status: 'done',
    priority: 'high',
  },
  {
    id: 'bcadca55-50a8-4f99-9b14-0f7fc81817e0',
    name: 'Prepare presentation for stakeholders',
    deadline: '2024-05-09',
    reporter: 'Emily Anderson',
    status: 'to_do',
    priority: 'medium',
  },
];

export const mockNames = [
  { name: 'John Doe' },
  { name: 'Alice Smith' },
  { name: 'Bob Johnson' },
  { name: 'Emma Wilson' },
  { name: 'Chris Brown' },
  { name: 'Jessica Lee' },
  { name: 'Mark Taylor' },
  { name: 'Samantha Green' },
  { name: 'Daniel Martinez' },
  { name: 'Emily Anderson' },
];

export const mockPriority = [{ name: 'low' }, { name: 'medium' }, { name: 'high' }];

export const mockStatus = [{ name: 'to_do' }, { name: 'in_progress' }, { name: 'done' }];
