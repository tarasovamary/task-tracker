import { AsyncPipe, NgFor, NgIf, NgStyle, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Observable, map, startWith } from 'rxjs';
import { ITask } from 'src/app/core/models/task.model';
import { IUser } from 'src/app/core/models/user.model';
import { TaskService } from 'src/app/core/services/task.service';
import { mockNames, mockPriority, mockStatus } from 'src/app/mock/data';
import { PriorityInfoPipe } from 'src/app/shared/pipes/priority-info.pipe';
import { StatusInfoPipe } from 'src/app/shared/pipes/status-info.pipe';
import { generateId } from 'src/app/shared/utils/generate-id';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgIf,
    NgFor,
    NgStyle,
    PriorityInfoPipe,
    ReactiveFormsModule,
    StatusInfoPipe,
    TitleCasePipe,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    AsyncPipe,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateComponent {
  users: IUser[] = mockNames;
  priorityOptions = mockPriority;
  statusOptions = mockStatus;

  defaultStatus = 'to_do';
  defaultPriority = 'medium';

  minDate = new Date();
  taskForm!: UntypedFormGroup;

  filteredReporters!: Observable<any>;
  reporterControl = new FormControl('');

  constructor(
    private dialogRef: MatDialogRef<CreateComponent>,
    private formBuilder: UntypedFormBuilder,
    private taskService: TaskService,
    @Inject(MAT_DIALOG_DATA) public matData: ITask,
  ) {}

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      id: [generateId()],
      name: ['', [Validators.required]],
      deadline: [this.formatDate(new Date()), [Validators.required]],
      reporter: [null, [Validators.required]],
      status: ['to_do', [Validators.required]],
      priority: ['medium', [Validators.required]],
    });

    this.filteredReporters = this.reporterControl.valueChanges.pipe(
      startWith(''),
      map((value) => this.filterUsers(value || '')),
    );

    if (this.matData) {
      this.taskForm.patchValue(this.matData);
      this.reporterControl.setValue(this.matData.reporter);
    }
  }

  onSelect(event: string, type: string): void {
    if (type) {
      this.taskForm.get(type)?.setValue(event);
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.matData) {
      this.taskService.updateTask(this.taskForm.value);
    } else {
      this.taskService.addTask(this.taskForm.value);
    }

    this.taskForm.reset();
    this.dialogRef.close();
  }

  setDueDate(event: any) {
    const datePickerDate = event.value;
    const date = this.formatDate(datePickerDate);

    this.taskForm.get('deadline')?.setValue(date);
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }

  private filterUsers(value: string): IUser[] {
    const filterValue = value.toLowerCase();

    return this.users.filter((option) => option.name.toLowerCase().includes(filterValue));
  }
}
