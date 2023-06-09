import { component$, PropFunction, useStylesScoped$ } from "@builder.io/qwik";
import { ArrowUp } from "../icons/arrow-up";
import styles from "./footer.css?inline";

interface FooterProps {
  onClick$?: PropFunction<() => void>;
}

export default component$((props: FooterProps) => {
  useStylesScoped$(styles);

  return (
    <>
      <footer>
        <div onClick$={props.onClick$} class="footer-button">
          <ArrowUp />
        </div>
      </footer>
    </>
  );
});
