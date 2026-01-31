import { defineComponent, computed } from 'vue';
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import WinCollapse from '../Collapse/index.tsx';
import './index.css';

// Register languages
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('vue', xml);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

type CodePreviewProps = {
  code: string;
  language?: string;
  title?: string;
};

export default defineComponent({
  name: 'WinCodePreview',
  props: {
    code: { type: String, required: true },
    language: { type: String, default: 'vue' },
    title: { type: String, default: 'Show Code' },
  },
  setup(props: CodePreviewProps) {
    const highlightedCode = computed(() => {
      // Trim the code to remove extra whitespace
      const trimmedCode = props.code.trim();
      
      try {
        const result = hljs.highlight(trimmedCode, {
          language: props.language || 'vue',
        });
        return result.value;
      } catch {
        // Fallback to plain text if highlighting fails
        return trimmedCode
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
    });

    return () => (
      <WinCollapse title={props.title} class="code-preview">
        <pre class="code-preview-pre">
          <code
            class={`hljs language-${props.language}`}
            innerHTML={highlightedCode.value}
          />
        </pre>
      </WinCollapse>
    );
  },
});
