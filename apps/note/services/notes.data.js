'use strict'

export const gNotes = [
    {
      id: "n101",
      type: "text",
      isPinned: true,
      info: { title: "Bobi and Me",
      text: "Fullstack Me Baby!" },
    },
    {
      id: "n102",
      type: "image",
      info: { url: "http://some-img/me", title: "Bobi and Me" },
      style: { backgroundColor: "#00d" },
    },
    {
      id: "n103",
      type: "todo",
      info: {
        label: "Get my stuff together",
        todos: [
          { text: "Driving liscence", doneAt: null },
          { text: "Coding power", doneAt: 187111111 },
        ],
      },
    },
    {
      id: "n104",
      type: "iframe",
      info: { url: "http://some-img/me", title: "Bobi and Me" },
      style: { backgroundColor: "#00d" },
    },
  ]