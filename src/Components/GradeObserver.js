class GradeObserver {
    constructor() {
      this.teamates = [];
      this.teamatesSave = [];
    }
  
    joinTeam(teamMember) {
      this.teamates.push(teamMember);
    }
    joinTeamSave(teamMember) {
      this.teamatesSave.push(teamMember);
    }
  
    unjoinTeam(teamMember) {
      this.teamates = this.teamates.filter(
        (sub) => sub !== teamMember
      );
      this.teamatesSave = this.teamatesSave.filter(
        (sub) => sub !== teamMember
      );
    }
  
    notify() {
        let value=0;
      this.teamates.forEach((subscriber) => {
        console.log(Number(subscriber())+"why it does");
       value=value+ Number(subscriber());
      });
      this.notifySave(value);
    }
    notifySave(value) {
      // console.log("its notifing");

      this.teamatesSave.forEach((subscriber) => {
        subscriber(value);
      });
    }
  }
  export default GradeObserver;
  