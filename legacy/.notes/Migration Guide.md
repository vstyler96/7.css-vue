# Vue to TypeScript React (TSX) Migration Guide

## Overview

This document outlines the comprehensive plan to convert the **7.css-vue** component library from Vue 3 to TypeScript React components while maintaining the Windows 7 UI styling and functionality.

## Current State Analysis

- **Framework:** Vue 3 with Composition API
- **Build System:** Vite with Vue plugin
- **Styling:** 7.css with Sass/SCSS
- **Components:** 23 UI components
- **TypeScript:** Currently uses JSConfig (JavaScript)
- **Dependencies:** Vue 3.5.19, 7.css 0.17.0, Vite 6.3.5

## Migration Strategy

### Key Conversion Challenges

#### Vue-Specific Features → React Equivalents
- `v-model` → `value` + `onChange` patterns
- Vue slots → React `children` prop and render props  
- Vue composables → React hooks
- Vue reactivity → React state management
- `defineEmits` → callback props
- `defineProps` → TypeScript interfaces
- Vue `Teleport` → React Portals
- Scoped CSS → CSS Modules or styled-components

#### Component Features to Handle
- Event emitters → callback props
- Dynamic components → conditional rendering
- Slot content → children and render props
- Vue directives → React patterns

## Detailed Migration Plan

### Phase 1: Foundation Setup

#### 1.1 TypeScript Configuration
- [ ] Create `tsconfig.json` with React support
- [ ] Replace `jsconfig.json` with TypeScript configuration
- [ ] Configure strict TypeScript settings
- [ ] Set up path mapping for imports

#### 1.2 Build System Updates
- [ ] Update Vite configuration for React + TSX
- [ ] Replace `@vitejs/plugin-vue` with `@vitejs/plugin-react`
- [ ] Configure TypeScript compilation
- [ ] Update build outputs for React library

#### 1.3 Dependencies
- [ ] Remove Vue dependencies
- [ ] Add React dependencies (`react`, `react-dom`)
- [ ] Add TypeScript dependencies
- [ ] Add React types (`@types/react`, `@types/react-dom`)
- [ ] Keep 7.css dependency

### Phase 2: Utilities & Infrastructure

#### 2.1 Helper Functions (`src/helpers.js` → `src/helpers.ts`)
- [ ] Convert `uniqueId()` function
- [ ] Convert `isBrowser()` function  
- [ ] Convert `getWindowDimensions()` function
- [ ] Convert `debounce()` function
- [ ] Convert `clamp()` function
- [ ] Add proper TypeScript types and interfaces

#### 2.2 Composables → React Hooks
- [ ] Convert `draggable.js` to `useDraggable` React hook
- [ ] Adapt Vue reactivity to React state
- [ ] Handle DOM event management
- [ ] Maintain boundary constraints logic

#### 2.3 Type Definitions
- [ ] Create base component prop interfaces
- [ ] Create event handler types
- [ ] Create styling prop types
- [ ] Create shared utility types

### Phase 3: Component Conversion

#### 3.1 Simple Components (Low Complexity)
**Priority Order:**

1. **Icon Component** (`Icon.vue` → `Icon.tsx`)
   - Convert SVG path rendering
   - Add icon type definitions
   - Handle size props

2. **Button Component** (`Button.vue` → `Button.tsx`)
   - Convert click handlers
   - Maintain styling classes
   - Handle text and children props

3. **Link Component** (`Link.vue` → `Link.tsx`)
   - Handle href/to routing logic
   - Convert conditional rendering (a vs button)
   - Add icon integration

4. **Progress Component** (`Progress.vue` → `Progress.tsx`)
   - Convert progress value handling
   - Maintain animation logic
   - Handle indeterminate state

5. **Slider Component** (`Slider.vue` → `Slider.tsx`)
   - Convert range input handling
   - Add value change callbacks

#### 3.2 Form Components (Medium Complexity)

6. **Checkbox Component** (`Checkbox.vue` → `Checkbox.tsx`)
   - Convert v-model to controlled component
   - Handle array and boolean values
   - Maintain label association

7. **Radio Component** (`Radio.vue` → `Radio.tsx`)
   - Convert radio group logic
   - Handle name grouping
   - Add proper change handlers

8. **Textbox Component** (`Textbox.vue` → `Textbox.tsx`)
   - Handle input/textarea conditional rendering
   - Convert v-model to value/onChange
   - Add readonly states

9. **Dropdown Component** (`Dropdown.vue` → `Dropdown.tsx`)
   - Convert select options rendering
   - Handle placeholder logic
   - Add item customization props

10. **Searchbox Component** (`Searchbox.vue` → `Searchbox.tsx`)
    - Handle instant vs button search modes
    - Convert search event handling
    - Maintain enter key functionality

#### 3.3 Layout Components (Medium Complexity)

11. **Groupbox Component** (`Groupbox.vue` → `Groupbox.tsx`)
    - Convert fieldset/legend structure
    - Handle title/label props

12. **Menu Component** (`Menu.vue` → `Menu.tsx`)
    - Convert role-based structure
    - Handle children rendering

13. **MenuBar Component** (`MenuBar.vue` → `MenuBar.tsx`)
    - Maintain menubar structure
    - Handle menu item children

14. **MenuItem Component** (`MenuItem.vue` → `MenuItem.tsx`)
    - Convert submenu logic
    - Handle recursive menu rendering
    - Add aria attributes

