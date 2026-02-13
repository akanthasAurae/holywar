---
tags:
  - template
draft: true
---
%%
hello! this comment will not show up (i believe) on Quartz pages, but it is recommended to later erase it. i've left some examples as to how to format stuff, but if you need it, here's a guide! you can fold up the numbers with obsidian to avoid clutter :) have fun!!!
1. title
   title HTML/CSS is effectively a tag (h1) with a class, often corresponding to that of the status/mechanic. like this: `<h1 class=status>Status Title</h1>`
   
2. callout
   a callout is formatted like `> [!title|metadata|metadataboogaloo]` on a new line. any and all content concerning the status should be inside of it, so their lines begin with `>` as well.
   metadata tells obsidian and quartz how the callout should behave, and metadata is used in links for display text, as well as icons in images, like so: `![[nonsense.png|icon]]` or `[[Status|Statuses]]`. you can also use `no-mix` as metadata in callouts to avoid text-shadow.
   
3. first paragraph
   after your `<img>` is the first thing you put in there, your text needs to then be entirely wrapped in a `<span>` tag. (in most cases, if your sentence begins with the word of the status itself, you can just not put any icons before it.)
   **any and all effects inside this first paragraph are 100% html.**

4. second paragraph onwards
   100% free game for markdown! you can still use `<span>`s to colour text, but like before, links will automatically be colored. you can use metadata to set display text instead. images must be prefixed by `!`, in order to be embedded. they must have the metadata of `icon`, such as `![[nonsense.png|icon]]`.

5. tags
   generally speaking, tags should include any sub-effects; such as Bloodloss, or Combat Power Up. they do not need to necessarily include attribute mechanics such as Stance or Vital State unless they uniquely affect the way those behave (such as Stancebroken). additionally, they must include the name of the status itself, and any pertaining categories such as status, mechanic, or void.

6. use other stuff as examples, and make sure to remove the draft tag once your status is done and in the right folder!
   heavily encouraged overall but do look at other statuses if you need guidance or ask me! :)

**note!**
we work with strict markdown breaks, so if you need a breakline instead of a new paragraph, use `<br>`.
%%

<h1 class=down>Status Title</h1>

> [!down|status|none]
> <img src="sinkdeluge.png" class=floatl> <span>Hello, this should inform the reader of what your status is! Any additional effects like <img src="comminup.png" class=icon> <a data-href="Combat Base Up" href="Combat Base Up" class=internal-link>Combat Base Up</a> must be formatted in a special way in the first paragraph, with 'a' for links and 'img' for icons.</span>
> 
> Any *italicized* or **bold** text will also have colors, and most status classes are bold, but you can use the classes no-b, no-i and no-mix to avoid those. <i class=no-mix>I'm free! <b class=no-mix>Free as the wind!</b></i> You can also use status classes to <span class=burn>colour things</span>.
> 
> If you want to mention statuses like ![[noctis.png|icon]] [[Noctis|Noctis Aether]], links can be handled by markdown by here. Links are automatically colored. Icons must have the metadata/class 'icon'.
> 
> <i class="vital no-b no-mix">Some funky green text! This would be bold if it wasn't for the no-b class.</i>
