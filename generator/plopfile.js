module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'list',
        name: 'atomic',
        message: 'Choose atomic?',
        choices: [
          { name: 'atom', value: 'atom' },
          { name: 'molecule', value: 'molecule' },
          { name: 'organism', value: 'organism' },
          { name: 'template', value: 'template' },
          { name: 'page', value: 'page' },
        ],
      },
      {
        type: 'input',
        name: 'dirname',
        message:
          'What is the {dirname} name in the component? => src/component/{atomic}/{dirname}/{name}',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the component {name}? => src/component/{atomic}/{dirname}/{name}',
      },
    ],
    actions: (data) => {
      const path = `../src/component/${data.atomic}/${data.dirname}/`;

      /**
       * atomic
       *   index.tsx
       *   {{pascalCase name}}.stories.tsx
       */
      /**
       * molecule / organism
       *   index.tsx <= presenter を返す
       *   {{pascalCase name}}.tsx
       *   {{pascalCase name}}.stories.tsx
       *   {{pascalCase name}}.test.tsx
       */

      /**
       * template
       *   index.tsx <= container で返す
       *   {{pascalCase name}}Presenter.tsx
       *   {{pascalCase name}}Presenter.stories.tsx
       *   {{pascalCase name}}Presenter.test.tsx
       */

      /**
       * page
       *   {{kabebCase name}}/index.tsx
       *   {{kabebCase name}}/index.test.tsx
       */
      switch (data.atomic) {
        case 'atom':
          return [
            {
              type: 'add',
              path: path + '{{pascalCase name}}/index.tsx',
              templateFile: 'template/atom.tsx.hbs',
            },
            {
              type: 'add',
              path: path + '{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
              templateFile: 'template/atom.stories.tsx.hbs',
            },
          ];
        case 'molecule':
          return [
            {
              type: 'add',
              path: path + '{{pascalCase name}}/index.tsx',
              templateFile: 'template/molecule.tsx.hbs',
            },
            {
              type: 'add',
              path: path + '{{pascalCase name}}/{{pascalCase name}}.test.tsx',
              templateFile: 'template/molecule.test.tsx.hbs',
            },
            {
              type: 'add',
              path: path + '{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
              templateFile: 'template/molecule.stories.tsx.hbs',
            },
          ];
        default:
          return [];
      }
    },
  });
};
