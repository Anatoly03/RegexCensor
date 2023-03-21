use fancy_regex::Regex;
use wasm_bindgen::prelude::*;
use super::filter::Filter;

#[wasm_bindgen]
impl Filter {
    pub fn add(&mut self, rgx: String) -> bool {
        todo!();

        false
    }


    pub fn add_word(&mut self, word: String) -> bool {
        todo!();

        false
    }
}
