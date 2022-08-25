'use strict'

export const gNotes = [
    {
      id: "n101",
      type: "note-text",
      isPinned: true,
      info: { txt: "Fullstack Me Baby!" },
    },
    {
      id: "n102",
      type: "note-img",
      info: { url: "http://some-img/me", title: "Bobi and Me" },
      style: { backgroundColor: "#00d" },
    },
    {
      id: "n103",
      type: "note-todos",
      info: {
        label: "Get my stuff together",
        todos: [
          { txt: "Driving liscence", doneAt: null },
          { txt: "Coding power", doneAt: 187111111 },
        ],
      },
    },
    {
      id: "n102",
      type: "note-video",
      info: { url: "http://some-img/me", title: "Bobi and Me" },
      style: { backgroundColor: "#00d" },
    },
  ]