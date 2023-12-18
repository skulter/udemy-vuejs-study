const calcDamage = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min);
};
const HPAnimation = { transition: "width 1s ease,background-color 2s" };
const app = Vue.createApp({
  data() {
    return {
      userHP: 100,
      monsterHP: 100,
      currentRound: 0,
      result: null,
      logs: [],
    };
  },
  watch: {
    userHP(value) {
      if (value <= 0 && this.monsterHP <= 0) {
        this.result = "draw";
      } else if (value <= 0) {
        this.result = "lost";
      }
    },
    monsterHP(value) {
      if (value <= 0 && this.userHP <= 0) {
        this.result = "draw";
      } else if (value <= 0) {
        this.result = "win";
      }
    },
  },
  computed: {
    monsterHPStyles() {
      const currentMonsterHP = this.monsterHP < 0 ? 0 : this.monsterHP;
      return {
        ...HPAnimation,
        width: currentMonsterHP + "%",
        backgroundColor: this.monsterHP <= 30 ? "tomato" : "#00a876",
      };
    },
    userHPStyles() {
      const currentUserHP = this.userHP < 0 ? 0 : this.userHP;
      return {
        ...HPAnimation,
        width: currentUserHP + "%",
        backgroundColor: this.userHP <= 30 ? "tomato" : "#00a876",
      };
    },
    enableSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    startGame() {
      this.userHP = 100;
      this.monsterHP = 100;
      this.currentRound = 0;
      this.result = null;
      this.logs = [];
    },
    surrender() {
      this.result = "lost";
    },
    monsterAttack() {
      this.currentRound++;
      const damage = calcDamage(5, 12);
      this.monsterHP -= damage;
      this.pushLog("user", "attack", damage);
      setTimeout(() => {
        this.userAttack();
      }, 100);
    },
    userAttack() {
      const damage = calcDamage(8, 15);
      this.pushLog("monster", "attack", damage);
      this.userHP -= damage;
    },
    specialAttackMonster() {
      this.currentRound++;
      const damage = calcDamage(10, 25);
      this.monsterHP -= damage;
      this.pushLog("user", "specialAttack", damage);
      setTimeout(() => {
        this.userAttack();
      }, 100);
    },
    userHeal() {
      this.currentRound++;
      const heal = calcDamage(20, 50);
      if (this.userHP + heal > 100) {
        this.userHP = 100;
      } else {
        this.userHP += heal;
      }
      this.pushLog("user", "heal", heal);
      setTimeout(() => {
        this.userAttack();
      }, 100);
    },
    pushLog(who, what, damage) {
      this.logs.unshift({ who, what, damage });
    },
  },
});

app.mount("#game");
