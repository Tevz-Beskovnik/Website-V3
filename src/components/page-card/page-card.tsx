import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./page-card.css?inline";
import { Github } from "../icons/github";
import { LinkedIn } from "../icons/linkedin";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="page-card">
      <h1 class="page-title">
        ZVET<span class="page-docs">.xyz</span>
      </h1>
      <Slot />
      <div class="page-footer">
        <a href="https://github.com/Tevzi2" class="icon-container">
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/tev%C5%BE-be%C5%A1kovnik-03737622b/"
          class="icon-container"
        >
          <LinkedIn />
        </a>
      </div>
    </div>
  );
});
