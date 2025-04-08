import { onMounted, ref } from 'vue';

export default function (parentTargetId, props, maximized, minimized) {
  const offsetX = ref(props.defaultX);
  const offsetY = ref(props.defaultY);
  let tempX = 0, tempY = 0;

  const parentTarget = ref(null);
  const dragging = ref(false);

  function onDragStop() {
    if (maximized?.value || minimized?.value) return;
    document.removeEventListener('mouseup', onDragStop);
    document.removeEventListener('mousemove', onDragMove);
    dragging.value = false;
  }

  function onDragMove(e) {
    if (maximized?.value || minimized?.value) return;
    e.preventDefault();

    const x = tempX - e.clientX;
    const y = tempY - e.clientY;

    tempX = e.clientX;
    tempY = e.clientY;

    offsetY.value = (offsetY.value - y);
    offsetX.value = (offsetX.value - x);
  }

  function onDragStart(e) {
    if (maximized?.value || minimized?.value) return;

    e.preventDefault();

    tempX = e.clientX;
    tempY = e.clientY;

    dragging.value = true;

    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragStop);
  }

  onMounted(() => {
    if (!props.draggable) return;

    const header = document.getElementById(`${parentTargetId}-header`);
    parentTarget.value = document.getElementById(parentTargetId);

    if (!header) {
      throw new Error(`Element with id "${parentTargetId}" was not found`);
    }

    header.onmousedown = onDragStart;
  });

  return {
    parentTarget,
    dragging,
    offsetX,
    offsetY,
  };
}
