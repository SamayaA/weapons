export function getSpecialAttack(character) {
  const result = [];
  character.special.forEach((weapon) => {
    const weaponProxy = new Proxy(weapon, {
      get(target, key, receiver) {
        if (key === 'description' && target[key] === undefined) {
          Reflect.set(target, key, 'Описание недоступно', receiver);
          return 'Описание недоступно';
        }
        return Reflect.get(target, key, receiver);
      },
      set(target, key, value, receiver) {
        return Reflect.set(target, key, value, receiver);
      },
    });
    weaponProxy.description = weaponProxy.description;
    result.push(weaponProxy);
  });
  return result;
}
