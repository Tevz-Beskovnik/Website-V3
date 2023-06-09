import { component$, PropFunction, useStylesScoped$ } from "@builder.io/qwik";
import { ArrowUp } from "../icons/arrow-up";
import styles from "./header.css?inline";

interface HeaderProps {
  onClick$?: PropFunction<() => void>;
}

export default component$((props: HeaderProps) => {
  useStylesScoped$(styles);

  return (
    <>
      <header>
        <div onClick$={props.onClick$} class="header-button">
          <ArrowUp />
        </div>
      </header>
    </>
  );
});
