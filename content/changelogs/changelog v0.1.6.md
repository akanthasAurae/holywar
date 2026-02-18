---
tags:
  - vyx
  - changelog
---

# hello you earthlings
it is i, master of fuckall, jack of nil

<h2 class=plus>added:</h2>

- stuff again!
- just kidding
- continued The Great Expansion That's Ever Been Done where i continue porting broken statuses into functional pages.
>[!plus]+ ported stuff
> - <span class=stealth>Stealth</span> has become ![[cloaked.png|icon]] [[Cloaked]] - in the CSS, ``cloaked`` is now an alias for ``stealth``
>    - This change is to keep consistency; Stealth itself is a mechanic (of sorts) meanwhile the status itself of being in stealth is now ![[cloaked.png|icon]] [[Cloaked]]. Technically i'm counting this as an addition rather than a modification.
>    - Includes the addition of #cloaked as a tag, further showing the alias usage.

- All modifiers are now correctly tagged as #combat, #defense, #mental, #neutral, #stealth and later on #soul. Soul tags will NOT be used as loosely as the #void tag, as they pertain specifically to soul-related statuses and mechanics, while void is a more broad category. Most soul-related statuses will be tagged #void, but not all void statuses will be tagged #soul.
- All three states of Crescent Moon (![[sheathed.png|icon]] [[Crescent Moon — Sheathed|Sheathed]], ![[unsheathed.png|icon]] [[Crescent Moon — Unsheathed|Unsheathed]] and ![[awakened.png|icon]] [[Crescent Moon — Awakened|Awakened]]) are present, and so are its sub-statuses including  ![[bloodflamepoise.png|icon]] [[Poise — Bloodflame]] (~~mostly, excluding Bloodflame itself, because what the fuck does that do in *this* system's context? Bloodloss + Burn?~~) and ![[bloodflame.png|icon]] [[Burn — Bloodflame]]
- added colour for the <span class=void>scary stuff</span> also known as the ``void`` class! it's special because it uses text-shadow magics to add a border & glow to itself~ future special classes in the future can use `void` as a template for their glows. use sparingly; CAN and WILL be laggy in huge amounts! its current sibling is <span class=deathblight>deathblight!</span>
- in celebration of Void now being real, i have added two sub-folders: Void Statuses and Void Mechanics, in their own parent folders respectively. It SHOULD hopefully help with some of the HUGE clutter!
- and in celebration of less clutter, Modifiers now have their own sub-folder in Statuses.
- fixed a circular transclusion in ![[comdown.png|icon]] [[Combat Power Down]], apparently i repeated it somewhere earlier in 0.1.5 lol? oops
- expanded on demonic subtypes of mana in ![[nimius.png|icon]] [[Nimius]], hopefully hinting at some fun things & possibly status-effect related sin magic?
- added proper ``no-b``, ``no-i`` and ``no-mix`` class support! use ``no-b`` to null a class' font weight (such as the natural boldness from any class), ``no-i`` to null italics, and ``no-mix`` to null a callout's modification of its inner text. note that color mixing does not apply to ``<span>`` if it has some other class overriding the color mixing, such as status classes.
- added Table of Content to Statuses and Mechanics indexes specifically.

<h2 class=cyber>modified:</h2>

- as mentioned before, ``cloaked`` is now an alias for ``stealth``; any element with the class of either should be <span class=cloaked>ourple</span>
- since the previous update was pushed out, I've changed ``combatdown.png`` to ``comdown.png`` and ``combatup.png`` to ``comup.png`` to continue consistency. this change can also be seen for ``defenseup.png`` becoming ``defup.png`` and ``defensedown.png`` becoming ``defdown.png``. this should fix some broken links hopefully, i'll double-check where needed
- modified [[compendium/Statuses/index|the Statuses index]] accordingly to fit the ported changes
- as is consistent as my will to live, ``customcolors.css`` and ``custom.scss`` have both, of course, been horrendously altered (half-joke). Testing in ``npx quartz build --serve``, I've attempted to recreate <span class=void>void's</span> new effects!
- ``custom.scss`` now correctly colours <span class=combat>combat tags</span>, <span class=defense>defense tags</span>, <span class=mental>mental tags</span>, and <span class=stealth>stealth tags</span>, but not soul tags yet.
	- note for stealth: they are NOT the same as ``sneak`` since I don't actually know the direction Mike is going to take concerning Stealth as a mechanic vs Cloaked as a status, for example. stealth may be aliased into sneak, or cloaked may become its own thing. fuzzy grounds. there is *some* support for soul tags such as Soul Ceiling Up being correctly processed, but this is on the loose assumption such a thing would even exist.
- fixed ![[awakened.png|icon]] [[Crescent Moon — Awakened]]'s combat images, ![[dd.png|icon]] [[Death's Door]], ![[ddrec.png|icon]] [[Death's Door — Recovery]], ![[shattered.png|icon]] [[Shattered]]. 
- additionally moved ![[shattered.png|icon]] [[Shattered]] and ![[noctis.png|icon]] [[Noctis]] into their own category/sub-folder (Void Mechanics).
- why was #unsheathed not a proper tag??? why.. why was un-sheathed the tag??
- anyway, index naming should now be a little bit easier to read in ``custom.scss``
- attempted to do some text recolouring in `custom.scss`! paragraphs, emphasized/italicized and strong/bold text should now render as mixed colours between the main color of a callout & white, with strong/bold and italic/emphasized being more colored. this is in "testing", and can change.

<h2 class=minus>removed:</h2>

- nothing yet :p

<h2 class=burn>pending:</h2>

![[to-do]]