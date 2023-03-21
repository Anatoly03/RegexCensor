use super::filter::Filter;
use fancy_regex::Regex;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
impl Filter {
    pub fn add(&mut self, rgx: String) -> bool {
        let regex = Regex::new(&rgx);

        if let Ok(r) = regex {
            self.patterns_mut().push(r);
            true
        } else {
            false
        }
    }

    pub fn add_word(&mut self, word: String) -> bool {
        // self.add(format!("[\\s^]{}[\\s$]", word))
        todo!()
    }
}
