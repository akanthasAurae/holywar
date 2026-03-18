/***** FULL MODIFIED main.js WITH ADD/REMOVE BUTTONS *****/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

var main_exports = {};
__export(main_exports, {
  default: () => CSSInserter
});
module.exports = __toCommonJS(main_exports);

var import_obsidian = require("obsidian");

/* ================================
   DEFAULT SETTINGS
================================ */

var DEFAULT_SETTINGS = {
  css: []
};

/* ================================
   SETTINGS TAB
================================ */

class GeneralSettingsTab extends import_obsidian.PluginSettingTab {

  display() {
    const { containerEl } = this;
    containerEl.empty();

    containerEl.createEl("p", {
      text: "You can use {selection} inside attributes, class, or style."
    });

    /* ===== ADD BUTTON ===== */
    const addContainer = containerEl.createDiv({ cls: "css-inserter-add-container" });

    new import_obsidian.ButtonComponent(addContainer)
      .setIcon("lucide-plus")
      .setTooltip("Add CSS Snippet")
      .onClick(async () => {
        this.plugin.settings.css.push({
          name: "New Snippet",
          tag: "span",
          attribute: "",
          class: "",
          style: "",
          contextMenu: false,
          voidTag: false
        });

        await this.plugin.saveSettings();
        this.plugin.reloadCommands();
        this.display();
      });

    containerEl.createEl("hr");

    /* ===== EXISTING SNIPPETS ===== */
    this.plugin.settings.css.forEach((css, index) => {

      const wrapper = containerEl.createDiv({ cls: "css-snippet-wrapper" });

      /* REMOVE BUTTON */
      const removeContainer = wrapper.createDiv({ cls: "css-remove-container" });

      new import_obsidian.ButtonComponent(removeContainer)
        .setIcon("lucide-x")
        .setTooltip("Remove CSS Snippet")
        .onClick(async () => {
          this.plugin.settings.css.splice(index, 1);
          await this.plugin.saveSettings();
          this.plugin.reloadCommands();
          this.display();
        });

      new import_obsidian.Setting(wrapper)
        .setName("Name")
        .addText(text =>
          text.setValue(css.name).onChange(async value => {
            css.name = value;
            await this.plugin.saveSettings();
            this.plugin.reloadCommands();
            this.display();
          })
        );

      new import_obsidian.Setting(wrapper)
        .setName("Tag")
        .addText(text =>
          text.setValue(css.tag).onChange(async value => {
            css.tag = value;
            await this.plugin.saveSettings();
            this.plugin.reloadCommands();
            this.display();
          })
        );

      new import_obsidian.Setting(wrapper)
        .setName("Attributes")
        .addText(text =>
          text.setValue(css.attribute).onChange(async value => {
            css.attribute = value;
            await this.plugin.saveSettings();
            this.display();
          })
        );

      new import_obsidian.Setting(wrapper)
        .setName("Class")
        .addText(text =>
          text.setValue(css.class).onChange(async value => {
            css.class = value;
            await this.plugin.saveSettings();
            this.display();
          })
        );

      new import_obsidian.Setting(wrapper)
        .setName("Style")
        .addText(text =>
          text.setValue(css.style).onChange(async value => {
            css.style = value;
            await this.plugin.saveSettings();
            this.display();
          })
        );

      new import_obsidian.Setting(wrapper)
        .setName("Show in Context Menu")
        .addToggle(toggle =>
          toggle.setValue(css.contextMenu).onChange(async value => {
            css.contextMenu = value;
            await this.plugin.saveSettings();
            this.display();
          })
        );

      new import_obsidian.Setting(wrapper)
        .setName("Void tag (no closing tag)")
        .addToggle(toggle =>
          toggle.setValue(css.voidTag || false).onChange(async value => {
            css.voidTag = value;
            await this.plugin.saveSettings();
            this.display();
          })
        );
      
        /* ===== PREVIEW BLOCK ===== */

const previewContainer = wrapper.createDiv({
  cls: "css-snippet-preview-container"
});

previewContainer.style.marginTop = "8px";
previewContainer.style.padding = "6px";
previewContainer.style.border = "1px solid var(--background-modifier-border)";
previewContainer.style.borderRadius = "6px";
previewContainer.style.backgroundColor = "var(--background-secondary)";

const previewLabel = previewContainer.createEl("div", {
  text: "Preview:",
});
previewLabel.style.fontSize = "0.8em";
previewLabel.style.opacity = "0.7";
previewLabel.style.marginBottom = "4px";

/* Build preview element */

const previewSelection = "Preview";

const processedAttribute = this.plugin.applySelectionTemplate(css.attribute, previewSelection);
const processedClass = this.plugin.applySelectionTemplate(css.class, previewSelection);
const processedStyle = this.plugin.applySelectionTemplate(css.style, previewSelection);

let attributeString = "";

if (processedAttribute.trim() !== "") {
  attributeString += " " + processedAttribute.trim();
}

if (processedClass.trim() !== "") {
  attributeString += ` class="${processedClass.trim()}"`;
}

if (processedStyle.trim() !== "") {
  attributeString += ` style="${processedStyle.trim()}"`;
}

let previewHTML = "";

if (css.voidTag) {
  previewHTML = `<${css.tag}${attributeString}>`;
} else {
  previewHTML = `<${css.tag}${attributeString}>${previewSelection}</${css.tag}>`;
}

const previewRender = previewContainer.createDiv();
/* Render as escaped HTML string instead of DOM */

const codeBlock = previewContainer.createEl("pre");
codeBlock.style.margin = "0";
codeBlock.style.padding = "6px";
codeBlock.style.backgroundColor = "var(--background-primary)";
codeBlock.style.borderRadius = "4px";
codeBlock.style.fontSize = "0.85em";

const codeEl = codeBlock.createEl("code");
codeEl.textContent = previewHTML;

      containerEl.createEl("hr");
    });
  }
}

