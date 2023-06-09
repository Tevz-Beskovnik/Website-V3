import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./cpp-code.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <p>
        <span class="fn">#include&nbsp;</span>
        <span class="string">&lt;iostream&gt;</span>
      </p>
      <p>
        <span class="fn">#include&nbsp;</span>
        <span class="string">&lt;colors.hpp&gt;</span>
      </p>
      <p>&nbsp;</p>
      <p>
        <span class="fn">namespace&nbsp;</span>
        <span class="type">bolt</span>
        <span>&nbsp;&#123;</span>
      </p>
      <p>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span class="fn">void&nbsp;</span>
        <span class="type">PrintUtil</span>
        <span class="unhighlight">::</span>
        <span class="fn-name">print</span>
        <span>(</span>
        <span class="type">std</span>
        <span class="unhighlight">::</span>
        <span class="type">string&nbsp;</span>
        <span class="arg">to_print</span>
        <span>)&nbsp;</span>
        <span class="fn">const</span>
        <span>&nbsp;&#123;</span>
      </p>
      <p>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span class="type">std</span>
        <span class="unhighlight">::</span>
        <span>cout</span>
        <span class="fn">&nbsp;&lt;&lt;&nbsp;</span>
        <span class="fn-name">&nbsp;COLOR</span>
        <span>(</span>
        <span class="fn-name">RED</span>
        <span>)</span>
        <span class="fn">&nbsp;&lt;&lt;&nbsp;</span>
        <span class="arg">to_print</span>
        <span class="fn">&nbsp;&lt;&lt;&nbsp;</span>
        <span class="type">std</span>
        <span class="unhighlight">::</span>
        <span>endl</span>
        <span class="unhighlight">;</span>
      </p>
      <p>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>&#125;</span>
      </p>
      <p>&#125;</p>
    </>
  );
});
