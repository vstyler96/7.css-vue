import { defineComponent, ref } from 'vue';
import { uniqueId } from '../../utils/helpers';
import './index.css';

type SearchboxProps = {
  instant?: boolean;
  placeholder?: string;
};

export default defineComponent({
  name: 'WinSearchbox',
  props: {
    instant: { type: Boolean, default: false },
    placeholder: { type: String, default: "Search" },
  },
  emits: ['update:search', 'search'],
  setup(props: SearchboxProps, { attrs, emit }) {
    const id = `searchbox-${uniqueId()}`;
    const searchValue = ref();

    function onSearch() {
      emit("search", searchValue.value);
    }

    function onKeyup(e: KeyboardEvent) {
      if (e.key === 'Enter') {
        onSearch();
      }
    }

    return () => {
      if (props.instant) {
        return (
          <input
            id={id}
            type="search"
            class="winui-searchbox"
            placeholder={props.placeholder}
            value={searchValue.value}
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              searchValue.value = target.value;
            }}
            onKeyup={onKeyup}
            {...attrs}
          />
        );
      }

      return (
        <div class="searchbox win-searchbox">
          <input
            type="search"
            placeholder={props.placeholder}
            value={searchValue.value}
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              searchValue.value = target.value;
            }}
          />
          <button
            aria-label="search"
            onClick={onSearch}
          />
        </div>
      );
    };
  },
});
