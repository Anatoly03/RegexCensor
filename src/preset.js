import { Filter } from "../build/lib.js";
import fs from "fs";

Filter.prototype.add_preset = function (preset) {
    const file = fs.readFileSync("../PATTERNS.md", "utf-8"); // node_modules/regexcensor/PATTERNS.md
    const begin = file.indexOf("## PATTERNS");
    const lines = file.substring(begin).split("\n");

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.startsWith("| `" + preset)) {
            for (; lines[i + 1].startsWith("|| `"); i++) {
                const end_expr = lines[i + 1].indexOf('` |')
                const expr = lines[i + 1].substring(4, end_expr)
            }
        }
    }
};
