export default class Team {
  constructor() {
    this.players = new Set();
  }

  add(character) {
    if (this.players.has(character)) {
      throw new Error('The character already exist!');
    }
    this.players.add(character);
  }

  addAll(characters) {
    this.players = new Set([...this.players, ...characters]);
  }

  toArray() {
    return [...this.players];
  }

  [Symbol.iterator]() {
    const characters = this.toArray();
    let current = 0;
    const last = characters.length;
    return {
      next() {
        if (current < last) {
          const player = characters[current];
          current += 1;
          return { done: false, value: player };
        }
        return { done: true };
      },
    };
  }
}
