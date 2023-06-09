import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./page-card.css?inline";

interface PageCardProps {
  background: string;
}

export default component$((props: PageCardProps) => {
  useStylesScoped$(styles);

  return (
    <div
      class="page-card"
      style={`background-image: url(${props.background});`}
    >
      <h1 class="page-title">
        ZVET<span class="page-docs">.xyz</span>
      </h1>
      <Slot />
    </div>
  );
});
