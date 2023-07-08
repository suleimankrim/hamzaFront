class TeamObserver {
    constructor() {
      this.teamates = [];
    }
  
    joinTeam(teamMember) {
      this.teamates.push(teamMember);
    }
  
    unjoinTeam(teamMember) {
      this.teamates = this.teamates.filter(
        (sub) => sub !== teamMember
      );
    }
  
    notify(text) {
      this.teamates.forEach((subscriber) => {
        this.teamates.forceChange(text);
      });
    }
  }
  export default TeamObserver;
  