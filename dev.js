var exec = require('child_process').execSync

console.log('localhost:4000')

exec('bundle exec jekyll serve')
