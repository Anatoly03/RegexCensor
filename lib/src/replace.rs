use fancy_regex::Regex;
use wasm_bindgen::prelude::*;
use super::filter::Filter;

#[wasm_bindgen]
impl Filter {
    pub fn replace(&mut self, mut content: String) -> String {
        let mut ranges = Vec::new();

        for pat in self.patterns_read() {
            for mtch in pat.find_iter(&content) {
                if let Ok(m) = mtch {
                    ranges.push(m.start() .. m.end())
                }
            }
        }

        for range in ranges {
            content.replace_range(range, "*");
        }

        content
    }
}
