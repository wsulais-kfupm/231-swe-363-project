/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
  "watchSchema": {
    "url": "https://lkznjhybavmqwpszumqk.supabase.co/graphql/v1",
    headers: {
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrem5qaHliYXZtcXdwc3p1bXFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4NDczMjYsImV4cCI6MjAxNzQyMzMyNn0.bKzyAkYhFdh5XPSWDGKKiqB_O-nbv-4yblzMyD1AFhg",
    },
  },
  "plugins": {
    "houdini-svelte": {},
  },
  defaultKeys: ["nodeId"],
  // types: {
  //   Node: {
  //     keys: ["nodeId"],
  //   },
  // },
  "scalars": {
    /* in your case, something like */
    "Opaque": { // <- The GraphQL Scalar
      "type": "any", // <-  The TypeScript type
    },
  },
};

export default config;
