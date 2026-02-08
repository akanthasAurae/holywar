---
tags:
  - vyx
  - changelog
---


# hello you earthlings
it is i, master of bullshit, jack of none

<h2 class=plus>added:</h2>

- stuff!
- just kidding
- added proper index.md files to *all categories* excluding this one since i think that's silly. added some css changes to make the title of indexes captalized & include their category name.
- added a bunch of icons!
- added (officially) Minimum Up and Maximum Up statuses (ie <img src="comminup.png" class=icon> <span class=combat>Combat Minimum Up</span>). they use the classes <span class=neutral>neutral</span>, <span class=combat>combat</span>, <span class=mental>mental</span>, <span class=defense>defense</span> and <span class=sneak>sneak</span>. note that any links containing the word <span class=stealth>stealth</span> will be colored as stealth, not sneak. (boowomp)
- the official list is now as follows: 
> [!menuu]- Added modifiers
> > [!neutral]- Neutral modifiers
> > - ![[minup.png|icon]] [[Base Power Up]]
> > - ![[mindown.png|icon]] [[Base Power Down]]
> > - ![[maxup.png|icon]] [[Ceiling Power Up]]
> > - ![[maxdown.png|icon]] [[Ceiling Power Down]]
> > - ![[minmaxup.png|icon]] [[Final Power Up]]
> > - ![[minmaxdown.png|icon]] [[Final Power Down]]
>   
> > [!combat]- Combat modifiers  
> > - ![[comminup.png|icon]] [[Combat Base Up]]
> > - ![[commindown.png|icon]] [[Combat Base Down]]
> > - ![[commaxup.png|icon]] [[Combat Ceiling Up]]
> > - ![[commaxdown.png|icon]] [[Combat Ceiling Down]]
> > - ![[combatup.png|icon]] [[Combat Power Up]]
> > - ![[combatdown.png|icon]] [[Combat Power Down]]
>  
> > [!defense]- Defense modifiers  
> > - ![[defminup.png|icon]] [[Defense Base Up]]
> > - ![[defmindown.png|icon]] [[Defense Base Down]]
> > - ![[defmaxup.png|icon]] [[Defense Ceiling Up]]
> > - ![[defmaxdown.png|icon]] [[Defense Ceiling Down]]
> > - ![[Defenseup.png|icon]] [[Defense Power Up]]
> > - ![[defensedown.png|icon]] [[Defense Power Down]]
> 
> > [!mental]- Mental modifiers  
> > - ![[menminup.png|icon]] [[Mental Base Up]]
> > - ![[menmindown.png|icon]] [[Mental Base Down]]
> > - ![[menmaxup.png|icon]] [[Mental Ceiling Up]]
> > - ![[menmaxdown.png|icon]] [[Mental Ceiling Down]]
> > - ![[menup.png|icon]] [[Mental Power Up]]
> > - ![[mendown.png|icon]] [[Mental Power Down]]
>   
> > [!sneak]- Stealth modifiers  
> > - ![[stminup.png|icon]] [[Stealth Base Up]]
> > - ![[stmindown.png|icon]] [[Stealth Base Down]]
> > - ![[stmaxup.png|icon]] [[Stealth Ceiling Up]]
> > - ![[stmaxdown.png|icon]] [[Stealth Ceiling Down]]
> > - ![[stup.png|icon]] [[Stealth Power Up]]
> > - ![[stdown.png|icon]] [[Stealth Power Down]]     
- haven't officially added any statuses related to it (such as Min/Max Up), but there is now a class for <span class=soul>soul</span>!
- added #positive-modifier and #negative-modifier as tags, alongside #modifier, #combat-modifier, #mental-modifier, #stealth-modifier, #defense-modifier, #neutral, and #soul-modifier. taste the tags, motherfucker!!!
- tags now have <span class=minus>c</span><span class=burn>o</span><span class=defense>l</span><span class=vital>o</span><span class=aether>u</span><span class=venom>r</span><span class=sneak>s</span>! both in quartz and obsidian *(though obsidian is far more limited, tags in the properties section will not be colored, only in text bodies such as above)*
- also i found out notepad++ lets me edit the ``customcolors.css`` much easier than if i were to do it in VScode, so, alas, another app without AI taking a huge W for no good reason beyond peak itself.

<h2 class=cyber>modified:</h2>

- all power up/down pages should now properly have their`<span>` tags closed.
- fixed some internal links not working.
- fixed index links being fucky-wucky because the markdown file used as the index was *also* being used as the folder. all links in index titles using links such as statuses should link to its status page instead of trying to access the `/contents/` folder twice. 
- added `positive` and `negative` as aliases to <span class=plus>plus</span> and <span class=minus>minus</span> classes and callouts.
- `icon`, `floatl` and `floatr` now set `width` to `auto`.
- .gitignore now ignores your `plugins` folder in `.obsidian`, so you can now use your own plugins and they won't be tracked or passed into the repo. full privacy!
- also fixed in previous commits ``.gitignore`` not actually ignoring your private obsidian files \#whoops
- cleaned up ``customcolors.css`` to be a lot less cluttered (didi just forget css or something bro wtf was wrong with me)
- **<span class=up>up</span> and <span class=down>down</span> classes may be deprecated soon as i no longer have any use for them currently.** if you'd like to contest this, please do so; i've already removed their `[data-href]` selectors in the CSS, and commented out any `[href]` selectors that use it.
- [[Crescent Moon — Awakened]] does **no longer have** the japanese flavour text in its filename, and is instead used as display text only!
- modified `obsidianoverrides.css` to now modify your caret color (the little text insertion blinking thing) to be your accent color (+ ~20% brightness & slightly less opaque)! i thought that would be fun :3
- messed with some things to make sure *most* custom colors are respected in obsidian, both in editor & in reading mode.

<h2 class=minus>removed:</h2>

- finally removed the fast-color plugin entirely! it will no longer be used. if it somehow persists on your repo branch, remove it please, as its folder will no longer be tracked by .gitignore, and no longer has any use; all its colors have been ported over to .customcolors.css and .custom.scss.
- unfortunately i have NOT yet fully cleaned up the mess it's caused in the statuses file.

<h2 class=burn>pending:</h2>

- [[content/compendium/Statuses/index|Statuses]] REALLY needs clean-up
- need to do soul statuses next & soul mechanics as a sub-folder of [[content/compendium/Mechanics/index|Mechanics]] + add css rule concerning naming that index
- character templates being functional (ie multi-column outputting actual multi-columns in Quartz)
- actually do soul modifiers oops
