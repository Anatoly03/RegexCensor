var fs = require("fs");

let file_begin = `
/*
 * THIS DOCUMENT IS GENERATED.
 * MANUAL COMMITS ARE OVERRIDEN.
 * SEE 'scripts/universalize.generator.cjs'
 * FOR MORE INFORMATION
 */

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn universalize(s : String) -> String {
    s.chars().map(|c| {
        match c {
`;
let file_end = `
            other => String::from(other)
        }
    }).collect::<String>()
}
`;

let $FILE = "";

fs.readFileSync("universal.txt", "utf-8")
    .split(/\r?\n/)
    .forEach((line) => {
        if (line.startsWith("#")) return;
        if (!line.includes(":")) return;
        let split = line.indexOf(":");

        let key = line.substring(0, split);
        let characters = [...line.substring(split + 1)]
            .map((i) => `'${i}'`)
            .reduce((p, c, i, a) => {
                return `${p}|${c}`;
            });
        $FILE += `${characters}=>"${key}".to_owned(),\n`;
    });

$FILE = file_begin + $FILE.substring(0, $FILE.length - 1) + file_end;

fs.writeFileSync("lib/src/universalize.rs", $FILE);
