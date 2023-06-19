const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const pattern = /^[a-zA-Z]*$/;
const prettier = require('prettier');
const component = process.argv.slice(2)?.[0].trim();
const options = prettier.resolveConfig.sync(path.join(__dirname, '../.prettierrc.js'));

if (!component) {
  console.log('\x1b[31m%s\x1b[0m', '[ERROR] Please enter the component name.');
  return;
}

if (!pattern.test(component)) {
  console.log('\x1b[31m%s\x1b[0m', '[ERROR] Component names cannot include special characters.');
  return;
}

const dirs = [
  { path: path.join(__dirname, '../packages', 'ui', 'src', component), module: 'ui' },
  { path: path.join(__dirname, '../packages', 'shineout', 'src', component), module: 'shineout' },
  {
    path: path.join(__dirname, '../packages', 'shineout-style', 'src', component),
    module: 'shineout-style',
  },
];

function mkdir(dir, module) {
  // Create a base directory.
  fs.mkdirSync(dir);
  // Create the __example__ directory under the base directory.
  if (module !== 'shineout-style') {
    fs.mkdirSync(path.join(dir, '__example__'));
    // Create the __test__ directory under the base directory.
    fs.mkdirSync(path.join(dir, '__test__'));
    // Create the index.md file under the base directory.
    fs.writeFileSync(path.join(dir, 'index.md'), '');
    // Create the index.ts file under the base directory.
    fs.writeFileSync(path.join(dir, 'index.ts'), '');
    // Create the ${component}.tsx file under the base directory.
    fs.writeFileSync(path.join(dir, `${component}.tsx`), '');
    // Create the .type.tsx file under the base directory.
    fs.writeFileSync(path.join(dir, `${component}.type.ts`), '');
  }

  // 读取 ./ejs/`${module}` 文件夹下的所有 ejs 模板，并依次读取
  const templates = fs.readdirSync(path.join(__dirname, `./ejs/${module}`), 'utf-8');
  templates.forEach((template) => {
    const fileName = template.replace('.ejs', '').replace('component', component);
    // 读取 ejs 模板内容
    const content = ejs.compile(
      fs.readFileSync(path.join(__dirname, `./ejs/${module}`, template), 'utf-8'),
    );
    const render = content({
      component,
      Component: component.charAt(0).toUpperCase() + component.slice(1),
    });
    // 根据 ejs 模板内容，创建文件
    if (fileName.indexOf('.md') > -1) {
      fs.writeFileSync(path.join(dir, fileName), render);
      return;
    }
    // 对非 md 文件做 prettier 格式化
    try {
      fs.writeFileSync(path.join(dir, fileName), prettier.format(render, { ...options }));
    } catch (error) {
      fs.writeFileSync(path.join(dir, fileName), render);
    }
  });
}

dirs.forEach((dir) => {
  if (!fs.existsSync(dir.path)) {
    mkdir(dir.path, dir.module);
  } else {
    // 删除已存在的文件夹
    fs.rmdirSync(dir.path, { recursive: true });
  }
});