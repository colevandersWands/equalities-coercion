function handler() {
  // reset dom from last time
  const a_value = document.getElementById("a-value");
  a_value.style.backgroundColor = 'white';

  const b_value = document.getElementById("b-value");
  b_value.style.backgroundColor = 'white';

  const expected_value = document.getElementById("expected-value");
  expected_value.style.backgroundColor = 'white';

  const expected_div = document.getElementById("expected");
  expected_div.style.backgroundColor = 'white';

  const actual_field = document.getElementById("actual");
  actual_field.style.backgroundColor = 'white';

  // read, clean & process user input
  const a_type = document.getElementById("a-type").value;
  const a = cast(a_type, a_value.value, 'a-value');

  const b_type = document.getElementById("b-type").value;
  const b = cast(b_type, b_value.value, 'b-value');

  const expected_type = document.getElementById("expected-type").value;
  const expected = cast(expected_type, expected_value.value, 'expected-value');


  // perform logic. (determine user rightness)

  /* (a == b) && (a === b) */
  const log = [];

  const val_1 = a == b;
  log.push({
    op: 'a == b',
    type: typeof val_1,
    value: val_1
  });

  const val_2 = a === b;
  log.push({
    op: 'a === b',
    type: typeof val_2,
    value: val_2
  });

  const val_3 = val_1 && val_2;
  log.push({
    op: 'val_1 && val_2',
    type: typeof val_3,
    value: val_3
  });

  const actual = val_3;

  const assertion = Object.is(expected, actual);


  // write response to user
  console.log({ a: a, b: b });
  console.table(log);
  console.log('expected: ' + typeof expected + ', ' + expected);
  console.log('actual: ' + typeof actual + ', ' + actual);
  console.assert(assertion, "try again");

  if (assertion) {
    expected_div.style.backgroundColor = 'green';
    actual_field.style.backgroundColor = 'green';
  } else {
    expected_div.style.backgroundColor = 'red';
    actual_field.style.backgroundColor = 'red';
  };

  const t_1 = document.getElementById("t-1");
  t_1.value = typeof val_1;
  const v_1 = document.getElementById("v-1");
  v_1.value = val_1;

  const t_2 = document.getElementById("t-2");
  t_2.value = typeof val_2;
  const v_2 = document.getElementById("v-2");
  v_2.value = val_2;

  const t_f = document.getElementById("t-f");
  t_f.value = typeof val_3;
  const v_f = document.getElementById("v-f");
  v_f.value = val_3;

};
