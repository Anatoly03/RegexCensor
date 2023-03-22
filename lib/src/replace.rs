use wasm_bindgen::prelude::*;

use super::filter::Filter;

#[wasm_bindgen]
impl Filter {
    pub fn replace(&mut self, mut content: String) -> String {
        let ranges = self.matches(content.clone());

        for range in ranges {
            content.replace_range(range, "*");
        }

        content
    }
}
