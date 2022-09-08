# React Accordion
Easy to use React accordion. It's reusable.

```<Accordion data={data} />```

<b>data</b> must be an array of following object.
```
{
  title: "Accordion header"
  context: "Accordion text"
}
```
# Options
<hr>

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| closePrevious | Boolean | false | to close previously opened accordion tab when opening other |

# Example

```
const data = [
  {
    title: "What is FAQ process?",
    context:
      "FAQ stands for Frequently Asked Questions. It's your opportunity to communicate with the most important visitors to your website."
  },
  {
    title: "Which is correct FAQ or FAQs?",
    context:
      "noun, plural FAQs, FAQ's. Chiefly Digital Technology. a document, in question and answer format, that introduces newcomers to a topic or answers common questions."
  },
  {
    title: "What makes a good FAQ page?",
    context:
      "Customer Focus. As always, the key to a great website or FAQ page is to keep it customer focused. Just like your products and services."
  }
]

<Accordion data={data} />
```

![React Accordion](public\react_accordion_npm_package.png)