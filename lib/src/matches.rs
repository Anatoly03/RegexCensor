use std::ops::Range;

use crate::latinize::latinize;

use super::filter::Filter;

impl Filter {
    pub fn matches(&mut self, content: String) -> Vec<Range<usize>> {
        let latin = latinize(content).to_lowercase();
        let mut matches = Vec::new();

        for pat in self.patterns_read() {
            for mtch in pat.find_iter(&latin) {
                if let Ok(m) = mtch {
                    matches.push(m.start() .. m.end());
                }
            }
        }
        
        matches
    }
}
