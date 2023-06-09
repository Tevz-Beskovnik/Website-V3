import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import PageCard from "~/components/page-card/page-card";
import TypingComponent from "~/components/typeing-component/typing-component";
//import { Link } from '@builder.io/qwik-city';
import styles from "./index.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const state = useStore({
    position: 0,
    activeTab: "rust",
    activeSelection: "about",
  });

  return (
    <>
      {state.position > 0 ? (
        <Header
          onClick$={() => {
            state.position--;
          }}
        />
      ) : null}
      {state.position == 0 ? (
        <PageCard background="./background.svg">
          <div class="main-container">
            <h1 class="main-title">Tevž Beškovnik</h1>
            <TypingComponent text="Fullstack. Embeded systems. Computer graphics" />
          </div>
        </PageCard>
      ) : state.position == 1 ? (
        <PageCard background="./background-second.svg">
          <div class="main-contents fourth-tab">
            <h1>Want to get in touch?</h1>
            <p class=""></p>
          </div>
        </PageCard>
      ) : null}
    </>
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
