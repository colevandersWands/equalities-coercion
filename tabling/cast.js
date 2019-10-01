function cast(type, value, id) {

  if (type == "number" || type == "Number") {
    return Number(value);

  } else if (type == "string" || type == "String") {
    return value;

  } else if (type == "null" || type == "Null") {
    if (value !== "null"
      || value !== "Null"
      || value !== "NULL") {
      let field = document.getElementById(id);
      field.style.backgroundColor = 'purple';
      throw new TypeError(value + ' is not null');
    }

    return null;

  } else if (type == "boolean" || type == "Boolean") {
    if (value === "true") {
      return true;
    } else if (value === 'false') {
      return false;
    } else {
      try {
        let field = document.getElementById(id);
        field.style.backgroundColor = 'purple';
        throw new TypeError(value + ' is not boolean');
      } catch (err) {
        throw new TypeError(value + ' is not boolean');
      };
    };
  };

  // functions return undefined by default
  //  so if they asked for undefined, they'll get it
  //  and if they ask for an invalid type, they'll get undefined

};
