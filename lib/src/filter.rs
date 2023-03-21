use js_sys::Array;
use fancy_regex::Regex;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Filter {
    patterns: Vec<Regex>,
}

#[wasm_bindgen]
impl Filter {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Self { patterns: vec![] }
    }

    pub fn patterns(&self) -> JsValue {
        JsValue::from(
            self.patterns.clone()
                .into_iter()
                .map(|x| JsValue::from_str(x.as_str()))
                .collect::<Array>(),
        )
    }
}

impl Filter {
    pub fn patterns_mut(&mut self) -> &mut Vec<Regex> {
        &mut self.patterns
    }
}
