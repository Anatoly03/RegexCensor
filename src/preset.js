import { Filter } from "../build/lib.js";
import fs from "fs";

Filter.prototype.add_preset = function (preset) {
    if (preset == '*') this.add_all_presets()

    const file = fs.readFileSync("./PATTERNS.md", "utf-8"); // node_modules/regexcensor/PATTERNS.md
    const begin = file.indexOf("## PATTERNS");
    const lines = file.substring(begin).split("\n");

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.startsWith("| `" + preset)) {
            for (; lines[i + 1].startsWith("|| `"); i++) {
                const end_expr = lines[i + 1].indexOf('` |')
                const expr = lines[i + 1].substring(4, end_expr).replace('\|', '|')
                this.add(expr)
            }
            break
        }
    }

    return this
};

Filter.prototype.add_all_presets = function () {
    const file = fs.readFileSync("./PATTERNS.md", "utf-8"); // node_modules/regexcensor/PATTERNS.md
    const begin = file.indexOf("## PATTERNS");
    const lines = file.substring(begin).split("\n");

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.startsWith("|| `")) {
            console.log(lines[i + 1])
            const end_expr = lines[i + 1].indexOf('` |')
            const expr = lines[i + 1].substring(4, end_expr).replace('\|', '|')
            console.log(expr)
            this.add(expr)
        }
    }

    return this
};
