use wasm_bindgen::prelude::*;
use super::filter::Filter;

#[wasm_bindgen]
impl Filter {
    pub fn check(&mut self, content: String) -> bool {
        for pat in self.patterns_read() {
            if let Ok(true) = pat.is_match(&content) {
                return true;
            }
        }

        false
    }
}
