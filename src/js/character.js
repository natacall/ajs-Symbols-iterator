export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string') {
      throw new Error('The name must be a string!');
    } else if (name.length < 2 || name.length > 10) {
      throw new Error('The name must contain from 2 to 10 letters!');
    }

    const listCharacters = ['Magician', 'Daemon', 'Zombie'];

    if (!listCharacters.includes(type)) {
      throw new Error('The value must be selected from the list: Magician, Daemon, Zombie!');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
