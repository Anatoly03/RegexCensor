use std::collections::HashSet;

use js_sys::Array;
use wasm_bindgen::prelude::*;
use crate::latinize::latinize;

use super::filter::Filter;

#[wasm_bindgen]
impl Filter {
    pub fn find(&mut self, content: String) -> JsValue {
        let mtc = self.matches(content.clone());
        let mut words = HashSet::new();

        for range in mtc {
            words.insert(content[range].to_owned());
        }
        
        JsValue::from(
            words.clone()
                .into_iter()
                .map(|x| JsValue::from_str(x.as_str()))
                .collect::<Array>(),
        )
    }


    pub fn find_patterns(&mut self, content: String) -> JsValue {
        let latin = latinize(content).to_lowercase();
        let mut patterns = HashSet::new();

        for pat in self.patterns_read() {
            if let Ok(true) = pat.is_match(&latin) {
                patterns.insert(pat.to_string());
            }
        }
        
        JsValue::from(
            patterns.clone()
                .into_iter()
                .map(|x| JsValue::from_str(x.as_str()))
                .collect::<Array>(),
        )
    }
}
