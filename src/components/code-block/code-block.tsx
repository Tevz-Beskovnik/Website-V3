import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./code-block.css?inline";

interface CodeBlockProps {
  file_title?: string;
}

export default component$((props: CodeBlockProps) => {
  useStylesScoped$(styles);

  return (
    <div class="code-block-container">
      {props.file_title ? <p>{props.file_title}</p> : null}
      <div class="code-block-code">
        <Slot />
      </div>
    </div>
  );
});
