import "../components/app-bar.js";
import "../components/form-input.js";
import "../components/note-list.js";
import notesData from "../data/notes-data.js";

const noteList = document.querySelector("note-list");
noteList.note = notesData;

customElements.whenDefined("form-input").then(() => {
  document
    .querySelector("form-input")
    .addEventListener("addNewNote", (event) => {
      notesData.push(event.detail);
      noteList.note = notesData;
    });
});
