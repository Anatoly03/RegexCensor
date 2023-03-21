use fancy_regex::Regex;
use wasm_bindgen::prelude::*;
use super::filter::Filter;

#[wasm_bindgen]
impl Filter {
    pub fn check(&mut self, rgx: String) -> bool {
        todo!();

        false
    }
}
