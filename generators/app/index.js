const Generator = require('yeoman-generator')

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts)

    this.argument('compName', { type: String, required: false });

  }

  prompting() {

    const promptName = () => this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'New component name',
    }]).then((answers) => {
      this.compName = answers.name
    })

    const argName = () => {return this.compName = this.options.compName}

    return this.options.compName ? argName() : promptName()
  }

  make() {
    this.log(`Baking your ${this.compName} component`)
  }

  createIndex() {
    this.fs.copyTpl(
      this.templatePath('index.ts'),
      this.destinationPath(`src/components-ts/${this.compName}/index.js`),
      { name: this.compName }
    )
  }

  createComponent() {
    this.fs.copyTpl(
      this.templatePath('Component.tsx'),
      this.destinationPath(`src/components-ts/${this.compName}/${this.compName}.tsx`),
      { name: this.compName }
    )
  }

  createStory() {
    this.fs.copyTpl(
      this.templatePath('Component.stories.tsx'),
      this.destinationPath(`src/components-ts/${this.compName}/${this.compName}.stories.tsx`),
      { name: this.compName }
    )
  }

}

