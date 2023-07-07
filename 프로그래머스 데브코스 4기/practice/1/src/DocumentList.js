export default function DocumentList({ target, initialState }) {
  const documentList = document.createElement("div");
  target.appendChild(documentList);

  this.state = initialState;

  this.render = () => {
    this.state.map(
      (doc) => `
      <ul>
        <li>${doc.title}</li>
      </ul>
    `
    );
  };

  this.render();
}
