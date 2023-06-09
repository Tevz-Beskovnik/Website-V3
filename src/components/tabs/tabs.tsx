import {
  PropFunction,
  component$,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "./tabs.css?inline";

interface TabsProps {
  tabs: string[];
  active: number;
  onClick$: PropFunction<(text: string) => void>;
}

export default component$((props: TabsProps) => {
  useStylesScoped$(styles);
  const state = useStore({
    selected_tab: props.tabs[props.active],
  });

  return (
    <div class="tabs-container">
      {props.tabs.map((e) => (
        <div
          class={state.selected_tab == e ? "tab-item-active" : "tab-item"}
          key={e}
          onClick$={() => {
            state.selected_tab = e;
            props.onClick$(e);
          }}
        >
          {e}
        </div>
      ))}
    </div>
  );
});
