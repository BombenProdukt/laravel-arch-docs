import{_ as s,o as a,c as n,V as e}from"./chunks/framework.d3b95951.js";const F=JSON.parse('{"title":"Jobs","description":"","frontmatter":{},"headers":[],"relativePath":"generators/jobs.md","filePath":"generators/jobs.md"}'),l={name:"generators/jobs.md"},o=e(`<h1 id="jobs" tabindex="-1">Jobs <a class="header-anchor" href="#jobs" aria-label="Permalink to &quot;Jobs&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This page will describe how <a href="https://laravel.com/docs/10.x/queues" target="_blank" rel="noreferrer">jobs</a> can be generated.</p></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="job" tabindex="-1"><a href="https://laravel.com/docs/10.x/queues#creating-jobs" target="_blank" rel="noreferrer">Job</a> <a class="header-anchor" href="#job" aria-label="Permalink to &quot;[Job](https://laravel.com/docs/10.x/queues#creating-jobs)&quot;">​</a></h3><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">arch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.0.0</span></span>
<span class="line"><span style="color:#F07178;">definitions</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">WithoutParameters</span></span></code></pre></div><h3 id="job-with-constructor" tabindex="-1"><a href="https://laravel.com/docs/10.x/queues#creating-jobs" target="_blank" rel="noreferrer">Job With Constructor</a> <a class="header-anchor" href="#job-with-constructor" aria-label="Permalink to &quot;[Job With Constructor](https://laravel.com/docs/10.x/queues#creating-jobs)&quot;">​</a></h3><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">arch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.0.0</span></span>
<span class="line"><span style="color:#F07178;">definitions</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">WithParameters</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">metadata</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">constructor</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">properties</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">mail</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">string</span></span></code></pre></div><h3 id="queued" tabindex="-1"><a href="https://laravel.com/docs/10.x/queues#customizing-the-queue-and-connection" target="_blank" rel="noreferrer">Queued</a> <a class="header-anchor" href="#queued" aria-label="Permalink to &quot;[Queued](https://laravel.com/docs/10.x/queues#customizing-the-queue-and-connection)&quot;">​</a></h3><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">arch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.0.0</span></span>
<span class="line"><span style="color:#F07178;">definitions</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">QueuedWithoutParameters</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">shouldQueue</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span></code></pre></div><h3 id="unique" tabindex="-1"><a href="https://laravel.com/docs/10.x/queues#unique-jobs" target="_blank" rel="noreferrer">Unique</a> <a class="header-anchor" href="#unique" aria-label="Permalink to &quot;[Unique](https://laravel.com/docs/10.x/queues#unique-jobs)&quot;">​</a></h3><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">arch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.0.0</span></span>
<span class="line"><span style="color:#F07178;">definitions</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">QueuedWithoutParameters</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">shouldBeUnique</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span></code></pre></div><h3 id="unique-queued" tabindex="-1"><a href="https://laravel.com/docs/10.x/queues#unique-jobs" target="_blank" rel="noreferrer">Unique</a> <a href="https://laravel.com/docs/10.x/queues#customizing-the-queue-and-connection" target="_blank" rel="noreferrer">Queued</a> <a class="header-anchor" href="#unique-queued" aria-label="Permalink to &quot;[Unique](https://laravel.com/docs/10.x/queues#unique-jobs) [Queued](https://laravel.com/docs/10.x/queues#customizing-the-queue-and-connection)&quot;">​</a></h3><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">arch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.0.0</span></span>
<span class="line"><span style="color:#F07178;">definitions</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">QueuedWithParameters</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">shouldBeUnique</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">shouldQueue</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span></code></pre></div>`,13),p=[o];function t(r,c,i,u,y,d){return a(),n("div",null,p)}const C=s(l,[["render",t]]);export{F as __pageData,C as default};
