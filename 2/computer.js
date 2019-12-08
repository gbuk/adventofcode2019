function input(str) {
  return str.split(",").map(x => parseInt(x));
}

function output(table) {
  return table.join(",");
}

function extractOpcode(instruction_opcode) {
  if (instruction_opcode < 100) {
    return instruction_opcode;
  }
  var instr = instruction_opcode + "";
  return parseInt(instr.substring(instr.length - 2));
}

function extractMode(instruction_opcode, param_index) {
  if (instruction_opcode < Math.pow(10, 1 + param_index)) {
    return 0;
  }
  var instr = instruction_opcode + "";
  return parseInt(instr.charAt(instr.length - 2 - param_index));
}

function readUserInput() {
  return global.userInput.pop();
}

function outputToUser(code) {
  global.userScreen.push("$ " + code);
}

function compute(input_str) {
  var memory = input(input_str);
  var pointer = 0;
  var instruction_opcode = memory[pointer];
  var opcode = extractOpcode(instruction_opcode);
  while (opcode != 99) {
    //console.log(opcode);
    if (opcode == 1 || opcode == 2 || opcode == 7 || opcode == 8) {
      var instruction_first_parameter = memory[pointer + 1];
      var mode_first_parameter = extractMode(instruction_opcode, 1);
      var value_first_parameter = (mode_first_parameter==0?memory[instruction_first_parameter]:instruction_first_parameter);

      var instruction_second_parameter = memory[pointer + 2];
      var mode_second_parameter = extractMode(instruction_opcode, 2);
      var value_second_parameter = (mode_second_parameter==0?memory[instruction_second_parameter]:instruction_second_parameter);

      var instruction_third_parameter = memory[pointer + 3];

      if (opcode == 1) {
        memory[instruction_third_parameter] = value_first_parameter + value_second_parameter;
      }
      if (opcode == 2) {
        memory[instruction_third_parameter] = value_first_parameter * value_second_parameter;
      }
      if (opcode == 7) {
        // Opcode 7 is less than: if the first parameter is less than the second parameter, it stores 1 in the position given by the third parameter. Otherwise, it stores 0.
        memory[instruction_third_parameter] = (value_first_parameter < value_second_parameter)?1:0;
      }
      if (opcode == 8) {
        // Opcode 8 is equals: if the first parameter is equal to the second parameter, it stores 1 in the position given by the third parameter. Otherwise, it stores 0.
        memory[instruction_third_parameter] = (value_first_parameter == value_second_parameter)?1:0;
      }

      pointer += 4;
    } else if (opcode == 3 || opcode == 4) {
      //parameter address
      var instruction_parameter = memory[pointer + 1];
      if (opcode == 3) {
        memory[instruction_parameter] = readUserInput();
      }
      if (opcode == 4) {
        var mode_parameter = extractMode(instruction_opcode, 1);
        outputToUser(mode_parameter==0?memory[instruction_parameter]:instruction_parameter);
      }
      pointer += 2;

   } else if (opcode == 5 || opcode == 6) {
      var instruction_first_parameter = memory[pointer + 1];
      var mode_first_parameter = extractMode(instruction_opcode, 1);
      var value_first_parameter = (mode_first_parameter==0?memory[instruction_first_parameter]:instruction_first_parameter);
      var instruction_second_parameter = memory[pointer + 2];
      var mode_second_parameter = extractMode(instruction_opcode, 2);
      var value_second_parameter = (mode_second_parameter==0?memory[instruction_second_parameter]:instruction_second_parameter);

      if (
           // Opcode 5 is jump-if-true: if the first parameter is non-zero, it sets the instruction pointer to the value from the second parameter. Otherwise, it does nothing.
           (opcode == 5 && value_first_parameter != 0)
           // Opcode 6 is jump-if-false: if the first parameter is zero, it sets the instruction pointer to the value from the second parameter. Otherwise, it does nothing.
        || (opcode == 6 && value_first_parameter == 0)
      ) {
        pointer = value_second_parameter;
      } else {
        pointer += 3;
      }
    } else {
      pointer++;
    }

    instruction_opcode = memory[pointer];
    opcode = extractOpcode(instruction_opcode);
  }
  return output(memory);
}

module.exports.input = input;
module.exports.output = output;
module.exports.compute = compute;
