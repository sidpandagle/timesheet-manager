export class TaskEntryClass {
    id: string = '';
    task: string = '';
    project: string = '';
    tags: string[] = [];
    startTime: number = Date.now(); // Use number for timestamps
    endTime: number = Date.now();
    userId: string = '651f1e28f8a2b3c72d6f4e92';
    time: number = 0; // Use number for duration
    billable: boolean = false; // Include missing field
  }
  