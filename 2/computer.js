function input(str) {
  return str.split(",").map(x => parseInt(x));
}

function output(table) {
  return table.join(",");
}

function compute(input_str) {
  var memory = input(input_str);
  var pointer = 0;
  var instruction_opcode = memory[pointer];
  while (instruction_opcode != 99) {
    if (instruction_opcode == 1 || instruction_opcode == 2) {
      // first operand address
      var instruction_first_parameter = memory[pointer + 1];
      // second operand address
      var instruction_second_parameter = memory[pointer + 2];
      //destination address
      var instruction_third_parameter = memory[pointer + 3];
      if (instruction_opcode == 1) {
        memory[instruction_third_parameter] = memory[instruction_first_parameter] + memory[instruction_second_parameter];
      }
      if (instruction_opcode == 2) {
        memory[instruction_third_parameter] = memory[instruction_first_parameter] * memory[instruction_second_parameter];
      }
      pointer += 4;
    } else {
      pointer++;
    }

    instruction_opcode = memory[pointer];
  }
  return output(memory);
}

module.exports.input = input;
module.exports.output = output;
module.exports.compute = compute;
