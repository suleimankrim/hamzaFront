class TeamObserver {
    constructor() {
      this.teamates = [];
      this.teamatesSave = [];
      this.teamGrade=[];
    }
  
    joinTeam(teamMember) {
      this.teamates.push(teamMember);
    }
    joinTeamGrade(teamMember) {
      this.teamGrade.push(teamMember);
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
      this.teamGrade = this.teamatesSave.filter(
        (sub) => sub !== teamMember
      );
    }
  
    notify(text) {
      this.teamates.forEach((subscriber) => {
        subscriber(text);
      });
    }
    notifySave(e) {
      this.teamatesSave.forEach((subscriber) => {
        subscriber(e);
      });
      
    }
    notifyteamGrade(e) {
      this.teamatesSave.forEach((subscriber) => {
        subscriber(e);
      });
      
    }
    
  }
  export default TeamObserver;
  