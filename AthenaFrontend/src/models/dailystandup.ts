export class DailyStandup {
  standupID: number;
  userID: number;
  dateCreated: Date;
  description: string;

  constructor(standupID: number, userID: number, dateCreated: Date, description: string) {
    this.standupID = standupID;
    this.userID = userID;
    this.dateCreated = dateCreated;
    this.description = description;
  }

  get getStandupId(): number {
    return this.standupID;
  }
  get getUserId(): number {
    return this.userID;
  }
  get getDateCreated(): Date {
    return this.dateCreated;
  }
  get getDescription(): string {
    return this.description;
  }

  set setStandupId(standupID: number) {
    this.standupID = standupID;
  }
  set setUserId(userID: number) {
    this.userID = userID;
  }
  set setDateCreated(dateCreated: Date) {
    this.dateCreated = dateCreated;
  }
  set setDescription(description: string) {
    this.description = description;
  }
}
