
/*
 * THIS DOCUMENT IS GENERATED.
 * MANUAL COMMITS ARE OVERRIDEN.
 * SEE 'scripts/universalize.generator.cjs'
 * FOR MORE INFORMATION
 */

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn universalize(s : String) -> String {
    s.chars().map(|c| {
        match c {
'a'=>"a+".to_owned(),
'b'=>"b+".to_owned(),
'c'=>"c+".to_owned(),
'd'=>"d+".to_owned(),
'e'=>"[e3]+".to_owned(),
'f'=>"f+".to_owned(),
'g'=>"g+".to_owned(),
'h'=>"h+".to_owned(),
'i'=>"[ij1]+".to_owned(),
'j'=>"[ij1]+".to_owned(),
'k'=>"k+".to_owned(),
'l'=>"[jl1]+".to_owned(),
'm'=>"m+".to_owned(),
'n'=>"n+".to_owned(),
'o'=>"[o0]+".to_owned(),
'p'=>"p+".to_owned(),
'q'=>"q+".to_owned(),
'r'=>"r+".to_owned(),
's'=>"[sz53]+".to_owned(),
't'=>"t+".to_owned(),
'u'=>"u+".to_owned(),
'v'=>"v+".to_owned(),
'w'=>"w+".to_owned(),
'x'=>"x+".to_owned(),
'y'=>"y+".to_owned(),
'z'=>"[sz53]+".to_owned(),
            other => String::from(other)
        }
    }).collect::<String>()
}
