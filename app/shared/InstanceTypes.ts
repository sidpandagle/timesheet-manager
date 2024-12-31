export class TaskEntryClass {
    id: string = '';
    task: string = '';
    project: string = '';
    tags: string[] = [];
    startTime: number = Date.now(); // Use number for timestamps
    endTime: number = Date.now();
    userId: string = '';
    time: number = 0; // Use number for duration
    billable: boolean = false; // Include missing field
  }
  