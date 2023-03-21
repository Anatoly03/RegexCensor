var fs = require('fs');

fs.rmSync('build', { recursive: true, force: true })
fs.renameSync('lib/pkg', 'build')
fs.unlinkSync('build/.gitignore')
