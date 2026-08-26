import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz Configuration
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🍲 Livro de Receitas",
    pageTitleSuffix: " | Andreia",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "pt-PT",
    baseUrl: "andreiabs.github.io/Livro-de-Receitas",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Lora",
        body: "Inter",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf9f6",
          lightgray: "#e5e7eb",
          gray: "#9ca3af",
          darkgray: "#374151",
          dark: "#1b4332",
          secondary: "#2d6a4f",
          tertiary: "#52b788",
          highlight: "rgba(82, 183, 136, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#121814",
          lightgray: "#223028",
          gray: "#6b7280",
          darkgray: "#d1d5db",
          dark: "#74c69d",
          secondary: "#52b788",
          tertiary: "#95d5b2",
          highlight: "rgba(82, 183, 136, 0.2)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config