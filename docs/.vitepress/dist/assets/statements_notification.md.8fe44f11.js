import{_ as s,o as a,c as n,V as o}from"./chunks/framework.d3b95951.js";const h=JSON.parse('{"title":"Notification","description":"","frontmatter":{},"headers":[],"relativePath":"statements/notification.md","filePath":"statements/notification.md"}'),t={name:"statements/notification.md"},e=o(`<h1 id="notification" tabindex="-1">Notification <a class="header-anchor" href="#notification" aria-label="Permalink to &quot;Notification&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This page will describe how <a href="https://laravel.com/docs/10.x/notifications#using-the-notification-facade" target="_blank" rel="noreferrer">notifications using the notification facade</a> can be sent from a controller.</p></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">arch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.0.0</span></span>
<span class="line"><span style="color:#F07178;">definitions</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">controllers</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">web</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">User</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">index</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">notification</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ReviewPost recipient:post.author with:post</span></span></code></pre></div>`,4),l=[e];function p(c,i,r,d,y,f){return a(),n("div",null,l)}const F=s(t,[["render",p]]);export{h as __pageData,F as default};
