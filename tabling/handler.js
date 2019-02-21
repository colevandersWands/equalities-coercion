function handler() {
    // reset dom from last time
    var a_value = document.getElementById("a-value");
    a_value.style.backgroundColor = 'white';

    var b_value = document.getElementById("b-value");
    b_value.style.backgroundColor = 'white';

    var expected_value = document.getElementById("expected-value");
    expected_value.style.backgroundColor = 'white';

    var expected_div = document.getElementById("expected");
    expected_div.style.backgroundColor = 'white';

    var actual_field = document.getElementById("actual");
    actual_field.style.backgroundColor = 'white';

    // read, clean & process user input
    var a_type = document.getElementById("a-type").value;
    var a_value = document.getElementById("a-value").value;
    var a = cast(a_type, a_value, 'a-value');
    
    var b_type = document.getElementById("b-type").value;
    var b_value = document.getElementById("b-value").value;
    var b = cast(b_type, b_value, 'b-value');

    var expected_type = document.getElementById("expected-type").value;
    var expected_value = document.getElementById("expected-value").value;
    var expected = cast(expected_type, expected_value, 'expected-value');


  // perform logic. (determine user rightness)

    /* (a == b) && (a === b) */            var log = [];               
    
    var val_1 = a == b;                    log.push({op: 'a == b',
                                                      type: typeof val_1,
                                                      value: val_1 });
    var val_2 = a === b;                   log.push({op:'a === b',
                                                      type: typeof val_2,
                                                      value: val_2 });
    var val_3 = val_1 && val_2;            log.push({op:'val_1 && val_2',
                                                      type: typeof val_3,
                                                      value: val_3});
    var actual = val_3; 

    var assertion = Object.is(expected, actual);


  // write response to user
    console.log({a:a,b:b});
    console.table(log);
    console.log('expected: '+typeof expected +', '+ expected);
    console.assert(assertion, "try again");

    if (assertion) {
        expected_div.style.backgroundColor = 'green';
        actual_field.style.backgroundColor = 'green';
    } else {
        expected_div.style.backgroundColor = 'red';
        actual_field.style.backgroundColor = 'red';
    };

    var t_1 = document.getElementById("t-1");
    t_1.value = typeof val_1;
    var v_1 = document.getElementById("v-1");
    v_1.value = val_1;

    var t_2 = document.getElementById("t-2");
    t_2.value = typeof val_2;
    var v_2 = document.getElementById("v-2");
    v_2.value = val_2;

    var t_f = document.getElementById("t-f");
    t_f.value = typeof val_3;
    var v_f = document.getElementById("v-f");
    v_f.value = val_3;
    
};