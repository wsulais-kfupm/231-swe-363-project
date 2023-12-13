import { HoudiniClient } from "$houdini";

export default new HoudiniClient({
  url: "https://lkznjhybavmqwpszumqk.supabase.co/graphql/v1",

  // uncomment this to configure the network call (for things like authentication)
  // for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
  fetchParams({ session }) {
    return {
      headers: {
        // Authentication: `Bearer ${session.token}`,
        apiKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrem5qaHliYXZtcXdwc3p1bXFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4NDczMjYsImV4cCI6MjAxNzQyMzMyNn0.bKzyAkYhFdh5XPSWDGKKiqB_O-nbv-4yblzMyD1AFhg",
      },
    };
  },
});
