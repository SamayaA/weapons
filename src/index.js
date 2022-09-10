export default function getSpecialAttack(character) {
  const result = [];
  character.special.forEach((weapon) => {
    const { description = 'Описание недоступно', ...special } = weapon;
    special.description = description;
    result.push(special);
  });
  return result;
}
