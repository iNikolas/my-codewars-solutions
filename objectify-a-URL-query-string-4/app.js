function convertQueryToMap(query) {
  const resultedObject = {};

  const objectEntries = query.match(/[^&]+(?=(&|$))/g) || [];

  console.log(objectEntries);

  objectEntries.forEach((entry) => {
    mergeDeep(resultedObject, parseEntry(entry));
  });

  return resultedObject;
}

function parseEntry(entryString) {
  const resultedObjectPart = {};

  let lastNesting = resultedObjectPart;

  let keyName;

  const regExp = /(?<nesting>[^\.=]+(?=\.))|(?<param>[^\.&]+=[^&]+)/g;

  while ((match = regExp.exec(entryString)) !== null) {
    const { nesting, param } = match.groups;

    if (nesting) {
      lastNesting = lastNesting[nesting] = {};
    }

    if (param) {
      const searchParams = new URLSearchParams(param);

      keyName = searchParams.keys().next().value;

      value = searchParams.values().next().value;

      lastNesting[keyName] = value;
    }
  }

  return resultedObjectPart;
}

function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

function mergeDeep(target, ...sources) {
  if (!sources.length) return target;

  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });

        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}
