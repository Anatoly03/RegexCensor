use js_sys::Array;
use wasm_bindgen::prelude::*;
use super::filter::Filter;

#[wasm_bindgen]
impl Filter {
    pub fn find(&mut self, content: String) -> JsValue {
        let mut words = Vec::new();

        for pat in self.patterns_read() {
            for mtch in pat.find_iter(&content) {
                if let Ok(m) = mtch {
                    words.push(m.to_owned());
                }
            }
        }
        
        JsValue::from(
            words.clone()
                .into_iter()
                .map(|x| JsValue::from_str(x.as_str()))
                .collect::<Array>(),
        )
    }


    pub fn find_patterns(&mut self, content: String) -> JsValue {
        let mut patterns = Vec::new();

        for pat in self.patterns_read() {
            if let Ok(true) = pat.is_match(&content) {
                patterns.push(pat.to_string());
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
