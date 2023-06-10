import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import PageCard from "~/components/page-card/page-card";
import TypingComponent from "~/components/typeing-component/typing-component";
//import { Link } from '@builder.io/qwik-city';
import styles from "./index.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <PageCard>
      <div class="main-container">
        <h1 class="main-title">Tevž Beškovnik</h1>
        <TypingComponent text="Fullstack. Embeded systems. Computer graphics" />
      </div>
    </PageCard>
  );
});

export const head: DocumentHead = {
  title: "ZVET",
  meta: [
    {
      name: "description",
      content:
        "Fullstack developer, embeded systems developer, computer graphics enthuseist",
    },
    {
      name: "keywords",
      content: "Tevž, Beškovnik, Web developer, Webdev, fullstack, ESP32",
    },
    {
      name: "author",
      content: "Tevž Beškovnik",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
};
