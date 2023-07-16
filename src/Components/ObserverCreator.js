import TeamObserver from "./TeamsObserver";
import Style from "./Table/body-cell/Cell.module.css";
class ObserverCreator {
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
  
    notify() {
        const teamsObserver=new TeamObserver() ;
      this.teamates.forEach((subscriber) => {
        this.teamates.teamsObserver=teamsObserver;
        subscriber.setcstyle(Style.cell);
        teamsObserver.joinTeam(subscriber);
      });
    }
  }
  export default ObserverCreator;
  