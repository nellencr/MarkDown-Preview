import React, { Component } from 'react';
import './index.css';
let marked = require('marked');

class App extends Component {
  state = {
    markdown: ""
  }

  updateMarkdown = function (markdown) {
    this.setState({ markdown })
  }

  render() {
    let { markdown } = this.state;
    console.log(markdown);
    return (
      <div className="container">
    <h5>Type in the Editor and see the result in the Preview section below  <span> happy #coding</span></h5>
        <div className="editor-wrap">
          <div className="toolbar bg-primary">
            <i title="no-stack-dub-sack" className="fa fa-free-code-camp"> </i>Editor
          </div>
          <textarea className="bg-info" id="editor" value={markdown} onChange={(event) => this.updateMarkdown(event.target.value)}  placeholder=" TYPE IN SOMETHING......">  </textarea>
        </div>
        <div className="toolbar headd">
          <i title="no-stack-dub-sack" className="fa fa-free-code-camp"></i> Preview <i className="fa fa-arrows-alt"></i>
        </div>
        <div className="bg-info" id="preview" >
          <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} >
          </div>
        </div>
      </div>
    )
  }
}
const placeholder =
  `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

export default App

