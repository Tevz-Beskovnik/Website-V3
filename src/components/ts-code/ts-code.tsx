import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./ts-code.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <p>
        <span class="fn">import</span>
        <span>&nbsp;&#123; component$</span>
        <span class="unhighlight">,&nbsp;</span>
        <span>useStylesScoped$ &#125;</span>
        <span class="fn">&nbsp;from&nbsp;</span>
        <span class="string">"@builder.io/qwik"</span>
        <span class="unhighlight">;</span>
      </p>
      <p>
        <span class="fn">import</span>
        <span> styles</span>
        <span class="fn"> from&nbsp;</span>
        <span class="string">"./cv-main.css?inline"</span>
        <span class="unhighlight">;</span>
      </p>
      <p>&nbsp;</p>
      <p>
        <span class="fn">export default</span>
        <span class="fn-name"> component$</span>
        <span>(()</span>
        <span class="fn"> =&gt;</span>
        <span> &#123;</span>
      </p>
      <p>
        <span class="fn-name">&nbsp;&nbsp;useStyleScoped$</span>
        <span>(styles)</span>
        <span class="unhighlight">;</span>
      </p>
      <p>&nbsp;</p>
      <p>
        <span class="fn">&nbsp;&nbsp;return&nbsp;</span>
        <span>(</span>
      </p>
      <p>
        <span class="type">&nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;</span>
      </p>
      <p>
        <span class="type">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1
        </span>
        <span class="fn-name"> class</span>
        <span class="fn">=</span>
        <span class="string">"main-title"</span>
        <span class="type">&gt;</span>
        <span>Welcome to my website!</span>
        <span class="type">&lt;/h1&gt;</span>
      </p>
      <p>
        <span class="type">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p
        </span>
        <span class="fn-name"> class</span>
        <span class="fn">=</span>
        <span class="string">"main-text"</span>
        <span class="type">&gt;</span>
        <span>Browse trough some of my projects!</span>
        <span class="type">&lt;/p&gt;</span>
      </p>
      <p>
        <span class="type">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;</span>
      </p>
      <p>
        <span>&nbsp;&nbsp;)</span>
        <span class="unhighlight">;</span>
      </p>
      <p>
        <span>&#125;)</span>
        <span class="unhighlight">;</span>
      </p>
    </>
  );
});
