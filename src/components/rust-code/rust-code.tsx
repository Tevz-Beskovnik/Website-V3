import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./rust-code.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <p>
        <span class="fn">use&nbsp;</span>
        <span class="type">axum</span>
        <span class="separator">::</span>
        <span class="type">Router</span>
        <span>;</span>
      </p>
      <p>&nbsp;</p>
      <p>
        <span class="fn">use&nbsp;</span>
        <span class="fn">crate</span>
        <span class="separator">::</span>
        <span class="type">cv</span>
        <span class="separator">::</span>
        <span>&#123;</span>
        <span class="fn-name">get_cv</span>
        <span>,&nbsp;</span>
        <span class="fn-name">get_cv</span>
        <span>&#125;</span>
        <span>;</span>
      </p>
      <p>&nbsp;</p>
      <p>
        <span class="fn">fn&nbsp;</span>
        <span class="fn-name">run</span>
        <span>(</span>
      </p>
      <p>
        <span class="arg">&nbsp;&nbsp;&nbsp;&nbsp;listener</span>
        <span class="separator">:&nbsp;</span>
        <span class="type">TcpListener</span>
        <span>,</span>
      </p>
      <p>
        <span>) -&gt; </span>
        <span class="type">&lt;Result()&gt;</span>
        <span>&#123;</span>
      </p>
      <p>
        <span class="fn">&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;</span>
        <span>https&nbsp;</span>
        <span class="fn">=&nbsp;</span>
        <span class="type">Router</span>
        <span class="separator">::</span>
        <span class="fn-name">new</span>
        <span>()</span>
      </p>
      <p>
        <span class="separator">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
        </span>
        <span class="fn-name">route</span>
        <span>(</span>
        <span class="string">"/cv"</span>
        <span class="separator">,&nbsp;</span>
        <span class="fn-name">get</span>
        <span>(</span>
        <span class="fn-name">get_cv</span>
        <span>)</span>
        <span>)</span>
      </p>
      <p>
        <span class="separator">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
        </span>
        <span class="fn-name">route</span>
        <span>(</span>
        <span class="string">"/cv"</span>
        <span class="separator">,&nbsp;</span>
        <span class="fn-name">put</span>
        <span>(</span>
        <span class="fn-name">update_cv</span>
        <span>)</span>
        <span>)</span>
      </p>
      <p>
        <span class="separator">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
        </span>
        <span class="fn-name">boxed_clone</span>
        <span>(</span>
        <span>);</span>
      </p>
      <p>&nbsp;</p>
      <p>
        <span class="type">&nbsp;&nbsp;&nbsp;&nbsp;axum_server</span>
        <span class="separator">::</span>
        <span class="fn-name">from_tcp</span>
        <span>(</span>
        <span class="arg">listener</span>
        <span>)</span>
      </p>
      <p>
        <span class="separator">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
        </span>
        <span class="fn-name">serve</span>
        <span>(</span>
        <span class="type">Shared</span>
        <span class="separator">::</span>
        <span class="fn-name">new</span>
        <span>(</span>
        <span>http</span>
        <span>)</span>
        <span>)</span>
      </p>
      <p>
        <span class="separator">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
        </span>
        <span class="fn-name">boxed</span>
        <span>(</span>
        <span>);</span>
      </p>
      <p>
        <span>&#125;</span>
      </p>
    </>
  );
});