15. **Navbar Component** (`Navbar.vue` → `Navbar.tsx`)
    - Convert gradient styling
    - Handle glass morphism option
    - Integrate navbar items

16. **NavbarItem Component** (`NavbarItem.vue` → `NavbarItem.tsx`)
    - Handle component switching logic
    - Convert active states
    - Add click handlers

#### 3.4 Complex Components (High Complexity)

17. **Balloon Component** (`Balloon.vue` → `Balloon.tsx`)
    - Convert tooltip positioning logic
    - Handle directional props
    - Maintain role attributes

18. **Collapse Component** (`Collapse.vue` → `Collapse.tsx`)
    - Convert details/summary structure
    - Handle recursive children
    - Add expand/collapse logic

19. **Listbox Component** (`Listbox.vue` → `Listbox.tsx`)
    - Convert option selection logic
    - Handle aria-selected states
    - Add keyboard navigation

20. **Treeview Component** (`Treeview.vue` → `Treeview.tsx`)
    - Convert tree structure
    - Handle expandable nodes
    - Add keyboard navigation

21. **Tabs Component** (`Tabs.vue` → `Tabs.tsx`)
    - Convert tab/panel structure
    - Handle active tab state
    - Add ARIA tab attributes

22. **Dialog Component** (`Dialog.vue` → `Dialog.tsx`)
    - Convert Vue Teleport to React Portal
    - Handle modal backdrop logic
    - Convert window integration
    - Add focus management

23. **Window Component** (`Window.vue` → `Window.tsx`)
    - Convert draggable integration
    - Handle maximize/minimize states
    - Add window controls
    - Integrate status bar logic

### Phase 4: Styling Strategy

#### 4.1 CSS Handling Options
**Option A: CSS Modules**
- Import styles as modules
- Maintain scoped styling
- Type-safe class names

**Option B: Styled Components**
- CSS-in-JS approach
- Dynamic styling props
- Theme integration

**Option C: External CSS + Classes**
- Keep current CSS structure
- Use className props
- Maintain 7.css integration

#### 4.2 Style Migration
- [ ] Convert scoped SCSS to chosen approach
- [ ] Maintain 7.css base styles
- [ ] Handle dynamic style bindings
- [ ] Preserve CSS variable usage

### Phase 5: Integration & Testing

#### 5.1 Main Exports (`src/index.js` → `src/index.ts`)
- [ ] Update component exports
- [ ] Remove Vue plugin logic
- [ ] Add TypeScript declarations
- [ ] Create proper module structure

#### 5.2 Development Environment
- [ ] Convert `dev/App.vue` to `dev/App.tsx`
- [ ] Convert showcase components to React
- [ ] Update development server setup
- [ ] Test component rendering

#### 5.3 Build Configuration
- [ ] Update library build for React
- [ ] Configure TypeScript declaration generation
- [ ] Update output file names
- [ ] Test UMD and ES module builds

#### 5.4 Package Configuration
- [ ] Update `package.json` dependencies
- [ ] Change peer dependencies to React
- [ ] Update entry points
- [ ] Add TypeScript exports

### Phase 6: Quality Assurance

#### 6.1 Functionality Testing
- [ ] Test all component features
- [ ] Verify event handling
- [ ] Check accessibility attributes
- [ ] Validate styling consistency

#### 6.2 API Compatibility
- [ ] Document API changes
- [ ] Create migration examples
- [ ] Test integration patterns
- [ ] Validate TypeScript types

## Implementation Notes

### Event Handling Patterns

**Vue Pattern:**
```vue
<script setup>
const emit = defineEmits(['update:model-value']);
const onToggle = () => emit('update:model-value', newValue);
</script>
```

**React Pattern:**
```tsx
interface Props {
  value: boolean;
  onChange: (value: boolean) => void;
}

const onToggle = () => props.onChange(newValue);
```

### State Management

**Vue Pattern:**
```vue
<script setup>
const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:model-value', value)
});
</script>
```

**React Pattern:**
```tsx
// Controlled component - state managed by parent
const Component = ({ value, onChange }: Props) => {
  // Internal state if needed
  const [internalState, setInternalState] = useState(false);
};
```

### Slot Conversion

**Vue Pattern:**
```vue
<template>
  <div>
    <slot name="header" />
    <slot />
    <slot name="footer" />
  </div>
</template>
```

**React Pattern:**
```tsx
interface Props {
  children?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const Component = ({ children, header, footer }: Props) => (
  <div>
    {header}
    {children}
    {footer}
  </div>
);
```

## Success Criteria

- [ ] All 23 components converted and functional
- [ ] TypeScript compilation without errors
- [ ] Maintained visual consistency with 7.css
- [ ] React best practices followed
- [ ] Accessibility preserved
- [ ] Build system working correctly
- [ ] Documentation updated

## Timeline Estimate

- **Phase 1-2 (Setup & Infrastructure):** 2-3 days
- **Phase 3 (Component Conversion):** 10-15 days
- **Phase 4-5 (Styling & Integration):** 3-5 days  
- **Phase 6 (QA & Testing):** 2-3 days

**Total Estimated Time:** 17-26 days

## Next Steps

1. Confirm migration approach and styling strategy
2. Set up TypeScript and React development environment
3. Begin with Phase 1 foundation setup
4. Convert components in order of complexity
5. Test and validate each component before proceeding

---

*Last Updated: [Current Date]*
*Status: Planning Phase*
