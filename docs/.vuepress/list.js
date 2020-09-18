const _ = require('lodash');
const fs = require('fs');
const glob = require('glob');
const markdownIt = require('markdown-it');
const meta = require('markdown-it-meta');

module.exports = function(parent_path, dir) {
    files = glob
        .sync(parent_path + (dir ? `/${dir}` : '') + '/**/*.md')
        .map(path => {
            // Instantiate MarkdownIt
            md = new markdownIt();
            // Add markdown-it-meta
            md.use(meta);
            // Get the order value
            file = fs.readFileSync(path, 'utf8');
            md.render(file);
            order = md.meta.order;
            // Remove "parent_path" and ".md"
            path = path.slice(parent_path.length + 1, -3);
            // Remove "README", making it the de facto index page
            if (path.endsWith('README')) {
                path = path.slice(0, -6);
            }

            return {
                path,
                order
            };
        });

    // Return the ordered list of files, sort by 'order' then 'path'
    return _.sortBy(files, ['order', 'path']).map(file => file.path);
};