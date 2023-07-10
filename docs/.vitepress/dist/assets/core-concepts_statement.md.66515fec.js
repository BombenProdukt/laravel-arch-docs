import{_ as s,o as a,c as n,V as l}from"./chunks/framework.d3b95951.js";const i=JSON.parse('{"title":"Statement","description":"","frontmatter":{},"headers":[],"relativePath":"core-concepts/statement.md","filePath":"core-concepts/statement.md"}'),e={name:"core-concepts/statement.md"},p=l(`<h1 id="statement" tabindex="-1">Statement <a class="header-anchor" href="#statement" aria-label="Permalink to &quot;Statement&quot;">​</a></h1><p>Statements can be thought of as child generators. They are used to generate code for a specific part of the application. For example, the <code>RouteRedirectStatement</code> would generate code for a route redirect.</p><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;">​</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">declare</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">strict_types</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BombenProdukt</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Arch</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Contract</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StatementInterface</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">code</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">context </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]):</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">context </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]):</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">imports</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">context </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]):</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">array</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">traits</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">context </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]):</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">array</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">declare</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">strict_types</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BombenProdukt</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Arch</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Statement</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">BombenProdukt</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Arch</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Renderer</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">FileRenderer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">Illuminate</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Support</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Arr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">Illuminate</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Support</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Facades</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Redirect</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RouteRedirectStatement</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StatementInterface</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__construct</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">parameters </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">code</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">context </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]):</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">hasParameters </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">count</span><span style="color:#89DDFF;">($this-&gt;</span><span style="color:#A6ACCD;">parameters</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\\</span><span style="color:#82AAFF;">sprintf</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">hasParameters </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">return Redirect::route(&#39;%s&#39;, %s);</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">return Redirect::route(&#39;%s&#39;);</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">$this-&gt;</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">hasParameters </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Arr</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">propertiesToArray</span><span style="color:#89DDFF;">($this-&gt;</span><span style="color:#A6ACCD;">parameters</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">context </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]):</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FileRenderer</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">render</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">redirect/test/route</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$this-&gt;</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">imports</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">context </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]):</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">array</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">Redirect</span><span style="color:#89DDFF;">::</span><span style="color:#F78C6C;">class</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">traits</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">context </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]):</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">array</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/faustbrian/laravel-arch/tree/main/src/Statement/Inertia/RenderStatement.php" target="_blank" rel="noreferrer">Inertia/RenderStatement</a></li><li><a href="https://github.com/faustbrian/laravel-arch/tree/main/src/Statement/Laravel/ActionRedirectStatement.php" target="_blank" rel="noreferrer">Laravel/ActionRedirectStatement</a></li><li><a href="https://github.com/faustbrian/laravel-arch/tree/main/src/Statement/Laravel/AuthorizeStatement.php" target="_blank" rel="noreferrer">Laravel/AuthorizeStatement</a></li><li><a href="https://github.com/faustbrian/laravel-arch/tree/main/src/Statement/Laravel/DispatchStatement.php" target="_blank" rel="noreferrer">Laravel/DispatchStatement</a></li><li><a href="https://github.com/faustbrian/laravel-arch/tree/main/src/Statement/Laravel/EloquentStatement.php" target="_blank" rel="noreferrer">Laravel/EloquentStatement</a></li><li><a href="https://github.com/faustbrian/laravel-arch/tree/main/src/Statement/Laravel/FireStatement.php" target="_blank" rel="noreferrer">Laravel/FireStatement</a></li><li><a href="https://github.com/faustbrian/laravel-arch/tree/main/src/Statement/Laravel/MailStatement.php" target="_blank" rel="noreferrer">Laravel/MailStatement</a></li><li><a href="https://github.com/faustbrian/laravel-arch/tree/main/src/Statement/Laravel/NotificationStatement.php" target="_blank" rel="noreferrer">Laravel/NotificationStatement</a></li><li><a href="https://github.com/faustbrian/laravel-arch/tree/main/src/Statement/Laravel/NotifyStatement.php" target="_blank" rel="noreferrer">Laravel/NotifyStatement</a></li><li><a href="https://github.com/faustbrian/laravel-arch/tree/main/src/Statement/Laravel/QueryStatement.php" target="_blank" rel="noreferrer">Laravel/QueryStatement</a></li><li><a href="https://github.com/faustbrian/laravel-arch/tree/main/src/Statement/Laravel/ResourceCollectionStatement.php" target="_blank" rel="noreferrer">Laravel/ResourceCollectionStatement</a></li><li><a href="https://github.com/faustbrian/laravel-arch/tree/main/src/Statement/Laravel/ResourceStatement.php" target="_blank" rel="noreferrer">Laravel/ResourceStatement</a></li><li><a href="https://github.com/faustbrian/laravel-arch/tree/main/src/Statement/Laravel/RespondStatement.php" target="_blank" rel="noreferrer">Laravel/RespondStatement</a></li><li><a href="https://github.com/faustbrian/laravel-arch/tree/main/src/Statement/Laravel/RouteRedirectStatement.php" target="_blank" rel="noreferrer">Laravel/RouteRedirectStatement</a></li><li><a href="https://github.com/faustbrian/laravel-arch/tree/main/src/Statement/Laravel/SessionStatement.php" target="_blank" rel="noreferrer">Laravel/SessionStatement</a></li><li><a href="https://github.com/faustbrian/laravel-arch/tree/main/src/Statement/Laravel/StatementInterface.php" target="_blank" rel="noreferrer">Laravel/StatementInterface</a></li><li><a href="https://github.com/faustbrian/laravel-arch/tree/main/src/Statement/Laravel/ValidateStatement.php" target="_blank" rel="noreferrer">Laravel/ValidateStatement</a></li><li><a href="https://github.com/faustbrian/laravel-arch/tree/main/src/Statement/Laravel/ViewStatement.php" target="_blank" rel="noreferrer">Laravel/ViewStatement</a></li></ul>`,8),t=[p];function o(r,c,D,y,C,F){return a(),n("div",null,t)}const h=s(e,[["render",o]]);export{i as __pageData,h as default};