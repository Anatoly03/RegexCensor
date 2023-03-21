use js_sys::Array;
use fancy_regex::Regex;
use wasm_bindgen::prelude::*;
use super::filter::Filter;

#[wasm_bindgen]
impl Filter {
    pub fn find(&mut self, rgx: String) -> JsValue {
        todo!();
        // TODO array of matched patterns

        false
    }
}
