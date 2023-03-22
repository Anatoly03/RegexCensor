use crate::universalize::universalize;

use js_sys::Array;
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

    pub fn add_many(&mut self, rgxs: Array) -> bool {
        for rgx in rgxs.iter() {
            if let Some(r) = rgx.as_string() {
                if !self.add(r) {
                    return false;
                }
            }
        }

        true
    }

    pub fn add_word(&mut self, word: String) -> bool {
        self.add(format!("\\b{}\\b", universalize(word)))
    }

    pub fn add_many_words(&mut self, words: Array) -> bool {
        for word in words.iter() {
            if let Some(w) = word.as_string() {
                if !self.add_word(w) {
                    return false;
                }
            }
        }

        true
    }
}
