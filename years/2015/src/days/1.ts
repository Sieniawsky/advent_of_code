import _ from "lodash";

export function part_one(input: string): number {
    let counter = 0;
    _.each(input.split(""), (e) => {
        if (e == "(") {
            counter += 1;
        } else {
            counter -= 1;
        }
    });

    return counter;
}

export function part_two(input: string) {
    let index = 0;
    let counter = 0;
    _.each(input.split(""), (e, i) => {
        if (e == "(") {
            counter += 1;
        } else {
            counter -= 1;
        }

        if (counter === -1) {
            index = i + 1;
            return false;
        }
    });

    return index;
}
