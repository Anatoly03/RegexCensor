use crate::latinize::latinize;

use js_sys::Array;
use wasm_bindgen::prelude::*;
use super::filter::Filter;

#[wasm_bindgen]
impl Filter {
    pub fn check(&mut self, content: String) -> bool {
        let latin = latinize(content).to_lowercase();

        for pat in self.patterns_read() {
            if let Ok(true) = pat.is_match(&latin) {
                return true;
            }
        }

        false
    }

    pub fn check_many(&mut self, prompts: Array) -> bool {
        for prompt in prompts.iter() {
            if let Some(p) = prompt.as_string() {
                if self.check(p) {
                    return true;
                }
            }
        }

        false
    }
}
