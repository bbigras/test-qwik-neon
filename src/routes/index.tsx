import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Client } from "@neondatabase/serverless";

export default component$(async () => {
  const client = new Client("fake url");

  await client.connect();
  const {
    rows: [{ now }],
  } = await client.query("select now();");
  await client.end();

  return (
    <div>
      now:
      {now}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
