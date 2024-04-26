import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-details',
    standalone: true,
    imports: [
    ],
    templateUrl: './details.component.html',
    styleUrl: './details.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent { }
