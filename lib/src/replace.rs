use wasm_bindgen::prelude::*;
use crate::latinize::latinize;

use super::filter::Filter;

#[wasm_bindgen]
impl Filter {
    pub fn replace(&mut self, content: String) -> String {
        let mut phrase = (&content).clone();
        let latin = latinize(content);
        let mut ranges = Vec::new();

        for pat in self.patterns_read() {
            for mtch in pat.find_iter(&latin) {
                if let Ok(m) = mtch {
                    ranges.push(m.start() .. m.end())
                }
            }
        }

        for range in ranges {
            phrase.replace_range(range, "*");
        }

        phrase
    }
}
