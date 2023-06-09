import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./js-code.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <p>
        <span class="type">&lt;script&gt;</span>
      </p>
      <p>
        <span class="fn">&nbsp;&nbsp;let&nbsp;</span>
        <span>element&nbsp;</span>
        <span class="fn">=&nbsp;</span>
        <span>document</span>
        <span class="fn">.</span>
        <span class="fn-name">getElementById</span>
        <span>(</span>
        <span class="string">"text-field"</span>
        <span>)</span>
        <span class="unhighlight">;</span>
      </p>
      <p>
        <span class="fn">&nbsp;&nbsp;let&nbsp;</span>
        <span>inc&nbsp;</span>
        <span class="fn">=&nbsp;</span>
        <span class="arg">0</span>
        <span class="unhighlight">;</span>
      </p>
      <p>
        <span class="fn-time">&nbsp;&nbsp;setInterval</span>
        <span>(&#123;</span>
      </p>
      <p>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;inc</span>
        <span class="fn">++</span>
        <span class="unhighlight">;</span>
      </p>
      <p>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;element</span>
        <span class="fn">.</span>
        <span>value</span>
        <span class="fn">&nbsp;=&nbsp;</span>
        <span class="string">"You are visiting this website for "</span>
        <span class="fn">&nbsp;+&nbsp;</span>
        <span>inc</span>
        <span class="fn">&nbsp;+&nbsp;</span>
        <span class="string">" seconds"</span>
        <span class="unhighlight">;</span>
      </p>
      <p>
        <span>&nbsp;&nbsp;&#125;</span>
        <span class="unhighlight">,&nbsp;</span>
        <span class="arg">1000</span>
        <span>)</span>
      </p>
      <p>
        <span class="type">&lt;/script&gt;</span>
      </p>
    </>
  );
});
