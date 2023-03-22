use wasm_bindgen::prelude::*;

use super::filter::Filter;

#[wasm_bindgen]
impl Filter {
    pub fn replace(&mut self, content: String) -> String {
        let mut censored = content.clone();
        let ranges = self.matches(content);

        for range in ranges {
            for i in range {
                censored.replace_range(i .. i + 1, "*");
            }
        }

        censored
    }
}
