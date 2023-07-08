class SettingsState {
    constructor(createTeam, value2, value3) {
      this.createTeam = createTeam;
      this.value2 = value2;
      this.value3 = value3;
    }
  
    // Getter and setter methods for value1
    getCreateTeam() {
      return this.createTeam;
    }
  
    setCreateTeam(value) {
      this.createTeam =value;
    }
  
    // Getter and setter methods for value2
    getValue2() {
      return this.value2;
    }
  
    setValue2(value) {
      this.value2 = value;
    }
  
    // Getter and setter methods for value3
    getValue3() {
      return this.value3;
    }
  
    setValue3(value) {
      this.value3 = value;
    }
  }
  export default SettingsState;