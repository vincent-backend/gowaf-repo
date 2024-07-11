export function mergeWithDefaults(obj, tager) {
  // 使用 Object.entries 遍历 obj 的所有可枚举属性
  const entries = Object.entries(obj);

  // 遍历每个属性，检查 tager 中是否有相同的键
  for (const [key, defaultValue] of entries) {
    // 如果 tager 中有该键，且其值不是 undefined 和 null，则覆盖默认值
    if (tager.hasOwnProperty(key) && tager[key] !== undefined && tager[key] !== null) {
      obj[key] = tager[key];
    }
    // 如果 taget 中没有该键或其值为 undefined 或 null，则保持 obj 的默认值
    else {
      obj[key] = defaultValue;
    }
  }

  return obj;
}