/* ================================
   MAIN PLUGIN
================================ */

class CSSInserter extends import_obsidian.Plugin {

  async onload() {
    await this.loadSettings();
    this.reloadCommands();
    this.addSettingTab(new GeneralSettingsTab(this.app, this));
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  reloadCommands() {
    this.app.commands.commands = Object.fromEntries(
      Object.entries(this.app.commands.commands).filter(
        ([key]) => !key.startsWith("css-inserter:insert-css")
      )
    );

    this.settings.css.forEach((css, index) => {
      this.addCSSCommand(css, index + 1);
    });
  }

  applySelectionTemplate(str, selection) {
    if (!str) return "";
    return str.replace(/\{selection\}/g, selection);
  }

  addCSSCommand(css, index) {
    this.addCommand({
      id: `insert-css${index}`,
      name: css.name,
      editorCallback: (editor) => {

        const selection = editor.getSelection();

        const processedAttribute = this.applySelectionTemplate(css.attribute, selection);
        const processedClass = this.applySelectionTemplate(css.class, selection);
        const processedStyle = this.applySelectionTemplate(css.style, selection);

        let attributeString = "";

        if (processedAttribute.trim() !== "") {
          attributeString += " " + processedAttribute.trim();
        }

        if (processedClass.trim() !== "") {
          attributeString += ` class="${processedClass.trim()}"`;
        }

        if (processedStyle.trim() !== "") {
          attributeString += ` style="${processedStyle.trim()}"`;
        }

        let html = "";

        if (css.voidTag) {
          html = `<${css.tag}${attributeString}>`;
        } else {
          html = `<${css.tag}${attributeString}>${selection}</${css.tag}>`;
        }

        editor.replaceSelection(html);
      }
    });
  }

  removeCSS(editor) {
    const selection = editor.getSelection();
    const clean = selection.replace(/(<([^>]+)>)/gi, "");
    editor.replaceSelection(clean);
  }
}