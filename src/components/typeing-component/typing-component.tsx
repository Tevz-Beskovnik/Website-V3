import {
  component$,
  useClientEffect$,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "./typing-component.css?inline";

interface TypingComponentProps {
  text: string;
}
export default component$((props: TypingComponentProps) => {
  useStylesScoped$(styles);

  const state = useStore({
    add: true,
    count: 0,
    typed: "",
  });

  useClientEffect$(() => {
    let interval: any;
    setTimeout(() => {
      // timeout on page reload
      interval = setInterval(() => {
        if (state.count == props.text.length) {
          setTimeout(() => {
            // timeout for end
            state.add = false;
          }, 2000);
        } else if (state.count == 0) {
          setTimeout(() => {
            // timeout for start
            state.add = true;
          }, 1500);
        }

        if (state.count < props.text.length && state.add) {
          state.typed += props.text[state.count];
          state.count++;
        } else if (state.count > 0 && !state.add) {
          state.typed = state.typed.slice(0, -1);
          state.count--;
        }
      }, 150);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <span class="typing-typed typing-begining">{">"}:</span>
      <span class="typing-typed">
        {state.typed}
        <span class="typing-cursor"></span>
      </span>
    </div>
  );
});
